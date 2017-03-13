<template lang="html">
  <div class="ui vertical big right user push sidebar menu">
    <div class="login panel item" v-if="auth.authUser === null">
        <login-form></login-form>
        <div class="bottom brand">
          <a href="#" class="ui sub header">忘记密码?点我找回</a>
        </div>
    </div>
  </div>
</template>

<script>
import loginForm from '@/components/login/loginForm'
import {mapState} from 'vuex'
export default {
  components: {
    loginForm
  },
  computed: mapState({
    auth: state => state.auth
  })
}
</script>

<style lang="css">
  .ui.menu .item.login.panel{
    height: 100%;
    padding: 0;
    overflow: hidden;
  }
  .login.panel .login.content{
    height: 100%;
    background-color: #0097a7;
    -webkit-transform: skew(0deg, 20deg);
    transform: skew(0deg, 20deg);
    padding: 3.125rem 0;
    margin-top: -5.125rem;
    position: relative;
    z-index: 1000;
  }
  .login-form{
    transform: skew(0deg, -20deg);
    padding: 2rem 0 1rem 0;
  }
  .login-form .field{
    padding: 1rem 1.5rem
  }
  .ui.vertical.menu .item:before{
    background: none !important;
  }
  .login.panel .bottom.brand{
    position: absolute;
    bottom: 0;
    padding: .5rem 1rem;
    z-index: 999;
  }
  .login.panel .bottom.brand a.sub.header{
    color: #546e7a;
  }
</style>
