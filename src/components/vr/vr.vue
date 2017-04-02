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
    api.getVRById(this.$route.params.id).then( res => {
      this.vr = res.data.data
      this.$store.dispatch('setVR', this.vr)
      this.test()
    }).catch( error => {

    })
  },
  methods: {
    test () {
                var camera, scene, renderer;
                var texture_placeholder,
                isUserInteracting = false,
                onMouseDownMouseX = 0, onMouseDownMouseY = 0,
                onPointerDownPointerX = 0, onPointerDownPointerY = 0,
                onPointerDownLon = 0, onPointerDownLat = 0,
                lon = 90, onMouseDownLon = 0,
                lat = 0, onMouseDownLat = 0,
                phi = 0, theta = 0
                const vm = this;
                init(vm);
                animate();
                function init(vm) {
                    var container, mesh;
                    container = document.getElementById( 'pano' );
                    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );
                    camera.target = new THREE.Vector3( 0, 0, 0 );
                    scene = new THREE.Scene();
                    var geometry = new THREE.SphereGeometry( 500, 60, 40 );
                    geometry.scale( - 1, 1, 1 );
                    var vr_photo = new Image()
                    vr_photo.onload = function () {

                    }
                    vr_photo.src = url_root + vm.vr.pro_photo
                    var material = new THREE.MeshBasicMaterial( {
                        map: new THREE.TextureLoader().load( vr_photo.src )
                    } );
                    mesh = new THREE.Mesh( geometry, material );
				    scene.add( mesh );
				    renderer = new THREE.WebGLRenderer();
                    renderer.setPixelRatio( window.devicePixelRatio );
                    renderer.setSize( window.innerWidth, window.innerHeight );
                    container.appendChild( renderer.domElement );


                    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
                    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                    document.addEventListener( 'mouseup', onDocumentMouseUp, false );
                    document.addEventListener( 'wheel', onDocumentMouseWheel, false );
                    document.addEventListener( 'touchstart', onDocumentTouchStart, false );
				    document.addEventListener( 'touchmove', onDocumentTouchMove, false );

				    function onDocumentTouchStart( event ) {
                        if ( event.touches.length == 1 ) {
                            onPointerDownPointerX = event.touches[ 0 ].pageX;
                            onPointerDownPointerY = event.touches[ 0 ].pageY;
                            onPointerDownLon = lon;
                            onPointerDownLat = lat;
                        }
                    }
                    function onDocumentTouchMove( event ) {
                        if ( event.touches.length == 1 ) {
                            lon = ( onPointerDownPointerX - event.touches[0].pageX ) * 0.1 + onPointerDownLon;
                            lat = ( event.touches[0].pageY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
                        }
                    }
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
                            material.map.image.src = event.target.result;
                            material.map.needsUpdate = true;
                        }, false );
                        reader.readAsDataURL( event.dataTransfer.files[ 0 ] );
                        document.body.style.opacity = 1;
                    }, false );

                    window.addEventListener( 'resize', onWindowResize, false );
                }
                function onWindowResize() {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize( window.innerWidth, window.innerHeight );
                }

                function onDocumentMouseDown( event ) {
                    isUserInteracting = true;
                    onPointerDownPointerX = event.clientX;
                    onPointerDownPointerY = event.clientY;
                    onPointerDownLon = lon;
                    onPointerDownLat = lat;
                }
                function onDocumentMouseMove( event ) {
                    if ( isUserInteracting === true ) {
                        lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
                        lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
                    }
                }
                function onDocumentMouseUp( event ) {
                    isUserInteracting = false;
                }
                function onDocumentMouseWheel( event ) {
                    var dis = camera.fov + event.deltaY * 0.01
                    if(dis > 85 || dis < 60){
                        return ;
                    }else{
                        camera.fov += event.deltaY * 0.01;
                    }
                    camera.updateProjectionMatrix();
                }

                function animate() {
                    requestAnimationFrame( animate );
                    update();
                }

                function update() {
                    if ( isUserInteracting === false ) {
                        lon += 0.025;
                        lat += 0.0125;
                    }
                    lat = Math.max( - 85, Math.min( 85, lat ) );
                    phi = THREE.Math.degToRad( 90 - lat );
                    theta = THREE.Math.degToRad( lon );
                    camera.target.x = 100 * Math.sin( phi ) * Math.cos( theta );
                    camera.target.y = 100 * Math.cos( phi );
                    camera.target.z = 100 * Math.sin( phi ) * Math.sin( theta );
                    camera.lookAt( camera.target );
                    /*
                    // distortion
                    camera.position.copy( camera.target ).negate();
                    */
                    renderer.render( scene, camera );
                }
            },
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
      this.vr_photo = new Image()
      this.vr_photo.onload = function () {

      }
      this.vr_photo.src = url_root + this.vr.pro_photo
      this.material = new THREE.MeshBasicMaterial( {
          map: new THREE.TextureLoader().load( this.vr_photo.src )
      } );
      console.log(this.vr_photo.src)
      this.mesh = new THREE.Mesh( this.geometry, this.material )
	    this.scene.add( this.mesh )
	    this.renderer = new THREE.WebGLRenderer()
      this.renderer.setPixelRatio( window.devicePixelRatio )
      this.renderer.setSize( window.innerWidth, window.innerHeight )
      this.container.appendChild( this.renderer.domElement )

      document.addEventListener( 'mousedown', this.onDocumentMouseDown, false )
      document.addEventListener( 'mousemove', this.onDocumentMouseMove, false )
      document.addEventListener( 'mouseup', this.onDocumentMouseUp, false )
      document.addEventListener( 'wheel', this.onDocumentMouseWheel, false )
      document.addEventListener( 'touchstart', this.onDocumentTouchStart, false )
	    document.addEventListener( 'touchmove', this.onDocumentTouchMove, false )

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

      window.addEventListener( 'resize', this.onWindowResize, false );
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
      var dis = camera.fov + event.deltaY * 0.01
      if(dis > 85 || dis < 60){
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
    height: inherit;
}
</style>
