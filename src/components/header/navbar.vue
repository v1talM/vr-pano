<template lang="html">
  <div class="ui large secondary inverted pointing menu">
    <div class="ui container">
      <a class="toc item" >
        <i class="sidebar icon"></i>
      </a>
      <router-link class="active item" :to="{name: 'welcome'}">
        <img class="ui mini image logo" :src="require('@/assets/logo.png')" alt="vr-pano">
      </router-link>
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
          <router-link :to="{ name: 'login' }" class="item">登录</router-link>
          <div class="divider"></div>
          <div class="item">One more separated link</div>
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
  }
}
</script>

<style lang="sass">
  .navbar
    position: relative
    z-index: 3
</style>
