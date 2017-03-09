import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import {api_root} from './../env'

export default {
  signup (user) {
    return Vue.axios.post(api_root + 'user/signup', user)
  }
}
