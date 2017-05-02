<template lang="html">
  <div class="">
    <jumbotron category='search'></jumbotron>
    <newpro></newpro>
    <category></category>
    <portfolio></portfolio>
    <loader></loader>
  </div>
</template>

<script>
import jumbotron from '@/components/welcome/jumbotron'
import newpro from '@/components/welcome/newpro'
import category from '@/components/welcome/category'
import portfolio from '@/components/welcome/portfolio'
import loader from '@/components/welcome/loader'
import {search_url} from '@/env'
export default {
  components: {
    jumbotron, newpro, portfolio, category, loader
  },
  mounted () {
    $('.ui.vr-sidebar.sidebar')
      .sidebar('attach events', '.toc.item')
    ;
  },
  created () {
    this.$store.dispatch('clearMaxPage')
    this.$store.dispatch('setVRType', 0)
    this.$store.dispatch('setPage', 1)
    this.$store.commit('clearQuery')
    this.$store.dispatch('clearVRList')
    this.getSearchedResource()
  },
  methods: {
    getSearchedResource () {
      const query = this.$route.query
      this.axios.get(search_url, { params: { c: query.c, q: query.q } }).then(res => {
        console.log(res)
      })
    }
  }
}

</script>

<style lang="css">
</style>
