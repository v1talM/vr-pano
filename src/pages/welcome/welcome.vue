<template lang="html">
  <div class="">
    <navbar></navbar>
    <sidebar></sidebar>
    <jumbotron></jumbotron>
    <newpro></newpro>
    <category></category>
    <portfolio></portfolio>
    <loader></loader>
  </div>
</template>

<script>
import navbar from '@/components/welcome/navbar'
import sidebar from '@/components/welcome/sidebar'
import jumbotron from '@/components/welcome/jumbotron'
import newpro from '@/components/welcome/newpro'
import category from '@/components/welcome/category'
import portfolio from '@/components/welcome/portfolio'
import loader from '@/components/welcome/loader'
export default {
  components: {
    navbar, sidebar, jumbotron, newpro, portfolio, category, loader
  }
}
</script>
