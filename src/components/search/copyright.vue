<template lang="html">
  <div class="ui center vertical aligned segment search copyright">
    <div class="ui grid container">
      <div class="left floated left aligned six wide column">
        <div class="ui mini horizontal statistic">
          <div class="value">
            {{ this.$store.state.portfolio.VR_List.length }}
          </div>
          <div class="label">个结果 </div>
        </div>
      </div>
      <div class="right floated right aligned six wide column">
        <a href="https://www.algolia.com/"><img :src="require('@/assets/img/algolia.png')" alt="algolia"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.ui.segment.search.copyright{
  margin-top: 6rem;
  background-color: transparent;
  box-shadow: none;
  border:none;
}
</style>
