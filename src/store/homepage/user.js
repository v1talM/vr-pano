import login from '@/api/login'
const state = {
  authUser: null
}

const mutations = {
  SET_AUT_USER (state, authUser) {
    state.authUser = authUser
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
    commit('SET_AUT_USER', user)
  }
}

export default {
  state, mutations, actions
}
