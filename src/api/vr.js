import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import {api_root} from './../env'
const subURL = 'product/'
export default {
  getVRById (id) {
    return Vue.axios.get(api_root + subURL + id)
  }
}
