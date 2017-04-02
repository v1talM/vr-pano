import login from '@/api/login'
const state = {
  authUser: null
}

const mutations = {
  SET_AUTH_USER (state, authUser) {
    state.authUser = authUser
  },
  CLEAR_AUTH_USER (state) {
    state.authUser = null
  }
}

const actions = {
  loginUser ({}, user) {
    return login.getAccessToken(user)
  },
  getUserData({}, header) {
    return login.getUserData(header)
  },
  setAuthUser({commit}, user) {
    commit('SET_AUTH_USER', user)
  },
  logoutUser({commit}){
    commit('CLEAR_AUTH_USER')
  }
}

export default {
  state, mutations, actions
}
