<template>
  <div id="app" class="pusher">
    <router-view></router-view>
  </div>
</template>

<script>
import semantic from 'semantic'
import '../node_modules/semantic-ui-css/semantic.min.css'
export default {
  name: 'app',
  components: {
  },
  mounted () {
    $('.masthead.material')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.ui.large.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.ui.large.fixed.menu').transition('fade out');
          }
        })
      ;
      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;
  }
}
</script>
<style lang="css">
  @media only screen and (min-width: 75rem) {
    .ui.container{
      width: 63rem !important;
    }
  }
</style>
<style lang="sass">
  html
    font-size: 16px !important
  body
    background-color: #e1f5fe
  body.pushable>.pusher
    background: #e1f5fe !important
  .pushable>.pusher:after
    background-color: transparent !important
  .ui.large.menu
    padding: 1rem
    border: none
  .ui.vertical.segment
    padding: 0
  .ui.menu .item
    font-size: .875rem
  .ui.large.menu a.item:hover, .ui.large.menu .dropdown.item:hover
    background: none
    color: #ffffff !important
  .ui.left.overlay.sidebar
    z-index: 1002
  .ui.left.visible.sidebar, .ui.right.visible.sidebar
    box-shadow: 4px 0 8px rgba(0,0,0,.4) !important

</style>
