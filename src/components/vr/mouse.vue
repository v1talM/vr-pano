<template lang="html">
  <div class="mouse_scroll">
		<div class="mouse">
			<div class="wheel"></div>
		</div>
    <div class="notice">
      <p>左右拖动鼠标调整方向，滚动鼠标滑轮调整距离。</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="css">
  .mouse_scroll {
    display: block;
    width: 10rem;
    height: 4rem;
    position: absolute;
    top: calc(50% - 2rem);
    text-align: center;
  }
  .mouse {
    height: 100%;
    width: 2.5rem;
    border-radius: .875rem;
    transform: none;
    border: 2px solid white;
    animation: mouse-move 3s linear 3;
    margin: 0 auto;
  }
  .wheel {
    display: block;
    margin: 5px auto;
    background: white;
    position: relative;
    height: .25rem;
    width: .25rem;
    border: 2px solid #fff;
    border-radius: 8px;
  }
  .wheel {
    -webkit-animation: mouse-wheel 0.6s linear infinite;
    -moz-animation: mouse-wheel 0.6s linear infinite;
  }
  .mouse_scroll .notice p{
    color: #ffffff;
    font-size: .875rem;
    margin: 1rem 0;
  }
  @keyframes mouse-move{
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    25% {
      -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
      transform: rotate(30deg);
    }
    50% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    75% {
      -webkit-transform: rotate(-30deg);
      -ms-transform: rotate(-30deg);
      transform: rotate(-30deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @keyframes mouse-wheel
  {
   0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
   }
   100% {
      opacity: 0;
      -webkit-transform: translateY(6px);
      -ms-transform: translateY(6px);
      transform: translateY(6px);
    }
  }

  @-moz-keyframes mouse-wheel
  {
    0% { top: 1px; }
    25% { top: 2px; }
    50% { top: 3px;}
    75% { top: 2px;}
    100% { top: 1px;}
  }
</style>
