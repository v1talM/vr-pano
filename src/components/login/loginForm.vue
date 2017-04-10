<template lang="html">
  <div class="login content">
    <div class="login card">
      <img class="ui small image centered" :src="require('@/assets/brand.png')" alt="">
      <div class="field">
        <h2 class="header">登 录</h2>
        <form v-on:submit.prevent="handleLogin()">
          <div class="form-group">
            <input type="email" v-model="login.email" required="required" />
            <label for="input" class="control-label">登录邮箱</label><i class="bar"></i>
          </div>
          <div class="form-group">
            <input type="password" v-model="login.password" required="required" />
            <label for="input" class="control-label">登录密码</label><i class="bar"></i>
          </div>
          <div class="button-container">
            <button type="submit" class="button"><span>登 录</span></button>
          </div>
        </form>
      </div>

    </div>
    <div v-bind:class="classObj">
      <i class="mini icon" v-bind:class="{'add user': !signup, 'remove': signup}" @click="toggleSignUp()"></i>
      <div class="field">
        <span class="header">注 册</span>
        <form v-on:submit.prevent="handleRegister()">
          <div class="form-group">
            <input type="text" required="required" v-model="regist.name" />
            <label for="input" class="control-label">昵 称</label><i class="bar"></i>
          </div>
          <div class="form-group">
            <input type="email" required="required" v-model="regist.email" />
            <label for="input" class="control-label">登录邮箱</label><i class="bar"></i>
          </div>
          <div class="form-group">
            <input type="password" required="required" v-model="regist.password" />
            <label for="input" class="control-label">密 码</label><i class="bar"></i>
          </div>
          <div class="form-group">
            <input type="password" required="required" v-model="regist.password_confirm" />
            <label for="input" class="control-label">确认密码</label><i class="bar"></i>
          </div>
          <div class="button-container">
            <button type="submit" class="button"><span>立即注册</span></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import login from '@/api/login'
import swal from 'sweetalert2'
import {getHeader} from '@/helper'
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      signup: false,
      regist: {
        name: '',
        email: '',
        password: '',
        password_confirm: ''
      },
      login: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.auth.authUser
    }),
    classObj () {
      return {
        'fab': ! this.signup,
        'fab active': this.signup
      }
    }
  },
  methods: {
    ...mapActions([
      'loginUser',
      'getUserData'
    ]),
    toggleSignUp (e) {
      this.signup = !this.signup
    },
    handleRegister () {
      const user = {
        name: this.regist.name,
        email: this.regist.email,
        password: this.regist.password,
        password_confirmation: this.regist.password_confirm
      }
      login.signup(user).then(res => {
        var msg = res.data.info
        const vm = this
        swal({
          text: msg,
          type: 'success'
        }).then(function () {
          vm.clearRegistForm()
          vm.toggleSignUp()
        })
      }).catch( error => {
        const vm = this
        var err = error.response.data
        var msg = ''
        if(err.email){
          msg = err.email
        }
        if(err.password){
          msg += '<br />' + err.password
        }
        swal({
          text: msg,
          type: 'error'
        })
      })
    },
    handleLogin () {
      const user = {
        email: this.login.email,
        password: this.login.password
      }
      this.loginUser(user).then(res => {
        const authUser = {}
        if (res.status === 200) {
          authUser.access_token = res.data.access_token
          authUser.refresh_token = res.data.refresh_token
          window.localStorage.setItem('authUser', JSON.stringify(authUser))
          const header = getHeader()
          this.getUserData(header).then(res => {
            authUser.email = res.data.email//用户邮箱
            authUser.name = res.data.name//用户名称
            authUser.id = res.data.id//用户id
            authUser.productsCount = res.data.products.length//用户作品统计
            authUser.avatar = res.data.avatar//用户头像
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            this.$store.dispatch('setAuthUser', authUser).then(res => {
              swal({
                text: '欢迎回来! '+ authUser.name,
                type: 'success'
              })
            })
          }).catch(error => {
            swal({
              text: '获取用户信息失败,请联系管理员',
              type: 'error'
            })
          })
        }
      }).catch(error => {
        swal({
          text: '登录失败,请检查用户名和密码',
          type: 'error'
        })
      })
    },
    clearRegistForm () {
      this.regist.name = ''
      this.regist.email = ''
      this.regist.password = ''
      this.regist.password_confirm = ''
    }
  }
}
</script>

<style lang="css">
.login.card {
  width: 100%;
  background:transparent;
  height: 100%;
  font-family: Roboto;
  display: block;
  position: relative;
  margin: 0 auto;
  padding: 1rem 0;
  border-radius: .3125rem;
  transition: all 0.2s ease-in-out;
  transform: skew(0, -20deg);
  overflow: hidden;
}
.login.content .form-group input:focus ~ .control-label, .login.content .form-group input:valid ~ .control-label, .login.content .form-group input.form-file ~ .control-label, .login.content .form-group input.has-value ~ .control-label{
  color: #ffffff !important;
}
.login.content .form-group input:focus, .login.content .form-group input:valid, .login.content .form-group input.form-file, .login.content .form-group input.has-value{
  color: #ffffff !important;
}
.login.content .fab {
  display: block;
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: #ffc400;
  cursor: pointer;
  bottom: -1.75rem;
  right: 1.75rem;
  z-index: 1000;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16), 0 2px 3px rgba(0, 0, 0, 0.23);
  transition: all 0.6s ease-in-out;
  transform: skew(0, -20deg);
  margin-top: 5.125rem;
}

