<template lang="html">
  <div class="ui vertical masthead center material aligned segment" v-bind:style="{backgroundImage: 'url(' + getBackgroundImg + ')'}">
    <navbar></navbar>
    <div class="ui container">
      <div class="ui stackable centered grid">
        <div class="ui row">
          <div class="ten wide column center aligned" style="margin-top: 4.5625rem !important">
              <h1 class="ui inverted  header vr-slogan transition hidden">
                <div v-if="category == 'search'">
                  {{ this.searchInput }}
                </div>
                <div v-if="category == 'university'">
                  <p>A picture is a poem without words</p>
                  <p>Do you think so?</p>
                </div>
                <div v-if="category == 'scenery'">
                  <p>Share your scenery</p>
                  <p>Make every moment has its VR.</p>
                </div>
                <div v-if="category == 'city'">
                  <p>Browse through beautiful city</p>
                  <p>Romance in heart.</p>
                </div>
                <div v-if="category == 'index'">
                  <p>It's a big world</p>
                  <p>Exploring it just go easier.</p>
                </div>
              </h1>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import navbar from '@/components/header/jumb_navbar'
export default {
  computed: {
    getBackgroundImg () {
      switch (this.category) {
        case 'scenery':
          return require('@/assets/img/scenery.png')
          break;
        case 'city':
          return require('@/assets/img/nashville.png')
          break;
        case 'university':
          return require('@/assets/img/campus.png')
          break;
        default:
          return require('@/assets/img/index.png')
      }
    }
  },
  props: ['category'],
  mounted () {
    $('.ui.dropdown')
      .dropdown()
    ;
    $('.vr-slogan').transition({
      animation: 'scale',
      interval: 500,
      duration: 700
    })
    $(".vr-search").transition({
      animation: 'fly right',
      interval: 500,
      duration: 1200
    })
  },
  components: {
    navbar
  }
}
</script>

<style lang="css">
    .hidden.menu {
     display: none;
   }
   .masthead.segment {
     min-height: 33.75rem;
     padding: 1em 0em;
   }
   .masthead .logo.item img {
     margin-right: 1rem;
   }
   .masthead .ui.menu .ui.button {
     margin-left: 0.5rem;
   }
   .masthead h1.ui.header {
     margin-top: 3rem;
     margin-bottom: 0em;
     font-size: 4rem;
     font-weight: normal;
   }
   .masthead h2 {
     font-size: 1.7rem;
     font-weight: normal;
   }
   .ui.vertical.stripe {
     padding: 8rem 0em;
   }
   .ui.vertical.stripe h3 {
     font-size: 2rem;
   }
   .ui.vertical.stripe .button + h3,
   .ui.vertical.stripe p + h3 {
     margin-top: 3rem;
   }
   .ui.vertical.stripe .floated.image {
     clear: both;
   }
   .ui.vertical.stripe p {
     font-size: 1.33rem;
   }
   .ui.vertical.stripe .horizontal.divider {
     margin: 3rem 0em;
   }
   .quote.stripe.segment {
     padding: 0em;
   }
   .quote.stripe.segment .grid .column {
     padding-top: 5em;
     padding-bottom: 5em;
   }
   .footer.segment {
     padding: 5em 0em;
   }
   .secondary.pointing.menu .toc.item {
     display: none;
   }
   .ui.icon.input>i.icon.search{
     cursor: pointer;
     pointer-events: all;
   }
  @media only screen and (max-width: 44rem) {

   .secondary.pointing.menu .item,
   .secondary.pointing.menu .menu {
     display: none;
   }
   .ui.large.menu:not(.vertical) .item, .ui.menu:not(.vertical) .menu{
     display: none;
   }

   .secondary.pointing.menu .toc.item, .large.menu .toc.item {
     display: block !important;
   }
   .secondary.pointing.menu .account.item, .ui.large.menu:not(.vertical) .account.item {
     display: block !important;
   }
   .masthead.segment {
     min-height: 21.875rem;
   }
   .masthead h1.ui.header {
     font-size: 2rem;
     margin-top: 1.5rem;
   }
   .masthead h2 {
     margin-top: 0.5rem;
     font-size: 1.5rem;
   }
   .ui.menu .dropdown.item .menu{
     right: 0;
     left: auto;
   }
 }
</style>
<style lang="sass">
  .ui.menu
    margin: 0
  .ui.menu .item:before
    background: none
  .secondary.pointing.menu .toc.item, .large.menu .toc.item
    display: none
    border-left: none
  .ui.secondary.pointing.menu, .ui.large.menu
    border: none
    background-color: #0097a7
  .ui.secondary.pointing.menu
    box-shadow: rgba(0, 0, 0, .2) 0px 2px 4px 0px
  .ui.large.menu.fixed
    padding: .5rem 0
  .ui.large.menu
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.16),0px 2px 5px 0px rgba(0,0,0,0.23)
  .ui.secondary.inverted.menu .link.item, .ui.secondary.inverted.menu a.item, .ui.large.menu .item, .ui.secondary.pointing.menu .item
    color: #cfd8dc !important
    align-self: center
  .ui.icon.button.account
    background-color: #e1f5fe
    color: #0097a7
    margin-left: 0!important
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 6px 0 rgba(0, 0, 0, 0.2)
  .ui.secondary.inverted.pointing.menu .active.item, .ui.secondary.pointing.menu .item, .ui.large.menu .active.item
    border: none
  .ui.large.menu .active.item
    background-color: transparent
    color: #ffffff !important
    font-weight: 700
  .ui.icon.button.account:focus, .ui.icon.button.account:hover, .ui.dropdown.account.active.item .ui.icon.button.account
    box-shadow: 0 3px 5px rgba(0,0,0,.15),0 5px 7px rgba(0,0,0,.2)
  .ui.menu .dropdown.item .menu
    box-shadow: 1px 3px 5px rgba(0,0,0,.15),3px 5px 7px rgba(0,0,0,.2)
  .ui.vertical.material.segment
    background-image: url('./../../assets/img/index.png')
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    background-color: #80cbd3
  .ui.input.vr-search
    transition: all 2s ease-in-out
    flex: 1
    margin: .5rem 2rem
  .ui.input.vr-search:hover
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .15), 0 2px 8px 0 rgba(0, 0, 0, .2)
  .ui.input.vr-search input
    border-radius: 0
  @media screen and (min-width: 75rem)
    .ui.inverted.header.vr-slogan
      margin-top: 10rem
      font-size: 2.5rem
      margin-bottom: 1.75rem
    .vr-slogan p:first-child
      margin-bottom: .65rem
  @media screen and (max-width: 44rem)
    .ui.inverted.header.vr-slogan
      margin-top: 3.5rem
      font-size: 1.5rem
      margin-bottom: 1.5rem
    .vr-slogan p:first-child
      margin-bottom: .65rem
    .ui.input.vr-search
      margin: 0
</style>
