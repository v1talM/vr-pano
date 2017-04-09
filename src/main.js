import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  $('.ui.user.sidebar')
    .sidebar('hide')
  ;
  document.title = to.meta.title
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
