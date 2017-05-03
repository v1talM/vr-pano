<template lang="html">
  <div class="ui large secondary fixed inverted pointing menu">
    <div class="ui container">
      <a class="toc item" >
        <i class="sidebar icon"></i>
      </a>
      <router-link class="active item" :to="{name: 'welcome'}">
        <img class="ui mini image logo" :src="require('@/assets/logo.png')" alt="vr-pano">
      </router-link>
      <div class="ui fluid icon input vr-search transition hidden">
        <input type="text" placeholder="Search for VR types, names & more..."
        v-model="searchInput"
        @input="updateQuery"
        @keyup.enter="search">
        <i class="search icon" @click="search"></i>
      </div>
      <div class="right menu">
        <router-link :to="{name: 'city'}" class="item">城市画廊</router-link>
        <router-link :to="{name: 'scenery'}" class="item">VR看世界</router-link>
        <router-link :to="{name: 'university'}" class="item">高校全景</router-link>
      </div>
      <div class="ui item account" tabindex="0">
        <button class="circular ui account icon button">
          <i class="icon user"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      searchInput: ''
    }
  },
  computed: mapState({
    query: state => state.search.query
  }),
  mounted () {
    $('.ui.user.sidebar')
      .sidebar('attach events', '.account.button')
    ;
    $('.ui.vr-sidebar.sidebar')
      .sidebar('attach events', '.toc.item')
    ;
    this.searchInput = this.$store.state.search.query
  },
  methods: {
    updateQuery () {
      this.$store.commit('updateQuery', this.searchInput)
    },
    search () {
      const input = this.searchInput
      if(input != ''){
        this.$router.push({name: 'search', query: { c: 'profiles', q: input }})
        this.updateQuery()
        this.searchInput = this.$store.state.search.query
        this.$emit('search')
      }
    }
  }
}
</script>

<style lang="sass">
  .navbar
    position: relative
    z-index: 3
</style>
