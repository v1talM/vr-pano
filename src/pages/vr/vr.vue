<template lang="html">
  <div style="height: inherit;display:flex;justify-content:center;">
    <navbar></navbar>
    <vr></vr>
    <loader v-if="preload"></loader>
    <mouse v-if="mouseGuide"></mouse>
  </div>

</template>

<script>
import navbar from '@/components/header/op_navbar'
import vr from '@/components/vr/vr'
import loader from '@/components/vr/loader'
import mouse from '@/components/vr/mouse'
import {mapState} from 'vuex'
export default {
  computed: mapState({
    preload: state => state.vr.preload
  }),
  data () {
    return {
      mouseGuide: false
    }
  },
  watch: {
    preload (status) {
      if(!status){
        this.mouseGuide = true
        const vm = this
        setTimeout(function () {
          vm.mouseGuide = false
        },9000)
      }
    }
  },
  components: {
    navbar, vr, loader, mouse
  }
}
</script>

<style lang="css">
</style>
