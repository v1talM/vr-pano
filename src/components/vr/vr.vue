<template lang="html">
  <div id="pano">

  </div>
</template>
<script>
import api from '@/api/vr'
import {url_root} from '@/env'
window.THREE = require('three')
export default {
  data () {
    return {
      vr: null,
      camera: null, scene: null, renderer:null,
      texture_placeholder: null,
      isUserInteracting: false,
      onMouseDownMouseX: 0, onMouseDownMouseY: 0,
      onPointerDownPointerX: 0, onPointerDownPointerY: 0,
      onPointerDownLon: 0, onPointerDownLat: 0,
      lon: 90, onMouseDownLon: 0,
      lat: 0, onMouseDownLat: 0,
      phi: 0, theta: 0,
      container: null, mesh: null,
      geometry: null, vr_photo: null,
      material: null,
    }
  },
  mounted () {
    this.$store.dispatch('setPreload')
    const vrid = this.$route.params.id
    api.getVRById(vrid).then( res => {
      this.vr = res.data.data
      this.$store.dispatch('setVR', this.vr)
      this.initVR()
    }).catch( error => {

    })
  },
  methods: {
    initVR () {
      this.init()
      this.animate();
    },
    init () {
      this.container = document.getElementById( 'pano' );
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );
      this.camera.target = new THREE.Vector3( 0, 0, 0 );
      this.scene = new THREE.Scene();
      this.geometry = new THREE.SphereGeometry( 500, 60, 40 );
      this.geometry.scale( - 1, 1, 1 );
      var vr_photo = url_root + this.vr.pro_photo
      //this.vr_photo.src = require('@/assets/img/photo_88764.jpg')
      var vm = this
      this.material = new THREE.MeshBasicMaterial( {
          map: new THREE.TextureLoader().setCrossOrigin(url_root).load( vr_photo, function () {
            vm.$store.dispatch('clearPreload')
          })
        })
      this.mesh = new THREE.Mesh( this.geometry, this.material )
	    this.scene.add( this.mesh )
	    this.renderer = new THREE.WebGLRenderer()
      this.renderer.setPixelRatio( window.devicePixelRatio )
      this.renderer.setSize( window.innerWidth, window.innerHeight )
      this.container.appendChild( this.renderer.domElement )

      /* 监听用户鼠标事件并绑定 */
      var onDocumentMouseDown = this.onDocumentMouseDown
      var onDocumentMouseMove = this.onDocumentMouseMove
      var onDocumentMouseUp = this.onDocumentMouseUp
      var onDocumentMouseWheel = this.onDocumentMouseWheel
      var onDocumentTouchStart = this.onDocumentTouchStart
      var onDocumentTouchMove = this.onDocumentTouchMove

      document.addEventListener( 'mousedown', onDocumentMouseDown, false )
      document.addEventListener( 'mousemove', onDocumentMouseMove, false )
      document.addEventListener( 'mouseup', onDocumentMouseUp, false )
      document.addEventListener( 'wheel', onDocumentMouseWheel, false )
      document.addEventListener( 'touchstart', onDocumentTouchStart, false )
	    document.addEventListener( 'touchmove', onDocumentTouchMove, false )

      document.addEventListener( 'dragover', function ( event ) {
          event.preventDefault();
          event.dataTransfer.dropEffect = 'copy';
      }, false );
      document.addEventListener( 'dragenter', function ( event ) {
          document.body.style.opacity = 0.5;
      }, false );
      document.addEventListener( 'dragleave', function ( event ) {
          document.body.style.opacity = 1;
      }, false );
      document.addEventListener( 'drop', function ( event ) {
          event.preventDefault();
          var reader = new FileReader();
          reader.addEventListener( 'load', function ( event ) {
              this.material.map.image.src = event.target.result;
              this.material.map.needsUpdate = true;
          }, false );
          reader.readAsDataURL( event.dataTransfer.files[ 0 ] );
          document.body.style.opacity = 1;
      }, false );

      //监听窗口缩放
      var onWindowResize = this.onWindowResize
      window.addEventListener( 'resize', onWindowResize, false );
    },
    animate () {
      requestAnimationFrame( this.animate );
      this.update();
    },
    update () {
      if ( this.isUserInteracting === false ) {
          this.lon += 0.025;
          this.lat += 0.0125;
      }
      this.lat = Math.max( - 85, Math.min( 85, this.lat ) );
      this.phi = THREE.Math.degToRad( 90 - this.lat );
      this.theta = THREE.Math.degToRad( this.lon );
      this.camera.target.x = 100 * Math.sin( this.phi ) * Math.cos( this.theta );
      this.camera.target.y = 100 * Math.cos( this.phi );
      this.camera.target.z = 100 * Math.sin( this.phi ) * Math.sin( this.theta );
      this.camera.lookAt( this.camera.target );
      /*
      // distortion
      camera.position.copy( camera.target ).negate();
      */
      this.renderer.render( this.scene, this.camera );
    },
    onDocumentMouseDown (event) {
      this.isUserInteracting = true;
      this.onPointerDownPointerX = event.clientX;
      this.onPointerDownPointerY = event.clientY;
      this.onPointerDownLon = this.lon;
      this.onPointerDownLat = this.lat;
    },
    onDocumentMouseMove (event) {
      if ( this.isUserInteracting === true ) {
        this.lon = ( this.onPointerDownPointerX - event.clientX ) * 0.1 + this.onPointerDownLon;
        this.  lat = ( event.clientY - this.onPointerDownPointerY ) * 0.1 + this.onPointerDownLat;
      }
    },
    onDocumentMouseUp (event) {
      this.isUserInteracting = false;
    },
    onDocumentMouseWheel (event) {
      var dis = this.camera.fov + event.deltaY * 0.01
      if(dis > 85 || dis < 40){
          return ;
      }else{
          this.camera.fov += event.deltaY * 0.01;
      }
      this.camera.updateProjectionMatrix();
    },
    onDocumentTouchStart (event) {
      if ( event.touches.length == 1 ) {
          this.onPointerDownPointerX = event.touches[ 0 ].pageX;
          this.onPointerDownPointerY = event.touches[ 0 ].pageY;
          this.onPointerDownLon = this.lon;
          this.onPointerDownLat = this.lat;
      }
    },
    onDocumentTouchMove (event) {
      if ( event.touches.length == 1 ) {
          this.lon = ( this.onPointerDownPointerX - event.touches[0].pageX ) * 0.1 + this.onPointerDownLon;
          this.lat = ( event.touches[0].pageY - this.onPointerDownPointerY ) * 0.1 + this.onPointerDownLat;
      }
    },
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    }
  }
}
</script>

<style lang="css">
#pano {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
}
#pano canvas{
  display: block;
}
</style>
