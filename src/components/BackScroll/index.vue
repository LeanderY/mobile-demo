<template>
  <div v-if="circle" class="circle" @click="top()">
    <i class="iconfont icon-arrow01"></i>
  </div>
</template>
<script>
import Scroll from '@/utils/scroll'
export default {
  name: 'BackScroll',
  mixins: [Scroll],
  data() {
    return {
      circle: false
    }
  },
  methods: {
    onScroll() {
      const scroller = this.scroller
      const height = Math.ceil(window.screen.height / 2)
      // 监听页面已滑动的位置，当页面滑动半屏之后，显示“返回顶部”按钮
      if (scroller.scrollTop > height) {
        this.circle = true
      } else {
        this.circle = false
      }
    },
    top() {
      const time = setInterval(() => {
        const dom = document.querySelector('.app-view')
        let height = dom.scrollTop
        const scrollTop = Math.ceil(height / 50)
        height -= scrollTop
        if (height <= 0) {
          dom.scrollTop = 0
          clearInterval(time)
        } else {
          dom.scrollTop = height
        }
      }, 5)
    }
  }
}
</script>
<style lang="scss">
.circle {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    font-size: 0.6rem;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    right: 5%;
    bottom: 10%;
    position: fixed;
    z-index: 1;
}
</style>
