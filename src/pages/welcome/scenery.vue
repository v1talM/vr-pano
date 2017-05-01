<template lang="html">
  <div class="">
    <jumbotron category="scenery"></jumbotron>
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
import {scenery_id} from '@/env'
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
    this.$store.dispatch('setVRType', scenery_id)
    this.$store.dispatch('setPage', 1)
    this.$store.commit('clearQuery')
    this.$store.dispatch('clearVRList')
  }
}
</script>

<style lang="css">
</style>
