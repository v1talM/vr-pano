<template lang="html">
  <div id="vr-container">
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
#vr-container{
  height: inherit;
  display:-webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content:center;
  justify-content:center;
  -moz-box-pack:center;
  -webkit--moz-box-pack:center;
  box-pack:center;
  align-items:center;
  -webkit-align-items:center;
  box-align:center;
  -moz-box-align:center;
  -webkit-box-align:center;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
