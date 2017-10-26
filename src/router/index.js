import Vue from 'vue'
import Router from 'vue-router'
import TopNav from '@/components/TopNav/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'TopNav',
      component: TopNav
    }
  ]
})
