<template lang="html">
  <div class="">
    <navbar v-on:search="getSearchedResource"></navbar>
    <copyright></copyright>
    <portfolio></portfolio>
  </div>
</template>

<script>
import navbar from '@/components/header/jumb_navbar'
import portfolio from '@/components/search/portfolio'
import copyright from '@/components/search/copyright'
import {search_url} from '@/env'
export default {
  components: {
    navbar, portfolio, copyright
  },
  mounted () {
    $('.ui.vr-sidebar.sidebar')
      .sidebar('attach events', '.toc.item')
    ;
    $(".vr-search").transition({
      animation: 'fly right',
      interval: 500,
      duration: 1200
    })
  },
  created () {
    this.$store.dispatch('clearMaxPage')
    this.$store.dispatch('setVRType', 0)
    this.$store.dispatch('setPage', 1)
    this.$store.dispatch('clearVRList')
    this.getSearchedResource()
  },
  methods: {
    getSearchedResource () {
      const query = this.$route.query
      this.axios.get(search_url, { params: { c: query.c, q: query.q } }).then(res => {
        const lists = res.data.data
        const _this = this
        _this.$store.dispatch('setVRList', lists)
      })
    }
  }
}

</script>

<style lang="css">
</style>
