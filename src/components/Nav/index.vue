<template>
  <div class="nav-wrapper">
    <router-link tag="div" to="/" exact>
      <i class="iconfont icon-shouye"></i>
      <div>首页</div>
    </router-link>
    <router-link tag="div" to="/category">
      <i class="iconfont icon-menu--line"></i>
      <div>分类</div>
    </router-link>
    <router-link tag="div" to="/my">
      <i class="iconfont icon-wode"></i>
      <div>我的</div>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">

.nav-wrapper {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  > div {
    flex: 1;
    text-align: center;
    color: $blue;
    .iconfont {
      font-size: 20px;
    }
  }
}
</style>
