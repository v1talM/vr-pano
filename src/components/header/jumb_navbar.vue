<template lang="html">
  <div class="ui large secondary fixed inverted pointing menu">
    <div class="ui container">
      <a class="toc item" >
        <i class="sidebar icon"></i>
      </a>
      <router-link class="active item" :to="{name: 'welcome'}">
        <img class="ui mini image logo" :src="require('@/assets/logo.png')" alt="vr-pano">
      </router-link>
      <div class="right menu">
        <router-link :to="{name: 'city'}" class="item">城市画廊</router-link>
        <router-link :to="{name: 'scenery'}" class="item">VR看世界</router-link>
        <router-link :to="{name: 'university'}" class="item">高校全景</router-link>
      </div>
      <div class="ui item account" tabindex="0">
        <button class="circular ui account icon button">
          <i class="icon user"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    $('.ui.user.sidebar')
      .sidebar('attach events', '.account.button')
    ;
    $('.ui.vr-sidebar.sidebar')
      .sidebar('attach events', '.toc.item')
    ;
  }
}
</script>

<style lang="sass">
  .navbar
    position: relative
    z-index: 3
</style>
