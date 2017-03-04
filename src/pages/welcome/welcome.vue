<template lang="html">
  <div class="">
    <jumbotron></jumbotron>
    <newpro></newpro>
    <category></category>
    <portfolio></portfolio>
  </div>
</template>

<script>
import jumbotron from '@/components/welcome/jumbotron'
import newpro from '@/components/welcome/newpro'
import category from '@/components/welcome/category'
import portfolio from '@/components/welcome/portfolio'
export default {
  components: {
    jumbotron, newpro, portfolio, category
  }
}
</script>
