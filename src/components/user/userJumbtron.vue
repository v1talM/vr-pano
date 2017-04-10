<template lang="html">
  <div
    class="ui vertical center aligned segment user jumbtron"
    v-bind:style="{backgroundImage: 'url(' + require('@/assets/img/jumbtron.jpg') + ')'}">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  .ui.segment.user.jumbtron
    background-attachment: fixed
    background-color: #000
    background-position: center center
    background-size: cover
    background-repeat: no-repeat
  @media only screen and (min-width: 75rem)
    .ui.segment.user.jumbtron
      height: 28.125rem
  @media only screen and (max-width: 26rem)
    .ui.segment.user.jumbtron
      height: 12.125rem    
</style>
