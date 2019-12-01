import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home'),
    meta: {
      index: 1
    }
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/article'),
    meta: {
      index: 2
    }
  },
  {
    path: '/theme',
    name: 'theme',
    component: () => import('@/views/theme'),
    meta: {
      index: 3
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/category'),
    meta: {
      index: 4
    }
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my'),
    meta: {
      index: 5
    }
  }
]

const router = new Router({
  mode: 'history',
  base: '/mobile-demo/',
  linkActiveClass: 'active',
  routes
})

export default router
