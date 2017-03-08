<template lang="html">
  <div class="ui large top fixed hidden transition menu">
    <div class="ui container">
      <a class="toc item">
        <i class="sidebar icon"></i>
      </a>
      <a class="active item">
        <img class="ui mini image logo" src="" alt="vr-pano">
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
}
</script>

<style lang="css">
</style>
