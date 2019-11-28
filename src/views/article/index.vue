<template>
  <div class="con">
    <!-- loading -->
    <Loading v-if="!data.body" />
    <!-- con-img -->
    <div v-if="data.image" class="con-img">
      <img :src="data.image" />
      <div class="con-img-mask"></div>
      <h2>{{ data.title }}</h2>
    </div>
    <!-- body -->
    <div class="con-answer" @click.prevent="pop($event)" v-html="data.body"></div>
    <!-- menu -->
    <bottom-menu />
    <!-- comment -->
    <comments />
  </div>
</template>
<script>
import Loading from '@/components/Loading'
import BottomMenu from '@/components/BottomMenu'
import Comments from '@/components/Comments'
import { getNewsById } from '@/api'

export default {
  name: 'Article',
  components: {
    Loading,
    BottomMenu,
    Comments
  },
  data() {
    return {
      data: '',
      share: false,
      scroller: window
    }
  },
  mounted() {
    // this.$el是在mounted中才会出现的，它指的是当前组件的的元素
    this.scroller = this.$el
  },
  created() {
    const id = this.$route.query.id
    getNewsById(id).then(data => {
      this.data = data
    })
  },
  methods: {
    pop(e) {
      const href = e.target.href
      if (href) {
        window.open(href)
      }
    }
  }
}
</script>
<style lang="scss">

img {
  width: 100%;
}
.con {
  color: #666;
  height: 100vh;
  .con-img {
    height: 6rem;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      position: relative;
    }
    h2 {
      width: 60%;
      right: 5%;
      bottom: 1rem;
      text-align: right;
      line-height: 1.5;
      font-size: 0.45rem;
      color: rgba(255, 255, 255, 0.9);
      position: absolute;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
    &-mask {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(91, 116, 146, 0.5);
      position: absolute;
    }
  }
  .con-answer {
    padding: 5%;
    position: relative;
    h2,
    li,
    p {
      text-align: justify !important;
    }
    h2 {
      color: $blue;
      position: relative;
      font-size: 0.54rem;
    }
    a {
      color: $yellow;
      word-break: break-word;
    }
    .headline-title {
      color: $blue;
    }
    .meta {
      text-align: left;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      .avatar {
        vertical-align: middle;
        display: inline-block;
        width: 0.6rem;
        margin-right: 0.1rem;
      }
      span {
        color: #666;
      }
      .author {
        color: $red;
        display: inline-table;
      }
    }
    .content {
      font-size: 0.4rem;
      p {
        line-height: 1.5;
        margin: 15px 0;
      }
    }
    .question {
      blockquote {
        text-align: justify;
        position: relative;
        &::before {
          content: '';
          left: -0.5rem;
          display: block;
          height: 100%;
          border-left: 0.1rem solid $yellow;
          position: absolute;
        }
      }
      &:first-child {
        padding-top: 0;
      }
      &:last-child {
        padding-bottom: 0;
        &::before {
          display: none;
        }
      }
      ul {
        padding-left: 0.3rem;
        li {
          text-align: left;
        }
      }
    }
    .content-image {
      width: inherit;
      max-width: 100%;
      margin: 0 auto;
      display: block;
    }
    .view-more {
      text-align: center;
      margin-bottom: 0.5rem;
      a {
        position: relative;
      }
    }
  }
}
</style>
