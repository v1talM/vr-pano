import user from '@/api/user'
const state = {
  user: {},
}
const mutations = {
  SET_USER_OBJ (state, user) {
    state.user = user
  }
}

const actions = {
  getUserDataById ({}, id) {
    return user.getUserDataById(id)
  },
  setUserData ({commit}, data) {
    commit('SET_USER_OBJ', data)
  }
}

export default {
  state, mutations, actions
}
