<template>
  <div id="app" :class="color">
    <!-- 底部菜单 -->
    <Nav v-if="isNav" />
    <!-- transitionName -->
    <transition :name="transitionName">
      <keep-alive :exclude="['Article', 'Theme']">
        <router-view class="app-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import { mapState } from 'vuex'

export default {
  components: {
    Nav
  },
  data() {
    return {
      transitionName: 'slide-left',
      isNav: true
    }
  },
  computed: {
    ...mapState(['color'])
  },
  watch: {
    $route(to, from) {
      this.transitionName = to.meta.index < from.meta.index ? 'slide-right' : 'slide-left'
      if (to.path === '/article' || to.path === '/theme') {
        this.isNav = false
      } else {
        this.isNav = true
      }
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/theme';

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s ease;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
// 分类 -> 首页 slide-right
.slide-right-enter {
  transform: translateX(-100%); // 1.enter: app-view(active)  2.initStatus: translateX(-100%)(left) 3.showing: translateX(-100%)  ——> translateX(0) left ——> 0
}
.slide-right-leave-active {
  transform: translateX(100%); // 1.enter: category(active)  2.initStatus: translateX(0) 3.showing: translateX(0)  ——> translateX(100%) 0 ——> right
}
 // 首页 -> 分类 slide-left
.slide-left-enter {
  transform: translateX(100%); // 1.enter: category(active)  2.initStatus: translateX(100%)(right) 3.showing: translateX(100%)  ——> translateX(0) right ——> 0
}
.slide-left-leave-active {
  transform: translateX(-100%); // 1.leave-active: app-view(active) 2.initStatus: translateX(0)  3.showing: translateX(0)  ——> translateX(-100%)(0 ——> left)
}

.app-view {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  margin-bottom: 56px;
  -webkit-overflow-scrolling: touch;
}
</style>
