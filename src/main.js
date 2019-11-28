import Vue from 'vue'
import App from './App'
import 'lib-flexible'
import router from './router'
import store from './store'
import './styles/index.scss'

new Vue({
  router,
  store,
  data: {
    eventBus: new Vue()
  },
  render: h => h(App)
}).$mount('#app')
