import Vue from 'vue'
import Vuex from 'vuex'
import portfolio from './homepage/portfolio'
import auth from './homepage/user'
import vr from './homepage/vr'
import search from './homepage/search'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    portfolio, auth, vr, search
  },
  strict: debug
})