.login.content .fab>i {
  color: #fff;
  line-height: 3.5rem;
  font-size: 1.5em;
  transition: all 0.4s ease-in-out;
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 0;
  float:right;
}

.login.content .active {
  top: 0;
  right: 0;
  border-radius: 0;
  width: 100%;
  height: 100%;
  cursor:auto;
}

.login.content .active>i {
  margin: 0 .9375rem;
  transform: rotate(360deg);
  cursor:pointer;
}

.login.content .fab>.field {
  visibility:hidden;
  opacity:0;
  width: 0;
  height:0;
  display:none;
}

.login.content .active>.field {
  visibility:visible;
  opacity:1;
  width: 80%;
  height:100%;
  transition-delay: 0.2s;
  display: block;
}

.login.content .header {
  display: block;
  position: relative;
  font-size: 2.5em;
  color: #ffffff;
}

.login.content .fab .header {
  color: #fff;
}

.login.content .field {
  display: block;
  width: 80%;
  margin: .5625rem auto;
  top: 3.125rem;
  height: 18.75rem;
  position: relative;
}

.login.content .form-group {
  position: relative;
  margin: 1.5625rem auto;
  text-align: left;
}

.login.content .form-group input {
  height: 2.5625rem;
}

.login.content .form-group .control-label {
  position: absolute;
  top: 0.25rem;
  float: left;
  pointer-events: none;
  z-index: 1;
  color: #ffffff;
  font-size: 1rem;
  font-weight: normal;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
}

.login.content .fab .control-label{
  color:#fff;
}

.login.content .form-group .bar {
  position: relative;
  border-bottom: 0.0625rem solid #ffffff;
  display: block;
}

.login.content .fab .form-group .bar{
  border-bottom: 0.0625rem solid #fff;
}

.login.content .form-group .bar::before {
  content: '';
  height: 0.125rem;
  width: 0;
  left: 50%;
  bottom: -0.0625rem;
  position: absolute;
  background: #ffc400;
  -webkit-transition: left 0.28s ease, width 0.28s ease;
  transition: left 0.28s ease, width 0.28s ease;
  z-index: 2;
}

.login.content .fab .form-group .bar::before {
  background: #fff;
}

.login.content .form-group input {
  display: block;
  background: none;
  padding: 0.125rem 0.125rem 0.0625rem;
  font-size: 1rem;
  border-width: 0;
  border-color: transparent;
  line-height: 2.5625rem;
  width: 100%;
  color: transparent;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
  box-shadow: none;
}

.login.content .form-group input[type="file"] {
  line-height: 1;
}

.login.content .form-group input[type="file"] ~ .bar {
  display: none;
}

.login.content .form-group input:focus,
.login.content .form-group input:valid,
.login.content .form-group input.form-file,
.login.content .form-group input.has-value {
  color: #333;
}

.login.content .form-group input:focus ~ .control-label,
.login.content .form-group input:valid ~ .control-label,
.login.content .form-group input.form-file ~ .control-label,
.login.content .form-group input.has-value ~ .control-label {
  font-size: 0.8rem;
  color: gray;
  top: -1rem;
  left: 0;
}

.login.content .form-group input:focus {
  outline: none;
}

.login.content .form-group input:focus ~ .control-label {
  color: #ffc400;
}

.login.content .fab .form-group input:focus ~ .control-label {
  color: #fff;
}

.login.content .form-group input:focus ~ .bar::before {
  width: 100%;
  left: 0;
}
.login.content .button-container{
  text-align: center;
}
.login.content .button {
  position: relative;
  background: transparent;
  border: 1px solid #ffffff;
  font-size: 1.1rem;
  color: #4f93ce;
  margin: 1rem 0;
  padding: 0.75rem 3rem;
  cursor: pointer;
  -webkit-transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;
  transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;
  overflow: hidden;
}

.login.content .fab .button {
  background: #fff;
  border: 1px solid #ffc400;
  color: #ffc400;
}

.login.content .button span {
  color: #fff;
  position: relative;
  z-index: 1;
}

.login.content .fab .button span {
  color: #ffc400;
}

.login.content .button::before {
  content: '';
  position: absolute;
  background: #071017;
  border: 50vh solid #1d4567;
  width: 30vh;
  height: 30vh;
  border-radius: 50%;
  display: block;
  top: 50%;
  left: 50%;
  z-index: 0;
  opacity: 1;
  -webkit-transform: translate(-50%, -50%) scale(0);
  transform: translate(-50%, -50%) scale(0);
}

.login.content .button:hover {
  color: #337ab7;
  background-color: #ffc400;
  border-color: #ffc400;
}
.login.content .fab .button:hover{
  color: #ffc400;
  background-color: #ffffff;
}
.login.content .button:focus {
  outline: none;
}
@media screen and (max-width: 26rem){
  .ui.big.vertical.menu{
    width: 20rem;
  }
  .login.content{
    width: 100%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 24rem){
  .ui.big.vertical.menu{
    width: 20rem;
  }
  .login.content{
    width: 100%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 20rem){
  .ui.big.vertical.menu{
    width: 16rem;
  }
  .login.content{
    width: 100%;
    margin: 0 auto;
  }
}
</style>
