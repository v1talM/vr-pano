import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/welcome/welcome'
import VR from '@/pages/vr/vr'
import UserProfile from '@/pages/user/profile'
// const Welcome = resolve => require(['@/pages/welcome/welcome.vue'], resolve)
// const VR = resolve => require(['@/pages/vr/vr.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'welcome', component: Welcome },
    { path: '/vr/:id', name: 'vr', component: VR },
    { path: '/user/:id', name: 'user', component: UserProfile}
  ],
})
