import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/welcome/welcome'
import VR from '@/pages/vr/vr'
import UserProfile from '@/pages/user/profile'
import Profile from '@/pages/profile/profile'
import Scenery from '@/pages/welcome/scenery'
import City from '@/pages/welcome/city'
import University from '@/pages/welcome/university'
import Search from '@/pages/search/search'
// const Welcome = resolve => require(['@/pages/welcome/welcome.vue'], resolve)
// const VR = resolve => require(['@/pages/vr/vr.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'welcome', component: Welcome, meta:{title: '首页 - LaraVR'} },
    { path: '/vr/:id', name: 'vr', component: VR, meta:{title: 'VR全景 - LaraVR'} },
    { path: '/user/:id', name: 'user', component: UserProfile, meta:{title: '用户中心 - LaraVR'} },
    { path: '/profile', name: 'add-profile', component: Profile, meta:{title: '上传作品 - LaraVR'} },
    { path: '/category/scenery', name: 'scenery', component: Scenery, meta:{title: 'VR看世界 - LaraVR'}},
    { path: '/category/city', name: 'city', component: City, meta:{title: '城市画廊 - LaraVR'}},
    { path: '/category/university', name: 'university', component: University, meta:{title: '高校全景 - LaraVR'}},
    { path: '/search', name: 'search', component: Search, meta:{title: '搜索 - LaraVR'}}
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
