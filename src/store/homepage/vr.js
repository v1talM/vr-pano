const state = {
  vr: null
}

const mutations = {
  SET_VR(state, vr){
    state.vr = vr
  }
}

const actions = {
  setVR ({commit}, vr) {
    commit('SET_VR', vr)
  }
}

export default {
  state, mutations, actions
}
