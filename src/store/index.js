import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { getSections } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    color: 'cyan'
  },
  mutations: {
    SET_LIST(state, data) {
      state.list = data
    }
  },
  actions: {
    getList({ commit }) {
      return new Promise((resolve, reject) => {
        getSections().then(({ data }) => {
          commit('SET_LIST', data)
        })
      })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
