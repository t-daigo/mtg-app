import Vue from 'vue'
import Router from 'vue-router'
import TopPage from '@/views/TopPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: TopPage
    }
  ]
})
