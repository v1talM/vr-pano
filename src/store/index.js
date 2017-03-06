import Vue from 'vue'
import Vuex from 'vuex'
import portfolio from './homepage/portfolio'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    portfolio
  },
  strict: debug
})
