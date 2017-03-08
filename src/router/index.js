import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/welcome/welcome'
import Login from '@/pages/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
