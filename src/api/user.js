import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import {api_root} from './../env'

export default {
  getUserDataById (id) {
    return Vue.axios.get(api_root + 'user/' + id)
  },
  // uploadProfile (headers, profile){
  //   return Vue.axios.post(api_root + 'product', profile, {
  //     headers: headers,
  //     onUploadProgress: function (progressEvent) {
  //       return (progressEvent.loaded)
  //     }
  //   })
  // }
}
