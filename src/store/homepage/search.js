const state = {
  query: ''
}
const mutations = {
  updateQuery (state, query) {
    state.query = query
  },
  clearQuery (state) {
    state.query = ''
  },
}
const actions = {

}

export default {
  state, mutations, actions
}
