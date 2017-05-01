<template lang="html">
  <div class="">
    <jumbotron category="university"></jumbotron>
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
import {university_id} from '@/env'
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
    this.$store.dispatch('clearVRList')
    this.$store.dispatch('clearMaxPage')
    this.$store.dispatch('setVRType', university_id)
    this.$store.dispatch('setPage', 1)
  }
}

</script>

<style lang="css">
</style>
