<template lang="html">
  <div class="ui circular big icon bottom left dropdown button newpro">
    <i class="plus icon"></i>
    <div class="menu">
      <div class="item">
        <router-link :to="{name: 'add-profile'}" class="circular ui big icon button newphoto">
          <i class="icon image"></i>
        </router-link>
      </div>
      <div class="item">
        <button class="circular ui big icon button newmail">
          <i class="icon mail"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    $(".ui.button.newpro").dropdown({
      direction: 'upward'
    })
  }
}
</script>

<style lang="sass">
  .ui.button.newpro
    background-color: #ff5252
    color: #ffffff
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 6px 8px rgba(0, 0, 0, 0.2)
    transition: all .5s ease-in-out
    z-index: 1000
  .ui.button.newpro .active, .ui.button.newpro:hover, .ui.upward.dropdown.button:not(.pointing):not(.floating).newpro.active
    border-radius: 50% !important
    background-color: #ff1744
    color: #ffffff
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.2)
  .ui.button.newpro.dropdown .menu
    border: none
    box-shadow: none
    padding: 0
    background: transparent
  .ui.button.newpro.dropdown .menu>.item
    padding: 0 !important
    margin: .78571429rem 0
  .ui.button.newpro.dropdown .menu>.item:hover
    background: none
  .ui.button.newpro.dropdown .menu>.item.selected
    background: none
  .ui.button.newpro.dropdown .menu>.item > .ui.button
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15), 0 6px 8px rgba(0, 0, 0, 0.2)
  .ui.button.newphoto
    background: #ffd740
    color: #ffffff
  .ui.button.newphoto:hover
    background: #ffc400
  .ui.button.newmail
    background: #64ffda
    color: #ffffff
  .ui.button.newmail:hover
    background: #1de9b6
  @media screen and (min-width: 75rem)
    .ui.button.newpro
      position: fixed
      right: 2rem
      bottom: 1.5rem
  @media screen and (max-width: 75rem)
    .ui.button.newpro
      position: fixed
      right: 1.5rem
      bottom: 1.5rem
  @media screen and (max-width: 44rem)
    .ui.button.newpro
      position: fixed
      right: 1rem
      bottom: 1rem

</style>
