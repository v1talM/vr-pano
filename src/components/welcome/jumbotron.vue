<template lang="html">
  <div class="ui vertical masthead center material aligned segment">
    <div class="ui large secondary inverted pointing menu">
      <div class="ui container">
        <a class="toc item">
          <i class="sidebar icon"></i>
        </a>
        <a class="active item">
          <img class="ui mini image logo" :src="require('@/assets/logo.png')" alt="vr-pano">
        </a>
        <div class="right menu">
          <a class="item">图片画廊</a>
          <a class="item">VR看世界</a>
          <a class="item">高校全景</a>
        </div>
        <div class="ui dropdown item account" tabindex="0">
          <button class="circular ui account icon button">
            <i class="icon user"></i>
          </button>
          <div class="menu" tabindex="-1">
            <div class="item">Action</div>
            <div class="item">Another Action</div>
            <div class="item">Something else here</div>
            <div class="divider"></div>
            <div class="item">Separated Link</div>
            <div class="divider"></div>
            <div class="item">One more separated link</div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui container">
      <div class="ui stackable centered grid">
        <div class="ui row">
          <div class="ten wide column center aligned">
              <h1 class="ui inverted  header vr-slogan transition hidden">
                <p>It's a big world</p>
                <p>Exploring it just go easier</p>
              </h1>
              <div class="ui fluid icon input vr-search transition hidden">
                <input type="text" placeholder="Search for VR types, names & more...">
                <i class="search icon"></i>
              </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
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

  }
}
</script>

<style lang="css">
    .hidden.menu {
     display: none;
   }
   .masthead.segment {
     min-height: 43.75rem;
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
    background-image: url('./../../assets/img/header2.png')
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    background-color: #80cbd3
  .ui.input.vr-search
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15), 0 2px 3px 0 rgba(0, 0, 0, .2)
    transition: all 2s ease-in-out
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
</style>
