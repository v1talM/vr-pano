<template lang="html">
  <div class="">
    <navbar></navbar>
    <login></login>
  </div>

</template>

<script>
import navbar from '@/components/header/navbar'
import login from '@/components/login/login'
export default {
  components: {
    navbar, login
  },
  mounted () {
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;
  }
}
</script>

<style lang="css">
</style>
