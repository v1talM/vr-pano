import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import swal from 'sweetalert2'
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  $('.ui.user.sidebar')
    .sidebar('hide')
  ;
  document.title = to.meta.title
  if(to.name == 'add-profile'){
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if( !authUser || authUser.access_token == '' ){
      swal({
        text: '您还没有登录账号!',
        type: 'error',
      }).then(function () {
        $('.ui.user.sidebar')
          .sidebar('show')
        ;
      })
    }else{
      next()
    }
  }else{
    next()
  }

})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
