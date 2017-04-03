const state = {
  VR_List: [],
  page: 1,
  size: 8,
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
  PUSH_VR_LIST( state, list ) {
    list.forEach(function (item) {
      state.VR_List.push(item)
    })
  },
  SET_MAX_PAGE( state ) {
    state.is_max = true
  }
}
const actions = {
  setPage({commit}, page) {
    commit('SET_PAGE', page)
  },
  setVRList({commit}, list) {
    commit('SET_VR_LIST', list)
  },
  pushVRList({commit}, list) {
    commit('PUSH_VR_LIST', list)
  },
  setMaxPage({commit}) {
    commit('SET_MAX_PAGE')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
