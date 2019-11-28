<template>
  <div>
    <!-- 动态图组件 -->
    <Loading v-if="!list" />
    <!-- 新闻列表 -->
    <div v-for="(item, index) in list" :key="index" class="list">
      <div v-for="y in item.stories" :key="y.title" class="list-con" @click="go(y.id)">
        <p>{{ y.title }}</p>
        <img :src="y.images[0]" />
      </div>
    </div>
  </div>
</template>
<script>
import Loading from '@/components/Loading'
import { getSectionsByID } from '@/api'

export default {
  name: 'Theme',
  components: {
    Loading
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    const id = this.$route.query.id
    getSectionsByID(id).then(data => {
      this.list.push(data)
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

