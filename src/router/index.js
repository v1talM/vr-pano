import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/welcome/welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    }
  ]
})
