<template lang="html">
  <div>
    <navbar></navbar>
    <jumbtron></jumbtron>
    <center-panel></center-panel>
  </div>

</template>

<script>
import navbar from '@/components/header/op_navbar'
import jumbtron from '@/components/user/userJumbtron'
import centerPanel from '@/components/user/centerPanel'
export default {
  components: {
    navbar, jumbtron, centerPanel
  },
  mounted () {
    $(".user.jumbtron").visibility({
      once: false,
      onBottomPassedReverse: function () {
        $(".ui.fixed.menu").addClass('opbar')
      },
      onBottomPassed: function () {
        $(".opbar").removeClass('opbar')
      }
    })
  }
}
</script>

<style lang="css">
</style>
