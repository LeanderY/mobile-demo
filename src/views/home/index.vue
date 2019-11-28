<template>
  <div>
    <!-- Banner组件 -->
    <Swiper v-if="isKeep" swipeid="swipe" :autoplay="2000" effect="slide">
      <div v-for="(top, index) in tops" :key="index" class="swiper-slide" @click="go(top.id)">
        <img :src="top.image" />
        <div></div>
        <h3>{{ top.title }}</h3>
      </div>
    </Swiper>
    <!-- 新闻列表 -->
    <div v-for="(item, index) in list" :key="index" class="list">
      <p class="list-time">{{ item.date | formatDate }}</p>
      <div v-for="y in item.stories" :key="y.title" class="list-con" @click="go(y.id)">
        <p>{{ y.title }}</p>
        <img :src="y.images[0]" />
      </div>
    </div>
    <!-- 动态图组件 -->
    <Loading v-if="!list.length" />
    <!-- 滑动加载更多组件 -->
    <Infinite :scroller="scroller" :loading="loading" @load="loadMore" />
    <!-- 回到顶部组件 -->
    <BackScroll :scroller="scroller" />
  </div>
</template>
<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper'
import BackScroll from '@/components/BackScroll'
import Infinite from '@/components/InfiniteScroll'
import Loading from '@/components/Loading'
import { getLatestNews, getNewsByDate } from '@/api'

export default {
  filters: {
    formatDate(value) {
      return value.substring(0, 4) + '/' + value.substring(4, 6) + '/' + value.substring(6, 8)
    }
  },
  components: {
    Swiper,
    BackScroll,
    Infinite,
    Loading
  },
  data() {
    return {
      count: 1,
      loading: false,
      scroller: null,
      list: [],
      tops: [],
      isKeep: false
    }
  },
  mounted() {
    getLatestNews().then(({ top_stories, ...othter }) => {
      this.tops = top_stories
      this.list.push(othter)
      this.loading = false
    })
    this.scroller = this.$el
  },
  activated() {
    this.isKeep = true
  },
  deactivated() {
    this.isKeep = false
  },
  methods: {
    loadMore() {
      this.loading = true
      setTimeout(() => {
        this.count--
        const date = this.GetDate()
        getNewsByDate(date).then(data => {
          this.list.push(data)
          this.loading = false
        })
      }, 1000)
    },
    GetDate() {
      const date = new Date()
      date.setDate(date.getDate() + this.count)
      const year = date.getFullYear()
      let month = date.getMonth() + 1 // 获取当前月份的日期
      month = month >= 10 ? month : '0' + month
      let day = date.getDate()
      day = day >= 10 ? day : '0' + day
      return year + '' + month + '' + day
    },
    go(id) {
      this.$router.push({
        path: 'article',
        query: {
          id: id
        }
      })
    }
  }
}
</script>
<style lang="scss">

.swiper-slide {
  div {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    position: absolute;
    background-color: $blue;
  }
  img {
    width: 100%;
    height: 100%;
    position: relative;
  }
  h3 {
    width: 70%;
    color: #fff;
    font-size: 0.5rem;
    line-height: 1rem;
    right: 5%;
    bottom: 2.6rem;
    text-align: right;
    position: absolute;
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    &:before {
      content: '';
      width: 3rem;
      bottom: -0.6rem;
      right: 0;
      display: block;
      position: absolute;
    }
  }
}
</style>
