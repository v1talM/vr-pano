<template>
  <div id="app" class="pusher">
    <sidebar></sidebar>
    <userbar></userbar>
    <router-view></router-view>
  </div>
</template>

<script>
import semantic from 'semantic'
import '../node_modules/semantic-ui-css/semantic.min.css'
import '../node_modules/sweetalert2/dist/sweetalert2.css';
import sidebar from '@/components/welcome/sidebar'
import userbar from '@/components/header/sidebar'
export default {
  name: 'app',
  components: {
    sidebar, userbar
  },
  mounted () {
    $('.masthead.material')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.ui.large.fixed.menu.appbar').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.ui.large.fixed.menu.appbar').transition('fade out');
          }
        })
      ;
      // create sidebar and attach to menu open

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
    color: #546e7a
  body.pushable>.pusher
    background: #e1f5fe !important
  .pushable>.pusher:after
    background-color: rgba(0, 0, 0, .4) !important
  .ui.large.menu
    padding: .625rem 0
    border: none
  .ui.vertical.segment
    padding: 0
  .ui.menu .item
    font-size: .875rem
  .ui.large.menu a.item:hover, .ui.large.menu .dropdown.item:hover
    background: none
    color: #ffffff !important
  .ui.left.overlay.sidebar, .ui.right.overlay.sidebar
    z-index: 1002
  .ui.left.visible.sidebar, .ui.right.visible.sidebar
    box-shadow: 4px 0 8px rgba(0,0,0,.4) !important
  .ui.vertical.vr-sidebar.sidebar.menu, .ui.vertical.user.sidebar.menu
    background-color: #ffffff
    border: 0
  .ui.vertical.vr-sidebar.sidebar.menu .item
    color: #546e7a
  .ui.vertical.vr-sidebar.sidebar.menu .item:before
    background: none
  .ui.vertical.vr-sidebar.sidebar.menu a.item.brand
    padding: 0
  .ui.vertical.vr-sidebar.sidebar.menu.menu .item>i.icon
    float: none
    margin-right: .5rem
  .ui.vertical.vr-sidebar.sidebar.menu .item:not(.brand)
    margin: .125rem 0
    line-height: 1.875rem
    font-weight: 400
  .ui.vertical.vr-sidebar.sidebar.menu .item:not(.brand):hover
    color: #0097a7
  .item.brand .content
    background-color: #0097a7
    @media only screen and (min-width: 75rem)
      .computer.only
        display: block !important
  @media only screen and (max-width: 26rem)
    .computer.only
      display: none !important
  @media only screen and (max-width: 24rem)
    .computer.only
      display: none !important
</style>
