import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import {api_root} from './../env'

Vue.use(VueAxios, Axios)

export default {
  getVRList (page, size) {
    return Vue.axios.get(api_root + 'product/get', {
      params: {
        page: page,
        size: size
      }
    });
  }
}
