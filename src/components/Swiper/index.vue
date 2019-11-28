<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 分页器 -->
    <div :class="{ 'swiper-pagination': pagination }"></div>
  </div>
</template>
<script>
import './swiper'

export default {
  name: 'MSwipe',
  props: {
    swipeid: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'slide'
    },
    loop: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    pagination: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Number,
      default: 5000
    },
    paginationType: {
      type: String,
      default: 'bullets'
    }
  },
  data() {
    return {
      dom: ''
    }
  },
  mounted() {
    const _this = this
    // eslint-disable-next-line no-undef
    this.dom = new Swiper('.' + _this.swipeid, {
      // 循环
      loop: _this.loop,
      // 分页器
      pagination: '.swiper-pagination',
      // 分页类型
      paginationType: _this.paginationType, // fraction,progress,bullets
      // 自动播放
      autoplay: _this.autoplay,
      // 方向
      direction: _this.direction,
      // 特效
      effect: _this.effect, // slide,fade,coverflow,cube
      autoplayDisableOnInteraction: false,
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true // 修改swiper的父元素时，自动初始化swiper
    })
  },
  methods: {
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
@import './swiper.min.css';

.swiper-slide {
  height: 7rem;
  overflow: hidden;
  position: relative;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 1rem;
  width: 95%;
  text-align: right;
}
.swiper-pagination-bullet-active {
  background: #fff;
}

</style>
