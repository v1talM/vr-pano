<template lang="html">
  <div class="ui container vr-loader grid" v-show="!is_max">
    <div class="load-bar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: mapState({
    is_max: state => state.portfolio.is_max
  })
}
</script>

<style lang="css">
.ui.container.grid.vr-loader{
  margin-top: 0;
  margin-bottom: 1rem;
  padding: 1rem;
}
.vr-loader .load-bar {
  position: relative;
  margin-top: 1.25rem;
  width: 100%;
  height: .375rem;
  background-color: #0097a7;
}
.vr-loader .bar {
  content: "";
  display: inline;
  position: absolute;
  width: 0;
  height: 100%;
  left: 50%;
  text-align: center;
}
.vr-loader .bar:nth-child(1) {
  background-color: #ff1744;
  animation: loading 3s linear infinite;
}
.vr-loader .bar:nth-child(2) {
  background-color: #ffffff;
  animation: loading 3s linear 1s infinite;
}
.vr-loader .bar:nth-child(3) {
  background-color: #ffc400;
  animation: loading 3s linear 2s infinite;
}
@keyframes loading {
    from {left: 50%; width: 0;z-index:100;}
    33.3333% {left: 0; width: 100%;z-index: 10;}
    to {left: 0; width: 100%;}
}
</style>
