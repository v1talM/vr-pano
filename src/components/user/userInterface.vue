<template lang="html">
  <div class="user interface container">
    <div class="user interface top">
      <img class="ui image circlar tiny centered avatar" :src="url_root + auth.authUser.avatar" alt="">
      <svg class="user interface top-svgBg" viewBox="0 0 366 280">
        <g class="svgBg__objects">
          <path class="svgBg__bg svgBg__bg1" fill="#86D7DB" d="M0,143 88,107 224,153 348,109 366,123 366,256 0,256z" />
          <path class="svgBg__bg svgBg__bg2" fill="#3C929A" d="M0,156 106,136 272,172 342,124 366,144 366,256 0,256z" />
          <path class="svgBg__bg svgBg__bg3" fill="#416175" d="M0,170 62,160 235,148 305,145 366,153 366,256 0,256z" />
          <g class="svgBg__tree svgBg__tree-1 m--left" data-id="1">
            <path class="svgBg__tree-leafs svgBg__tree-part" fill="#389296" d="M54,127 C77,127 62,95 54,63 C46,95 31,127 54,127" />
            <path class="svgBg__tree-trunk svgBg__tree-part" d="M56,147 Q55,115 54,83 Q53,115 52,146" />
          </g>
          <g class="svgBg__tree svgBg__tree-2 m--left" data-id="2">
            <path class="svgBg__tree-leafs svgBg__tree-part" fill="#389296" d="M67,124 C90,124 75,92 67,59 C59,92 44,124 67,124" />
            <path class="svgBg__tree-trunk svgBg__tree-part" d="M69,144 Q68,112 67,80 Q66,112 65,143" />
          </g>
          <g class="svgBg__tree svgBg__tree-3 m--right" data-id="3">
            <path class="svgBg__tree-leafs svgBg__tree-part" fill="#389296" d="M264,129 C287,129 272,97 264,64 C256,97 241,129 264,129" />
            <path class="svgBg__tree-trunk svgBg__tree-part" d="M266,149 Q265,117 264,85 Q263,117 262,148" />
          </g>
          <g class="svgBg__tree svgBg__tree-4 m--right" data-id="4">
            <path class="svgBg__tree-leafs svgBg__tree-part" fill="#207277" d="M287,128 C310,128 295,96 287,63 C279,96 264,128 287,128" />
            <path class="svgBg__tree-trunk svgBg__tree-part" d="M289,148 Q288,116 287,84 Q286,116 285,147" />
          </g>
          <g class="svgBg__tree svgBg__tree-5 m--right" data-id="5">
            <path class="svgBg__tree-leafs svgBg__tree-part" fill="#389296" d="M313,128 C336,128 321,96 313,63 C305,96 290,128 313,128" />
            <path class="svgBg__tree-trunk svgBg__tree-part" d="M315,148 Q314,116 313,84 Q312,116 311,147" />
          </g>
        </g>
      </svg>
    </div>
    <div class="user interface body">
      <div class="plane-cont">
        <div class="plane-rotater">
          <div class="plane">
            <svg class="plane-svg" viewBox="0 0 28 26">
              <path class="plane-svg__path" fill="#fff" d="M0,0 28,13 0,26 0,13 20,13 0,7z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="pull-down">下拉刷新</div>
      <div class="items">
        <div class="item">
          <div class="ui two column grid">
            <div class="center aligned column">
              <div class="ui tiny followers statistic">
                <div class="value">
                  0
                </div>
                <div class="label">关注者 </div>
              </div>
            </div>
            <div class="ui vertical divider"></div>
            <div class="center aligned column">
              <div class="ui tiny favorites statistic">
                <div class="value">
                  0
                </div>
                <div class="label">喜欢 </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item item-1">
          <router-link :to="{name: 'user', params: {id: auth.authUser.id}}" class="icon-box item__icon">
            <span class="icon-box__inner m--left">
              <i class="fa alarm outline icon"></i>
            </span>
            <span class="icon-box__inner m--right">
              <i class="fa alarm outline icon"></i>
            </span>
          </router-link>
          <router-link :to="{name: 'user', params: {id: auth.authUser.id}}" class="item__name">
            我的消息
          </router-link>
          <router-link :to="{name: 'user', params: {id: auth.authUser.id}}" class="ui circular label">
            0
          </router-link>
        </div>
        <div class="item item-2">
          <router-link :to="{name: 'user', params: {id: auth.authUser.id}}" class="icon-box item__icon">
            <span class="icon-box__inner m--left">
              <i class="fa paint brush icon"></i>
            </span>
            <span class="icon-box__inner m--right">
              <i class="fa paint brush icon"></i>
            </span>
          </router-link>
          <router-link :to="{name: 'user', params: {id: auth.authUser.id}}" class="item__name">
            我的作品
          </router-link>
          <router-link :to="{name: 'user', params: {id: auth.authUser.id}}" class="ui circular label">
            {{ auth.authUser.productsCount }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="user interface foot">
      <div class="control">
        <button class="negative tiny ui icon button" @click="handleLogout()">
          <i class="icon sign out"></i>
          退出
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {url_root} from '@/env'
export default {
  data () {
    return {
      url_root: url_root
    }
  },
  props:['auth'],
  mounted () {
    window.requestAnimFrame = (function() {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    })();

    $(document).ready(function() {

      var $top = $(".user.interface.top");
      var $body = $(".user.interface.body");
      var $bg1 = $(".svgBg__bg1");
      var $bg2 = $(".svgBg__bg2");
      var $bg3 = $(".svgBg__bg3");
      // jQuery have problems with getting svg elements attrs, so I'm using vanillaJS
      var $trees = [].slice.call(document.querySelectorAll(".svgBg__tree"));
      var $treeParts = [].slice.call(document.querySelectorAll(".svgBg__tree-part"));
      var $leftTrees = $(".svgBg__tree.m--left");
      var $rightTrees = $(".svgBg__tree.m--right");
      var $planeRotater = $(".plane-rotater");
      var $plane = $(".plane");
      var isDesktop = window.matchMedia("(min-width: 769px)").matches;
      var topH = (isDesktop) ? 186 : 149;
      var bg1change, bg2change, bg3change;
      var bg1max = (isDesktop) ? 10 : 8;
      var bg2max = (isDesktop) ? 22 : 18;
      var bg3max = (isDesktop) ? 44 : 35;
      var pullDeltaY;
      var maxPullDeltaY = (isDesktop) ? 70 : 56;
      var treesData = {};
      var treeMaxX = (isDesktop) ? 18 : 14;
      var treeMaxCoef = treeMaxX / maxPullDeltaY;
      var treeChange;
      var planeMaxDeg = -45; // defines maximum plane rotation deg during pull event
      var planeMaxCoef = planeMaxDeg / maxPullDeltaY;
      var planeChange;
      var frame = 1000 / 60; // 60 frames per second
      // duration for release animation for all elements, except flying plane
      var releaseTime = 900;
      var animating = false;
      var planeAnimTime = 3500; // this value must be synced with SASS $planeAnimTime

      /* You can find these easing functions on this site
      http://timotheegroleau.com/Flash/experiments/easing_function_generator.htm
      Also, you can customize them with generator,
      like i customized this elasticBig easing, to heavily shake these trees
      */
      var easings = {
        elastic: function(t,b,c,d) {
          var ts = (t/=d)*t;
          var tc = ts*t;
          return b+c*(33*tc*ts + -106*ts*ts + 126*tc + -67*ts + 15*t);
        },
        elasticBig: function(t,b,c,d) {
          var ts = (t/=d)*t;
          var tc = ts*t;
          return b+c*(21*tc*ts + -150*ts*ts + 250*tc + -150*ts + 30*t);
        },
        inCubic: function(t,b,c,d) {
          var tc = (t/=d)*t*t;
          return b+c*(tc);
        }
      };

      /* store clones in object */
      var cloneCounter = 1;
      var $items = $(".items");
      var clones = {
        clone1: $(".item-1").clone(),
        clone2: $(".item-2").clone(),
        clone3: $(".item-3").clone()
      };

      /* Applies class with padding transition, which shifts content down,
      then it's prepends clone with 0 opacity and absolute position (0,0).
      Then this clone fades in and padding class being removed from $items and
      absolute position removed from inserted clone
      */
      function insertNewClone() {
        var $clone = clones["clone"+cloneCounter];
        $clone.addClass("absPos hidden");
        $items.prepend($clone).addClass("padded");
        $clone.css("top");
        $clone.removeClass("hidden");
        $clone.find(".item__icon").addClass("animated");
        cloneCounter++;
        if (cloneCounter > 3) cloneCounter = 1;
        setTimeout(function() {
          $items.removeClass("padded");
          $clone.removeClass("absPos");
        }, 300);
      };

      /* This looks messy, but basically I'm storing tree parts paths D attributes as arrays
      and X&Y coordinates of middle points.
      */
      function storeTreeCoords() {
        var treeId, treeObj, trunkTop, leafsTop;

        $trees.forEach(function($tree) {
          treeId = $tree.getAttribute("data-id");
          treesData["tree"+treeId] = {};
          treeObj = treesData["tree"+treeId];
          treeObj.isRight = $tree.classList.contains("m--right");
          treeObj.$treeTrunk = $tree.querySelector(".svgBg__tree-trunk");
          treeObj.$treeLeafs = $tree.querySelector(".svgBg__tree-leafs");
          treeObj.trunkInitArrD = treeObj.$treeTrunk.getAttribute("d").split(" ");
          treeObj.leafsInitArrD = treeObj.$treeLeafs.getAttribute("d").split(" ");
          trunkTop = treeObj.trunkInitArrD[2];
          leafsTop = treeObj.leafsInitArrD[3];
          treeObj.trunkInitX = +trunkTop.split(",")[0];
          treeObj.leafsInitX = +leafsTop.split(",")[0];
          treeObj.trunkInitY = +trunkTop.split(",")[1];
          treeObj.leafsInitY = +leafsTop.split(",")[1];
        });
      };

      storeTreeCoords();

      /* Each tree consists of two parts - trunk and leafs.
      Both of these parts created with two quadratic bezier curves (left and right sides).
      Trunk created with C curve, leafs with Q curve. Here you can find good explanation about them:
      http://tutorials.jenkov.com/svg/path-element.html
      Basically, I'm just changing middle point X coordinate of each part
      and it's affects both curves, so this looks like I'm magically tilt these trees
      */
      function tiltTrees(x) {
        var treeId, treeObj, trunkArr, leafsArr, changeX;

        $trees.forEach(function($tree) {
          treeId = $tree.getAttribute("data-id");
          treeObj = treesData["tree"+treeId];
          trunkArr = treeObj.trunkInitArrD.slice();
          leafsArr = treeObj.leafsInitArrD.slice();
          changeX = (treeObj.isRight) ? x : -x;

          trunkArr[2] = (treeObj.trunkInitX + changeX/2) + "," + treeObj.trunkInitY;
          leafsArr[3] = (treeObj.leafsInitX + changeX) + "," + treeObj.leafsInitY;

          treeObj.$treeTrunk.setAttribute("d", trunkArr.join(" "));
          treeObj.$treeLeafs.setAttribute("d", leafsArr.join(" "));
        });
      };

      /* Moving mountains and tree <g> elements with transform translateY
      transform-origin's hardcoded for each element in css and scales with viewBox
      */
      function moveBgs() {
        $bg1.css({"-webkit-transform": "translate3d(0,"+bg1change+"px, 0)",
                  "transform": "translate3d(0,"+bg1change+"px, 0)"});
        $bg2.css({"-webkit-transform": "translate3d(0,"+bg2change+"px, 0)",
                  "transform": "translate3d(0,"+bg2change+"px, 0)"});
        $bg3.css({"-webkit-transform": "translate3d(0,"+bg3change+"px, 0)",
                  "transform": "translate3d(0,"+bg3change+"px, 0)"});
        $leftTrees.css({"-webkit-transform": "translate3d(0,"+bg2change+"px, 0)",
                        "transform": "translate3d(0,"+bg2change+"px, 0)"});
        $rightTrees.css({"-webkit-transform": "translate3d(0,"+bg3change+"px, 0)",
                         "transform": "translate3d(0,"+bg3change+"px, 0)"});
      };

      function checkMaxBgValues() {
        if (bg1change > bg1max) bg1change = bg1max;
        if (bg2change > bg2max) bg2change = bg2max;
        if (bg3change > bg3max) bg3change = bg3max;
      };

      // applies changes for all elements
      function applyChanges(topY) {
        $top.css("height", topH + topY + "px");
        moveBgs();
        tiltTrees(treeChange);
        $planeRotater.css({"-webkit-transform": "rotate("+planeChange+"deg)",
                           "transform": "rotate("+planeChange+"deg)"});
      };

      /* calculates numbers for applyChanges function, when
      you are using mousemove/touchmove pull event
      */
      function pullChange(y) {
        if (y < 0) y = 0;
        if (y > maxPullDeltaY) y = maxPullDeltaY;
        bg1change = bg2change = bg3change = y;
        checkMaxBgValues();
        treeChange = y * treeMaxCoef;
        planeChange = y * planeMaxCoef;

        applyChanges(y);
      };

      /* calculates numbers for applyChanges function, when
      release event is fired
      */
      function releaseChange(props) {
        bg1change = bg2change = bg3change = props.bgY;
        checkMaxBgValues();
        treeChange = props.treeVal * treeMaxCoef;
        planeChange = props.planeDeg * planeMaxCoef;

        applyChanges(props.topY);
      };

      function release() {
        // number of frames, which you need to animate with requestAnimationFrame
        var steps = Math.floor(releaseTime / frame);
        var curStep = 0;
        var topY, bgY, treeVal, planeDeg;
        var y = pullDeltaY;
        if (y > maxPullDeltaY) y = maxPullDeltaY;
        var releasePlane = y >= maxPullDeltaY/2;
        animating = true; // prevents from pull event during animation
        // if you pulled more than 1/2 of maxPullDeltaY - starts the plane flight animation
        if (releasePlane) {
          $plane.addClass("fly"); // adds class to plane with keyframes animation
          setTimeout(function() {
            // when animation is over, allow pull events, remove keyframes class and add new clone
            animating = false;
            $plane.removeClass("fly");
          }, planeAnimTime);
        }

        /* this function fires each available frame,
        until animation will be over (curStep > steps)
        */
        function animate() {
          curStep++;
          // applies different easings for different groups of elements
          topY = easings.elastic(curStep, y, 0 - y, steps);
          bgY = easings.elastic(curStep, y, 0 - y, steps);
          treeVal = easings.elasticBig(curStep, y, 0 - y, steps);
          planeDeg = easings.inCubic(curStep, y, 0 - y, steps);

          releaseChange({topY: topY, bgY: bgY, treeVal: treeVal, planeDeg: planeDeg});

          if (curStep > steps) {
            pullDeltaY = 0;
            // if pulled less than 1/2 of maxPullDeltaY - allow pull event earlier
            if (!releasePlane) animating = false;
            return;
          }
          requestAnimFrame(animate);
        }
        animate();
      };

      /* On mousedown/touchstart, attaches mousemove/touchmove events
      for dynamic pull change events. When mouseup/touchend event fired -
      runs release function and removes move/end events
      */
      $(document).on("mousedown touchstart", ".user.interface.body", function(e) {
        if (animating) return; // prevents from pulling during the release animation
        var startY =  e.pageY || e.originalEvent.touches[0].pageY;

        $(document).on("mousemove touchmove", function(e) {
          var y = e.pageY || e.originalEvent.touches[0].pageY;
          pullDeltaY = (y - startY) / 1.5; // slightly slow pull event for better experience
          if (!pullDeltaY) return; // prevents from rapid click events
          pullChange(pullDeltaY);
        });

        $(document).on("mouseup touchend", function() {
          $(document).off("mousemove touchmove mouseup touchend");
          if (!pullDeltaY) return; // prevents from rapid click events
          release();
        });
      });

      // source - http://davidwalsh.name/javascript-debounce-function
      function debounce(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };

      /* redifine max values for desktop/mobile
      all other things scales with rem units and viewBox
      */
      var resizeFn = debounce(function() {
        isDesktop = window.matchMedia("(min-width: 769px)").matches;
        topH = (isDesktop) ? 186 : 149;
        bg1max = (isDesktop) ? 10 : 8;
        bg2max = (isDesktop) ? 22 : 18;
        bg3max = (isDesktop) ? 44 : 35;
        maxPullDeltaY = (isDesktop) ? 70 : 56;
        treeMaxX = (isDesktop) ? 18 : 14;
      }, 100);

      $(window).on("resize", resizeFn);


    });
  },
  methods: {
    handleLogout () {
      this.$store.dispatch('logoutUser')
      window.localStorage.removeItem('authUser')
    }
  }
}
</script>
<style lang="css">
.user.interface.container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #F0FAF9;
  box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.user.interface .avatar{
  position: absolute;
  left: calc(50% - 40px);
  top: 3.5rem;
}

.user.interface .top {
  position: relative;
  background: -webkit-linear-gradient(#7BCECA, #82D3CB);
  background: linear-gradient(#7BCECA, #82D3CB);
  overflow: hidden;
}
.user.interface .top svg{
  display: block;
}
.user.interface .body {
  position: relative;
  padding-top: 2rem;
  will-change: transform;
}
.user.interface .foot {
  position: absolute;
  padding-top: 2rem;
  will-change: transform;
  width: 100%;
  bottom: 0;
}
.user.interface .foot .control{
  padding: 1rem;
}
.user.interface .pull-down {
  position: absolute;
  left: 0;
  top: .5rem;
  width: 100%;
  font-size: .8rem;
  text-align: center;
  color: #546e7a;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
}
.user.interface .pull-down:before, .pull-down:after {
  content: "";
  position: absolute;
  top: 0;
  width: 1rem;
  height: 1rem;
  border: 1px solid rgba(84, 92, 103, 0.6);
  border-left: none;
  border-top: none;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-animation: arrowAnim 1.5s infinite;
          animation: arrowAnim 1.5s infinite;
}
.user.interface .pull-down:before {
  left: 11rem;
 }
.user.interface .pull-down:after {
  left: 25rem;
}

@-webkit-keyframes arrowAnim {
  to {
    -webkit-transform: translateY(1.3rem) rotate(45deg);
            transform: translateY(1.3rem) rotate(45deg);
    opacity: 0;
  }
}

@keyframes arrowAnim {
  to {
    -webkit-transform: translateY(1.3rem) rotate(45deg);
            transform: translateY(1.3rem) rotate(45deg);
    opacity: 0;
  }
}
.user.interface .items {
  position: relative;
  padding: 1rem;
}
.user.interface .items.padded {
  -webkit-transition: padding 0.3s;
  transition: padding 0.3s;
  padding-top: 8rem;
}

.user.interface .items .item {
  padding: 1rem .825rem;
  margin: .75rem 0;
  background-color: #ffffff;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
}
.ui.statistic .label{
  font-size: .75rem;
}
.ui.statistic.followers .value{
  color: #5af158;
}
.ui.statistic.favorites .value{
  color: #ff5177;
}
.user.interface .item .label{
  margin-top: .625rem !important;
}
.user.interface .item .icon-box__inner >.icon{
  font-size: 1.25rem;
  margin-top: -.1rem;
}
.user.interface .item.item-1 .icon-box__inner >.icon{
  color: #7BCECA;
}
.user.interface .item.item-2 .icon-box__inner >.icon{
  color: #ff5252;
}
.user.interface .item.item-1{
  border-left: .25rem solid #7BCECA;
}
.user.interface .item.item-2{
  border-left: .25rem solid #ff5252;
}
.user.interface .item.item-1 .label{
  background-color: #7BCECA;
}
.user.interface .item.item-2 .label{
  background-color: #ff5252;
}
.user.interface .item.absPos {
  position: absolute;
  left: 0;
  top: 0;
}
.user.interface .item.hidden {
  opacity: 0;
}
.user.interface .item__icon {
  display: inline-block;
  vertical-align: top;
  width: 3rem;
  height: 3rem;
  margin-right: 1.625rem;
  border-radius: 50%;
}
.user.interface .item__icon.animated {
  -webkit-animation: animateIcon 0.6s forwards;
          animation: animateIcon 0.6s forwards;
}
.user.interface .item__icon.m--img img {
  width: 100%;
}
.user.interface .item__name {
  font-size: 1.25rem;
  line-height: 3rem !important;
  color: #546e7a;
}

@-webkit-keyframes animateIcon {
  20% {
    -webkit-transform: scaleY(0.7);
            transform: scaleY(0.7);
  }
  40% {
    -webkit-transform: scaleY(0.9);
            transform: scaleY(0.9);
  }
  60% {
    -webkit-transform: scaleY(0.6);
            transform: scaleY(0.6);
  }
  80% {
    -webkit-transform: scaleY(1.1);
            transform: scaleY(1.1);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}

@keyframes animateIcon {
  20% {
    -webkit-transform: scaleY(0.7);
            transform: scaleY(0.7);
  }
  40% {
    -webkit-transform: scaleY(0.9);
            transform: scaleY(0.9);
  }
  60% {
    -webkit-transform: scaleY(0.6);
            transform: scaleY(0.6);
  }
  80% {
    -webkit-transform: scaleY(1.1);
            transform: scaleY(1.1);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}
.plane-cont {
  position: absolute;
  left: 1.625rem;
  top: -1.625rem;
  width: 3.25rem;
  height: 3.25rem;
  background: #5DB2DF;
  border-radius: 50%;
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
}

.plane-rotater {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -0.625rem;
  margin-top: -0.625rem;
  width: 1.25rem;
  height: 1.25rem;
}

.plane.fly {
  -webkit-animation: planeFly 3.5s forwards;
          animation: planeFly 3.5s forwards;
}

@-webkit-keyframes planeFly {
  28% {
    -webkit-transform: translate(55rem, 13rem) rotate(20deg) scale(0.7);
            transform: translate(55rem, 13rem) rotate(20deg) scale(0.7);
  }
  35% {
    -webkit-transform: translate(45rem, -8rem) rotate(-160deg) scale(0.5);
            transform: translate(45rem, -8rem) rotate(-160deg) scale(0.5);
  }
  85% {
    -webkit-transform: translate(-15rem, -4rem) rotate(-180deg) scale(0.7);
            transform: translate(-15rem, -4rem) rotate(-180deg) scale(0.7);
  }
  90% {
    -webkit-transform: translate(-15rem, 0) rotate(0deg);
            transform: translate(-15rem, 0) rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}

@keyframes planeFly {
  28% {
    -webkit-transform: translate(55rem, 13rem) rotate(20deg) scale(0.7);
            transform: translate(55rem, 13rem) rotate(20deg) scale(0.7);
  }
  35% {
    -webkit-transform: translate(45rem, -8rem) rotate(-160deg) scale(0.5);
            transform: translate(45rem, -8rem) rotate(-160deg) scale(0.5);
  }
  85% {
    -webkit-transform: translate(-15rem, -4rem) rotate(-180deg) scale(0.7);
            transform: translate(-15rem, -4rem) rotate(-180deg) scale(0.7);
  }
  90% {
    -webkit-transform: translate(-15rem, 0) rotate(0deg);
            transform: translate(-15rem, 0) rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
.svgBg__bg {
  -webkit-transform-origin: 183px 256px;
          transform-origin: 183px 256px;
}
.svgBg__tree-trunk {
  fill: #1E5E65;
}
.svgBg__tree-part {
  -webkit-transform-origin: inherit;
          transform-origin: inherit;
}
.svgBg__tree-1 {
  -webkit-transform-origin: 54px 147px;
          transform-origin: 54px 147px;
  opacity: 0.7;
}
.svgBg__tree-1 .svgBg__tree-part {
  -webkit-transform: scale(0.35, 0.44);
          transform: scale(0.35, 0.44);
}
.svgBg__tree-2 {
  -webkit-transform-origin: 67px 144px;
          transform-origin: 67px 144px;
  opacity: 0.7;
}
.svgBg__tree-2 .svgBg__tree-part {
  -webkit-transform: scale(0.56, 0.65);
          transform: scale(0.56, 0.65);
}
.svgBg__tree-3 {
  -webkit-transform-origin: 264px 149px;
          transform-origin: 264px 149px;
}
.svgBg__tree-3 .svgBg__tree-part {
  -webkit-transform: scale(0.58, 0.65);
          transform: scale(0.58, 0.65);
}
.svgBg__tree-4 {
  -webkit-transform-origin: 287px 148px;
          transform-origin: 287px 148px;
}
.svgBg__tree-4 .svgBg__tree-part {
  -webkit-transform: scale(0.8, 1);
          transform: scale(0.8, 1);
}
.svgBg__tree-5 {
  -webkit-transform-origin: 313px 148px;
          transform-origin: 313px 148px;
}
.svgBg__tree-5 .svgBg__tree-part {
  -webkit-transform: scale(0.5, 0.61);
          transform: scale(0.5, 0.61);
}

/*
font awesome icon slicing effect from http://codepen.io/suez/pen/KpwEeg
*/
.icon-box {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 4rem;
  height: 4rem;
  background: transparent;
  overflow: hidden;
  font-size: 0;
  text-decoration: none;
  border-radius: 50%;
}
.icon-box:before {
  content: "";
  position: absolute;
  left: 16.66667%;
  top: 0;
  margin-left: -1px;
  width: 2px;
  height: 0.6rem;
  background: #fff;
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  -webkit-transform: rotate(-30deg) translate(0.33333rem, -1rem);
          transform: rotate(-30deg) translate(0.33333rem, -1rem);
}
.icon-box:hover:before {
  -webkit-animation: slice 0.5s;
          animation: slice 0.5s;
}
.icon-box__inner {
  position: relative;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  width: 50%;
  height: 100%;
  -webkit-transform: rotate(-30deg);
          transform: rotate(-30deg);
  font-size: 2.4rem;
  color: #fff;
}
.icon-box__inner .fa {
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(30deg);
          transform: translate(-50%, -50%) rotate(30deg);
}
.icon-box__inner.m--left {
  -webkit-transform-origin: 100% 50%;
          transform-origin: 100% 50%;
}
.icon-box__inner.m--left .fa {
  left: 100%;
}
.icon-box__inner.m--right {
  -webkit-transform-origin: 0 50%;
          transform-origin: 0 50%;
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
}
.icon-box:hover .icon-box__inner.m--right {
  -webkit-transition: -webkit-transform 0.5s 0.1s;
  transition: -webkit-transform 0.5s 0.1s;
  transition: transform 0.5s 0.1s;
  transition: transform 0.5s 0.1s, -webkit-transform 0.5s 0.1s;
  -webkit-transform: rotate(-30deg) translate(0.2rem, 0.4rem);
          transform: rotate(-30deg) translate(0.2rem, 0.4rem);
}
.icon-box__inner.m--right .fa {
  left: 0;
}

@-webkit-keyframes slice {
  to {
    -webkit-transform: rotate(-30deg) translate(0.33333rem, 7rem);
            transform: rotate(-30deg) translate(0.33333rem, 7rem);
  }
}

@keyframes slice {
  to {
    -webkit-transform: rotate(-30deg) translate(0.33333rem, 7rem);
            transform: rotate(-30deg) translate(0.33333rem, 7rem);
  }
}
@media(min-width: 75rem){
  .user.interface .top{
    height: 11.625rem;
  }
}
@media(max-width: 74rem){
  .user.interface .top{
    height: 9.25rem;
  }
}
@media(max-width: 26rem){
  .plane-cont{
    left: 1.125rem;
    top: -1.125rem;
    width: 2.25rem;
    height: 2.25rem;
  }
  .plane-rotater{
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    width: 1rem;
    height: 1rem;
  }
  .user.interface .items{
    padding: .5rem;
  }
  .user.interface .items .item{
    padding: .5rem .325rem;
    margin: .5rem 0;
  }
  .user.interface .item__icon{
    margin-right: .5rem;
  }
  .user.interface .item__name{
    font-size: 1rem;
  }
}
@media(max-width:24rem){
  .plane-cont{
    left: 1.125rem;
    top: -1.125rem;
    width: 2.25rem;
    height: 2.25rem;
  }
  .plane-rotater{
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    width: 1rem;
    height: 1rem;
  }
  .user.interface .items{
    padding: .5rem;
  }
  .user.interface .items .item{
    padding: .5rem .325rem;
    margin: .5rem 0;
  }
  .user.interface .item__icon{
    margin-right: .5rem;
  }
  .user.interface .item__name{
    font-size: 1rem;
  }
}
@media(max-width:20rem){
  .plane-cont{
    left: 1.125rem;
    top: -1.125rem;
    width: 2.25rem;
    height: 2.25rem;
  }
  .plane-rotater{
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    width: 1rem;
    height: 1rem;
  }
  .user.interface .items{
    padding: .5rem;
  }
  .user.interface .items .item{
    padding: .5rem .325rem;
    margin: .5rem 0;
  }
  .user.interface .item__icon{
    margin-right: .5rem;
  }
  .user.interface .item__name{
    font-size: 1rem;
  }
}
</style>
