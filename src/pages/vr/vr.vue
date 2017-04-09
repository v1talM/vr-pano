<template lang="html">
  <div style="height: inherit">
    <navbar></navbar>
    <vr></vr>
    <loader v-if="preload"></loader>
  </div>

</template>

<script>
import navbar from '@/components/header/op_navbar'
import vr from '@/components/vr/vr'
import loader from '@/components/vr/loader'
import {mapState} from 'vuex'
export default {
  computed: mapState({
    preload: state => state.vr.preload,

  }),
  components: {
    navbar, vr, loader
  }
}
</script>

<style lang="css">
</style>
