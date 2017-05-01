const state = {
  VR_List: [],
  page: 1,
  size: 8,
  type: 0,
  is_max: false
}
const getters = {
  vrLists: state => {
    return state.VR_List
  }
}
const mutations = {
  SET_PAGE ( state, page ) {
    state.page = page
  },
  SET_VR_LIST ( state, list ) {
    state.VR_List = list
  },
  SET_VR_TYPE ( state, type ) {
    state.type = type
  },
  PUSH_VR_LIST( state, list ) {
    list.forEach(function (item) {
      state.VR_List.push(item)
    })
  },
  SET_MAX_PAGE( state ) {
    state.is_max = true
  },
  CLEAR_MAX_PAGE( state ) {
    state.is_max = false
  },
  CLEAR_VR_LIST( state ) {
    state.VR_List = []
  }
}
const actions = {
  setPage({commit}, page) {
    commit('SET_PAGE', page)
  },
  setVRList({commit}, list) {
    commit('SET_VR_LIST', list)
  },
  setVRType({commit}, type) {
    commit('SET_VR_TYPE', type)
  },
  pushVRList({commit}, list) {
    commit('PUSH_VR_LIST', list)
  },
  setMaxPage({commit}) {
    commit('SET_MAX_PAGE')
  },
  clearMaxPage({commit}) {
    commit('CLEAR_MAX_PAGE')
  },
  clearVRList({commit}) {
    commit('CLEAR_VR_LIST')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
