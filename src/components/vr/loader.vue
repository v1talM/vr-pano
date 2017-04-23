<template lang="html">
  <div class="vr-loader vertical-centered-box">
    <div class="content">
      <div class="loader-circle">
        加载中
      </div>
      <div class="loader-line-mask one">
        <div class="loader-line"></div>
      </div>
      <div class="loader-line-mask two">
        <div class="loader-line"></div>
      </div>
      <div class="loader-line-mask three">
        <div class="loader-line"></div>
      </div>
      <div class="loader-line-mask four">
        <div class="loader-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.vr-loader.vertical-centered-box {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 1100;
  left: 0;
  top: 0;
}
.vr-loader.vertical-centered-box:after {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -0.25em;
}
.vr-loader.vertical-centered-box .content {
  position: relative;
  width: 50px;
  height: 50px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-animation: fadein 1s 1.5s linear forwards;
  -moz-animation: fadein 1s 1.5s linear forwards;
  -o-animation: fadein 1s 1.5s linear forwards;
  animation: fadein 1s 1.5s linear forwards;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  font-size: .75rem;
  opacity: 0;
}
.vr-loader.vertical-centered-box .loader-circle{
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;
  line-height: 3.125rem;
}
.loader-line-mask {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50px;
  height: 100px;
  margin-left: -50px;
  margin-top: -50px;
  overflow: hidden;
  -webkit-transform-origin: 50px 50px;
  -moz-transform-origin: 50px 50px;
  -ms-transform-origin: 50px 50px;
  -o-transform-origin: 50px 50px;
  transform-origin: 50px 50px;
  -webkit-mask-image: -webkit-linear-gradient(top, #000000, rgba(0, 0, 0, 0));
  mix-blend-mode: hard-light;
  opacity: 0.8;
}
.loader-line-mask .loader-line {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.loader-line-mask.one {
  -webkit-animation: rotate 2s infinite linear;
  -moz-animation: rotate 2s infinite linear;
  -o-animation: rotate 2s infinite linear;
  animation: rotate 2s infinite linear;
}
.loader-line-mask.one .loader-line {
  box-shadow: inset 0 0 0 8px #1de9b6;
}
.loader-line-mask.two {
  -webkit-animation: rotate 1.8s 0.5s infinite linear;
  -moz-animation: rotate 1.8s 0.5s infinite linear;
  -o-animation: rotate 1.8s 0.5s infinite linear;
  animation: rotate 1.8s 0.5s infinite linear;
}
.loader-line-mask.two .loader-line {
  box-shadow: inset 0 0 0 8px #FF5252;
}
.loader-line-mask.three {
  -webkit-animation: rotate 2s 1s infinite linear;
  -moz-animation: rotate 2s 1s infinite linear;
  -o-animation: rotate 2s 1s infinite linear;
  animation: rotate 2s 1s infinite linear;
}
.loader-line-mask.three .loader-line {
  box-shadow: inset 0 0 0 8px #FFc400;
}
.loader-line-mask.four {
  -webkit-animation: rotate 1.8s 1.4s infinite linear;
  -moz-animation: rotate 1.8s 1.4s infinite linear;
  -o-animation: rotate 1.8s 1.4s infinite linear;
  animation: rotate 1.8s 1.4s infinite linear;
}
.loader-line-mask.four .loader-line {
  box-shadow: inset 0 0 0 8px #0097a7;
}
lesshat-selector {
  -lh-property: 0;
}
@-webkit-keyframes rotate{ 0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); }}
@-moz-keyframes rotate{ 0% { -moz-transform: rotate(0deg); } 100% { -moz-transform: rotate(360deg); }}
@-o-keyframes rotate{ 0% { -o-transform: rotate(0deg); } 100% { -o-transform: rotate(360deg); }}
@keyframes rotate{ 0% {-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);transform: rotate(0deg); } 100% {-webkit-transform: rotate(360deg);-moz-transform: rotate(360deg);-ms-transform: rotate(360deg);transform: rotate(360deg); }}
[not-existing] {
  zoom: 1;
}
lesshat-selector {
  -lh-property: 0;
}
@-webkit-keyframes fadein{ 0% { opacity: 0; } 100% { opacity: 1; }}
@-moz-keyframes fadein{ 0% { opacity: 0; } 100% { opacity: 1; }}
@-o-keyframes fadein{ 0% { opacity: 0; } 100% { opacity: 1; }}
@keyframes fadein{ 0% { opacity: 0; } 100% { opacity: 1; }}
[not-existing] {
  zoom: 1;
}
</style>
