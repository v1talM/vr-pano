<template lang="html">
  <div class="login card">
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
          <button type="button" class="button"><span>登 录</span></button>
        </div>
      </form>
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
        password: '',
        password_confirm: ''
      }
    }
  },
  computed: {
    classObj () {
      return {
        'fab': ! this.signup,
        'fab active': this.signup
      }
    }
  },
  methods: {
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
          title: 'Success!',
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
          title: 'Error!',
          text: msg,
          type: 'error'
        })
      })
    },
    handleLogin () {

    },
    clearRegistForm () {
      this.regist.name = ''
      this.regist.email = ''
      this.regist.password = ''
      this.regist.password_confirm = ''
    }
  },
  mounted () {

  }
}
</script>

<style lang="css">
@import url(http://zavoloklom.github.io/material-design-iconic-font/css/docs.md-iconic-font.min.css);

.login.card {
  height: 29rem;
  width: 26.875rem;
  background: #fff;
  font-family: Roboto;
  display: block;
  position: relative;
  margin: 3.125rem auto;
  border-radius: .3125rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.2s ease-in-out;
}

.login.card:hover {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
}

.login.card .fab {
  display: block;
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: #ffc400;
  cursor: pointer;
  top: -1.75rem;
  right: -1.75rem;
  z-index: 1000;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16), 0 2px 3px rgba(0, 0, 0, 0.23);
  transition: all 0.4s ease-in-out;
}

.login.card .fab>i {
  color: #fff;
  line-height: 3.5rem;
  font-size: 1.5em;
  transition: all 0.4s ease-in-out;
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 0;
  float:right;
}

.login.card .active {
  top: 0;
  right: 0;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  cursor:auto;
}

.login.card .active>i {
  margin: 0 .9375rem;
  transform: rotate(360deg);
  cursor:pointer;
}

.login.card .fab>.field {
  visibility:hidden;
  opacity:0;
  width: 0;
  height:0;
}

.login.card .active>.field {
  visibility:visible;
  opacity:1;
  width: 80%;
  height:100%;
  transition-delay: 0.2s;
}

.login.card .header {
  display: block;
  position: relative;
  font-size: 3em;
  color: #ffc400;
}

.login.card .fab .header {
  color: #fff;
}

.login.card .field {
  display: block;
  width: 80%;
  margin: .5625rem auto;
  top: 3.125rem;
  height: 18.75rem;
  position: relative;
}

.login.card .form-group {
  position: relative;
  margin: 1.5625rem auto;
  text-align: left;
}

.login.card .form-group input {
  height: 2.5625rem;
}

.login.card .form-group .control-label {
  position: absolute;
  top: 0.25rem;
  float: left;
  pointer-events: none;
  z-index: 1;
  color: #9e9e9e;
  font-size: 1rem;
  font-weight: normal;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
}

.login.card .fab .control-label{
  color:#fff;
}

.login.card .form-group .bar {
  position: relative;
  border-bottom: 0.0625rem solid #9e9e9e;
  display: block;
}

.login.card .fab .form-group .bar{
  border-bottom: 0.0625rem solid #fff;
}

.login.card .form-group .bar::before {
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

.login.card .fab .form-group .bar::before {
  background: #fff;
}

.login.card .form-group input {
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

.login.card .form-group input[type="file"] {
  line-height: 1;
}

.login.card .form-group input[type="file"] ~ .bar {
  display: none;
}

.login.card .form-group input:focus,
.login.card .form-group input:valid,
.login.card .form-group input.form-file,
.login.card .form-group input.has-value {
  color: #333;
}

.login.card .form-group input:focus ~ .control-label,
.login.card .form-group input:valid ~ .control-label,
.login.card .form-group input.form-file ~ .control-label,
.login.card .form-group input.has-value ~ .control-label {
  font-size: 0.8rem;
  color: gray;
  top: -1rem;
  left: 0;
}

.login.card .form-group input:focus {
  outline: none;
}

.login.card .form-group input:focus ~ .control-label {
  color: #ffc400;
}

.login.card .fab .form-group input:focus ~ .control-label {
  color: #fff;
}

.login.card .form-group input:focus ~ .bar::before {
  width: 100%;
  left: 0;
}

.login.card .button {
  position: relative;
  background: #ffc400;
  border: 1px solid #ffc400;
  font-size: 1.1rem;
  color: #4f93ce;
  margin: 1rem 0;
  padding: 0.75rem 3rem;
  cursor: pointer;
  -webkit-transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;
  transition: background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.login.card .fab .button {
  background: #fff;
  border: 1px solid #ffc400;
  color: #ffc400;
}

.login.card .button span {
  color: #fff;
  position: relative;
  z-index: 1;
}

.login.card .fab .button span {
  color: #ffc400;
}

.login.card .button::before {
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

.login.card .button:hover {
  color: #337ab7;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 9px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
}

.login.card .button:focus {
  outline: none;
}
@media screen and (max-width: 26rem){
  .login.card{
    width: 22.5rem;
    margin: 2.525rem auto;
  }
}
@media screen and (max-width: 24rem){
  .login.card{
    width: 18.5rem;
    margin: 2.525rem auto;
  }
}

@media screen and (max-width: 20rem){
  .login.card{
    width: 16.5rem;
    margin: 2.125rem auto;
  }
}
</style>
