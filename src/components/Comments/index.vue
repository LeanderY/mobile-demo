<template>
  <div class="comments-wrapper" :class="{ open: show }" @click="close">
    <div class="comments-content">
      <div class="title">评论 {{ list.length }}</div>
      <div class="comments-total">
        <div v-for="item in list" :key="item.id" class="comments-item">
          <img class="avatar" :src="item.avatar" />
          <div class="content">
            <span class="name">{{ item.author }}</span>
            <span class="thumb"> <i class="iconfont icon-thumb-up"></i>{{ item.likes }} </span>
            <p class="detail">{{ item.content }}</p>
            <span> {{ item.time | format }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLongComments, getShortComments } from '@/api'
import { formatTime } from '@/utils/format'
const ModalHelper = (function(bodyCls) {
  var scrollTop
  return {
    afterOpen: function() {
      scrollTop = document.scrollingElement.scrollTop
      document.body.classList.add(bodyCls)
      document.body.style.top = -scrollTop + 'px'
    },
    beforeClose: function() {
      document.body.classList.remove(bodyCls)
      document.scrollingElement.scrollTop = scrollTop
    }
  }
})('modal-open')

export default {
  filters: {
    format(time) {
      return formatTime(time, 'Y/M/D h:m:s')
    }
  },
  data() {
    return {
      list: [],
      id: this.$route.query.id,
      show: false
    }
  },
  async created() {
    // 获取长评论数据
    const long = getLongComments(this.id)
    // 获取短评论数据
    const short = getShortComments(this.id)
    const result = await Promise.all([long, short])
    result.forEach(item => {
      const com = item.comments
      this.list.push(...com)
    })
  },
  mounted() {
    this.$root.eventBus.$on('show', () => {
      this.show = true
      ModalHelper.afterOpen()
    })
  },
  methods: {
    close() {
      ModalHelper.beforeClose()
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss">
body.modal-open {
  position: fixed;
  width: 100%;
}

// 使用:first-child伪类时一定要保证前面没有兄弟节点
.comments-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  transition: visibility 0.3s ease;
  .comments-content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 85%;
    padding-bottom: 100px;
    background: #fff;
    border-radius: 5px 5px 0 0;
    transform: translate(0, 100%);
    transition: transform 0.5s ease;
    .title {
      width: 100%;
      height: 60px;
      line-height: 60px;
      padding-left: 10px;
      font-size: 16px;
      color: $gray;
    }
    .comments-total {
      height: 100%;
      overflow-y: auto;
      .comments-item {
        display: flex;
        padding: 10px;
        margin-bottom: 0.13rem;
        .avatar {
          flex: 0 0 25px;
          width: 25px;
          height: 25px;
        }
        .content {
          flex: 1;
          margin-left: 10px;
          color: $gray;
          .name {
            font-size: 16px;
            font-weight: 550;
          }
          .thumb {
            float: right;
            .iconfont {
              padding-right: 0.1rem;
            }
          }
          .detail {
            margin: 0.1rem 0;
            font-size: 16px;
            line-height: 0.8rem;
          }
          .reply {
            margin-left: 5px;
          }
        }
      }
    }
  }
  &.open {
    visibility: visible;
    .comments-content {
      transform: translate(0, 0);
    }
  }
}
</style>
