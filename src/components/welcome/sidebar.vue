<template lang="html">
  <div class="ui vertical vr-sidebar overlay sidebar menu">
    <a class="item brand">
      <div class="content">
        <router-link :to="{name: 'welcome'}">
          <img class="ui medium image brand" :src="require('@/assets/brand.png')" alt="vr-pano">
        </router-link>
      </div>
    </a>
    <router-link :to="{name: 'city'}" class="item"><i class="photo icon"></i> 城市画廊</router-link>
    <router-link :to="{name: 'scenery'}" class="item"><i class="world icon"></i> VR看世界</router-link>
    <router-link :to="{name: 'university'}" class="item"><i class="university icon"></i> 高校全景</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
