import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import {api_root, url_root, client_id, client_secret} from './../env'

export default {
  signup (user) {
    return Vue.axios.post(api_root + 'user/signup', user)
  },
  getAccessToken (user) {
    const postData = {
            grant_type: 'password',
            client_id: client_id,
            client_secret: client_secret,
            username: user.email,
            password: user.password,
            scope: ''
        }
    return Vue.axios.post(url_root + '/oauth/token', postData)
  }
}
