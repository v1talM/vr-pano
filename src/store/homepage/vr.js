const state = {
  vr: null,
  preload: true
}

const mutations = {
  SET_VR(state, vr){
    state.vr = vr
  },
  SET_PRELOAD(state){
    state.preload = true
  },
  CLEAR_PRELOAD(state){
    state.preload = false
  }
}

const actions = {
  setVR ({commit}, vr) {
    commit('SET_VR', vr)
  },
  setPreload({commit}) {
    commit('SET_PRELOAD')
  },
  clearPreload({commit}) {
    commit('CLEAR_PRELOAD')
  }
}

export default {
  state, mutations, actions
}
