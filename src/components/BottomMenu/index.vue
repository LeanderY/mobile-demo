<template>
  <div class="bottom-wrapper">
    <div>
      <i class="iconfont icon-thumb-up"></i><span class="extra">{{ popularity }}</span>
    </div>
    <div @click="showComments()">
      <i class="iconfont icon-pinglun"></i>
      <span class="extra">{{ comments }}</span>
    </div>
  </div>
</template>

<script>
import { getStoryExtra } from '@/api'

export default {
  data() {
    return {
      comments: 0,
      popularity: 0,
      id: this.$route.query.id
    }
  },
  created() {
    getStoryExtra(this.id).then(({ comments, popularity }) => {
      this.comments = comments
      this.popularity = popularity
    })
  },
  methods: {
    showComments() {
      this.$root.eventBus.$emit('show')
    }
  }
}
</script>

<style lang="scss">
.bottom-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  height: 50px;
  z-index: 20;
  display: flex;
  align-items: center;
  > div {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: 25px;
    }
    .extra {
      position: relative;
      bottom: 15px;
      font-size: 15px;
    }
  }
}
</style>
