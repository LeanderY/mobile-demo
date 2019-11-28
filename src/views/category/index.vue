<template>
  <div class="category-wrapper">
    <draggable
      v-model="categoryList"
      :options="{ animation: 60 }"
      element="div"
      class="category-nav"
    >
      <div
        v-for="item in categoryList"
        :key="item.id"
        class="category-item"
        @click.prevent="touchstart(item.id)"
      >
        <img :src="item.thumbnail" />
        <span>{{ item.name }}</span>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  computed: {
    categoryList: {
      get() {
        return this.$store.state.list
      },
      set(value) {
        this.$store.commit('SET_LIST', value)
      }
    }
  },
  created() {
    this.$store.dispatch('getList')
  },
  methods: {
    touchstart(id) {
      this.$router.push({
        path: 'theme',
        query: {
          id: id
        }
      })
    }
  }
}
</script>

<style lang="scss">

.category-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 105px;
    margin: 10px;
    color: $gray;
    img {
      width: 90px;
      height: 90px;
      border-radius: 5px;
    }
    span {
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-top: 5px;
    }
  }
}
</style>
