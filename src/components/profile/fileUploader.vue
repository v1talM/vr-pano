<template lang="html">
  <label class="button" id="file-uploader">
    <div class="icon">
      <div class="upload"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zM28 26v8h-8v-8h-6l10-10 10 10h-6z"/></svg></div>
    </div>
  </label>
</template>

<script>
export default {

}
</script>

<style lang="sass">
  #file-uploader.button
    height: 6.25rem
    width: 6.25rem
    position: absolute
    top: 50%
    left: 50%
    border-radius: 100%
    margin: -3.125rem
    overflow: hidden
    background: #1976D2
    input[type=checkbox]
      opacity: 0
    .icon, .upload, .done, .circle, .clipper
      position: absolute
      top: 0
      left: 0
      height: 100%
      width: 100%
    .upload, .done
      display: -webkit-box
      display: -ms-flexbox
      display: flex
      -webkit-box-align: center
      -ms-flex-align: center
      align-items: center
      -webkit-box-pack: center
      -ms-flex-pack: center
      justify-content: center
      -webkit-transition: opacity 0s linear
      transition: opacity 0s linear
    .upload svg, .done svg
      fill: white
    .done
      opacity: 0

    input:checked ~ .icon .done
      opacity: 1
      -webkit-transition-delay: 2s
              transition-delay: 2s
    .upload
      opacity: 1
    input:checked ~ .icon .upload
      opacity: 0
      -webkit-transition-delay: 2s
              transition-delay: 2s
    .clipper
      width: 50%
      overflow: hidden
      &:before
        content: ''
        box-sizing: border-box
        position: absolute
        top: 0
        left: 0
        height: 100%
        width: 100%
        border: 0px solid white
        -webkit-transition: -webkit-transform 0s linear
        transition: -webkit-transform 0s linear
        transition: transform 0s linear
        transition: transform 0s linear, -webkit-transform 0s linear
        -webkit-transform: rotate(-180deg)
                transform: rotate(-180deg)
        background: #49ba8e

    .clipper._1:before
      border-top-left-radius: 100% 50%
      border-bottom-left-radius: 100% 50%
      -webkit-transform-origin: 100% 50%
              transform-origin: 100% 50%

    .clipper._2:before
      border-top-right-radius: 100% 50%
      border-bottom-right-radius: 100% 50%
      -webkit-transform-origin: 0% 50%
              transform-origin: 0% 50%

    input:checked ~ .circle .clipper:before
      -webkit-transform: rotate(0deg)
              transform: rotate(0deg)
      -webkit-transition-duration: 1s
              transition-duration: 1s

    input:checked ~ .circle .clipper._1:before
      -webkit-transition-delay: 1s
              transition-delay: 1s

    .clipper._2, .clipper._2:before
      left: auto
      right: 0
</style>
