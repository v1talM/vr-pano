<template lang="html">
  <div class="">
    <input type="file" class="file-upload-input" @change="fileChange" :name="name" />
    <div class="drag-text">
      <p class="title" v-if="name == 'thumb'">上传缩略图</p>
      <p class="title" v-if="name == 'photo'">上传作品图</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
  methods: {
    fileChange (e) {
      this.$emit('fileChange',e)
    }
  }
}
</script>

<style lang="css">
</style>
