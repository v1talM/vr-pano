<template lang="html">
  <div class="ui masthead segment vertical uploader"
    v-bind:style="{backgroundImage: 'url(' + require('@/assets/img/uploader-bg.jpg') + ')'}">
    <form class="material-form" @submit.prevent="handleProfileSubmit()">
      <div class="ui container stackable centered two column grid">
          <div class="ui five wide column uploader-wrap">
            <div class="ui photo area">
              <file-uploader v-show="profile.pro_thumb" :imgData="profile.pro_thumb"></file-uploader>
              <file-selector v-bind:class="{'hidden': profile.pro_thumb}" v-on:fileChange="onFileChange" name="thumb"></file-selector>
            </div>
            <div class="ui photo area">
              <file-uploader v-show="profile.pro_photo" :imgData="profile.pro_photo"></file-uploader>
              <file-selector v-bind:class="{'hidden': profile.pro_photo}" v-on:fileChange="onFileChange" name="photo"></file-selector>
            </div>
          </div>
          <div class="ui column uploader-wrap inverse">
            <div class="ui info area">
                <div class="input-container">
                  <!-- Text input -->
                  <div class="material-input">
                    <input v-model="profile.pro_title"
                          class="input-item"
                          type="text"
                          required id="input-field1">
                    <label>作品名称</label>
                    <span class="bar"></span>
                  </div>
                  <div class="material-input">
                    <textarea class="input-item" v-model="profile.pro_description" required></textarea>
                    <label>作品描述</label>
                    <span class="bar"></span>
                  </div>
                  <div class="material-input">
                    <input
                          class="input-item"
                          type="text"
                          disabled id="input-field1">
                    <input @change="onFileChange" class="input-item-hidden" name="bgm" type="file" required />
                    <label>背景音乐（可选）</label>
                    <span class="bar"></span>
                  </div>
                  <label class="label">作品分类</label>
                  <div class="material-input input-radio">
                    <input v-model="profile.pro_type" value="1"
                          class="input-item" id="test-radio1" name="type"  type="radio" required>
                    <label for="test-radio1">城市</label>
                  </div>
                  <div class="material-input input-radio">
                    <input v-model="profile.pro_type" value="2"
                          class="input-item" id="test-radio2" name="type"  type="radio" required>
                    <label for="test-radio2">风景</label>
                  </div>
                  <div class="material-button">
                    <button>
                        <span>上传作品</span>
                        <svg class="load" version="1.1"x="0px" y="0px" width="30px" height="30px" viewBox="0 0 40 40" enable-background="new 0 0 40 40">
                            <path opacity="0.3" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                            s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                            c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                            <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                            C22.32,8.481,24.301,9.057,26.013,10.047z">
                            <animateTransform attributeType="xml"
                            attributeName="transform"
                            type="rotate"
                            from="0 20 20"
                            to="360 20 20"
                            dur="0.5s"
                            repeatCount="indefinite"/>
                            </path>
                        </svg>
                        <svg class="check" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                    </button>
                    <div class="ui tiny upload green progress">
                      <div class="bar"></div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {getHeader} from '@/helper'
import {api_root, upload_url, max_upload_size, max_upload_size_m} from '@/env'
import swal from 'sweetalert2'
import fileSelector from '@/components/profile/fileSelector'
import fileUploader from '@/components/profile/fileUploader'
export default {
  components: {
    fileUploader, fileSelector
  },
  computed: mapState({
    user: state => state.auth.authUser
  }),
  data () {
    return {
      profile: {
        pro_title: '',
        pro_description: '',
        pro_type: 1,
        pro_photo: '',
        pro_thumb: '',
        pro_bgm: '',
      }
    }
  },
  methods: {
    handleProfileSubmit () {
      if(this.profile.pro_thumb === '' || this.profile.pro_photo === '' ) return ;
      //构造表单体
      const profile = {
        pro_title: this.profile.pro_title,
        pro_thumb: this.profile.pro_thumb,
        pro_photo: this.profile.pro_photo,
        pro_bgm: this.profile.pro_bgm,
        pro_type: this.profile.pro_type,
        pro_description: this.profile.pro_description,
        user_id: this.user.id
      }
      //生成用户header
      const headers = getHeader()
      const thumb_uploader = $("input[name='upload_animation']")[0]
      const photo_uploader = $("input[name='upload_animation']")[1]
      const vm = this
      this.uploadAnimation()
      this.axios.post(api_root + upload_url, profile, {
        headers: headers,
        onUploadProgress: function (progressEvent) {
          let percent = parseInt(progressEvent.loaded / progressEvent.total * 100)
          console.log('已上传 '+ percent + '%')
          $('.ui.upload.progress').progress('set percent', percent)
        }
      })
      .then(res => {
        const btn = $(".material-button")
        const loadBar = btn.children("div.progress")
        const loadSVG = $(".material-button .load")
        const checkSVG = $(".material-button .check")
        loadSVG.fadeOut(200, function () {
          checkSVG.fadeIn(200, function () {
            swal({
              text: '作品上传成功!',
              type: 'success'
            })
            setTimeout(function() {
              btn.children("div").fadeOut(200, function() {
                loadBar.width(0);
                checkSVG.fadeOut(200, function() {
                  btn.children("button").animate({
                    width: '9.37rem'
                  });
                  btn.animate({
                    width: 150
                  }, 300, function() {
                    btn.children("button").children("span").fadeIn(200);
                  });
                });
              });
            }, 2000);
          })
        })
        this.clearForm()
      })
    },
    onFileChange (e) {
      const file = e.target.files || e.dataTransfer.files;
      if (!file.length) return;
      if( e.target.name == 'thumb' ){
          this.createThumbImage(file);
      }
      if( e.target.name == 'photo'){
          this.createPhotoImage(file);
      }
      if( e.target.name == 'bgm'){
          this.createBackgroundMusic(file)
      }
    },
    createBackgroundMusic (file) {
      if(typeof FileReader==='undefined'){
        swal({
          text: '您的浏览器不支持图片上传，请升级您的浏览器',
          type: 'error'
        })
        return false;
      }
      if(file[0].size  > max_upload_size){
        swal({
          text: '您的文件过大,请选择'+ max_upload_size_m +'M以下的文件',
          type: 'error'
        })
        return false
      }
      var vm = this;
      var reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = function(e) {
          vm.profile.pro_bgm = e.target.result;
      }
    },
    createThumbImage (file) {
        if(typeof FileReader==='undefined'){
          swal({
            text: '您的浏览器不支持图片上传，请升级您的浏览器',
            type: 'error'
          })
          return false;
        }

        if(file[0].size  > max_upload_size){
          swal({
            text: '您的文件过大,请选择'+ max_upload_size_m +'M以下的文件',
            type: 'error'
          })
          return false
        }
        var image = new Image();
        var vm = this;
        var reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = function(e){
          vm.profile.pro_thumb = e.target.result
        };
    },
    createPhotoImage (file) {
        if(typeof FileReader==='undefined'){
            swal({
              text: '您的浏览器不支持图片上传，请升级您的浏览器',
              type: 'error'
            })
            return false
        }
        if(file[0].size  > max_upload_size){
          swal({
            text: '您的文件过大,请选择'+ max_upload_size_m +'M以下的文件',
            type: 'error'
          })
          return false
        }
        var image = new Image();
        var vm = this;
        var reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onload = function(e){
            vm.profile.pro_photo = e.target.result;
        };
    },
    uploadAnimation () {
    		var btn = $(".material-button button span").parent().parent();
    		var loadSVG = btn.children("button").children(".load");
    		var loadBar = btn.children("div").children("span");
    		var checkSVG = btn.children("button").children(".check");
    		btn.children("button").children("span").fadeOut(200, function() {
    			btn.children("button").animate({
    				width: 56
    			}, 100, function() {
    				loadSVG.fadeIn(300);
    				btn.animate({
    					width: '100%'
    				}, 200, function() {
    					btn.children("div").fadeIn(200, function() {
    						loadBar.animate({
    							width: "100%"
    						}, 2000);
    					});
    				});
    			});
    		});
    },
    clearForm () {
      this.profile.pro_title = '',
      this.profile.pro_description = '',
      this.profile.pro_type = 1,
      this.profile.pro_thumb = '',
      this.profile.pro_photo = ''
    }
  }
}
</script>
<style lang="css">
  .ui.photo.area .hidden{
    visibility: hidden;
  }
  .material-form .input-container {
    position: relative;
    padding: 2rem 1rem 1rem
  }
  .material-form .container .material-input {
    position: relative;
    margin-bottom: 30px;
  }
  .material-form .container .material-input.input-radio{
    display: inline-block;
    margin-right: 1rem;
  }
  .material-form .container .material-input.input-submit{
    text-align: right;
    margin-top: 1rem;
    margin-bottom: 0;
  }
  .material-form .container .material-input.input-submit .ui.upload.profile{
    background-color: #2685FF;
    color: #ffffff;
    border-radius: .125rem;
    font-size: .875rem;
  }
  .material-form .container .material-input .input-item-hidden{
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  .material-form .container .material-input input {
    background-color: transparent;
  }
  .material-form .container .material-input textarea{
    resize: none;
  }
  .material-form .container .material-input label{
    color: #999;
    font-size: 1rem;
    position: absolute;
    pointer-events: none;
    top: 10px;
    transition: 0.2s ease all;
    width: 100%;
  }
  .material-form .container .label{
    color: #999;
    font-size: 1rem;
    pointer-events: none;
    width: 100%;
    margin-bottom: 1rem;
    display: inline-block;
  }
  .material-form .container .material-input input:not([type]),
  .material-form .container .material-input input[type=text],
  .material-form .container .material-input input[type=password],
  .material-form .container .material-input input[type=email],
  .material-form .container .material-input input[type=url],
  .material-form .container .material-input input[type=time],
  .material-form .container .material-input input[type=date],
  .material-form .container .material-input input[type=datetime-local],
  .material-form .container .material-input input[type=tel],
  .material-form .container .material-input input[type=number],
  .material-form .container .material-input input[type=search],
  .material-form .container .material-input textarea {
    color: #333;
    font-size: 16px;
    padding: 10px 10px 10px 0;
    position: relative;
    display: block;
    border: none;
    width: 100%;
    border-bottom: 1px solid #d5d5d5;
  }
  .material-form .container .material-input input:not([type]):focus,
  .material-form .container .material-input input[type=text]:focus,
  .material-form .container .material-input input[type=password]:focus,
  .material-form .container .material-input input[type=email]:focus,
  .material-form .container .material-input input[type=url]:focus,
  .material-form .container .material-input input[type=time]:focus,
  .material-form .container .material-input input[type=date]:focus,
  .material-form .container .material-input input[type=datetime-local]:focus,
  .material-form .container .material-input input[type=tel]:focus,
  .material-form .container .material-input input[type=number]:focus,
  .material-form .container .material-input input[type=search]:focus,
  .material-form .container .material-input textarea:focus
  {
    outline: none;
  }
  .material-form .container .material-input input:not([type]):focus + label,
  .material-form .container .material-input input[type=text]:focus + label,
  .material-form .container .material-input input[type=password]:focus + label,
  .material-form .container .material-input input[type=email]:focus + label,
  .material-form .container .material-input input[type=url]:focus + label,
  .material-form .container .material-input input[type=time]:focus + label,
  .material-form .container .material-input input[type=date]:focus + label,
  .material-form .container .material-input input[type=datetime-local]:focus + label,
  .material-form .container .material-input input[type=tel]:focus + label,
  .material-form .container .material-input input[type=number]:focus + label,
  .material-form .container .material-input input[type=search]:focus + label,
  .material-form .container .material-input textarea:focus + label,
  .material-form .container .material-input input:not([type]):valid + label,
  .material-form .container .material-input input[type=text]:valid + label,
  .material-form .container .material-input input[type=password]:valid + label,
  .material-form .container .material-input input[type=email]:valid + label,
  .material-form .container .material-input input[type=url]:valid + label,
  .material-form .container .material-input input[type=time]:valid + label,
  .material-form .container .material-input input[type=date]:valid + label,
  .material-form .container .material-input input[type=datetime-local]:valid + label,
  .material-form .container .material-input input[type=tel]:valid + label,
  .material-form .container .material-input input[type=number]:valid + label,
  .material-form .container .material-input input[type=search]:valid + label,
  .material-form .container .material-input textarea:valid + label {
    top: -10px;
    font-size: 12px;
    color: #167ffc;
  }
  .material-form .container .material-input input:not([type]):focus ~ .bar:before,
  .material-form .container .material-input input[type=text]:focus ~ .bar:before,
  .material-form .container .material-input input[type=password]:focus ~ .bar:before,
  .material-form .container .material-input input[type=email]:focus ~ .bar:before,
  .material-form .container .material-input input[type=url]:focus ~ .bar:before,
  .material-form .container .material-input input[type=time]:focus ~ .bar:before,
  .material-form .container .material-input input[type=date]:focus ~ .bar:before,
  .material-form .container .material-input input[type=datetime-local]:focus ~ .bar:before,
  .material-form .container .material-input input[type=tel]:focus ~ .bar:before,
  .material-form .container .material-input input[type=number]:focus ~ .bar:before,
  .material-form .container .material-input input[type=search]:focus ~ .bar:before,
  .material-form .container .material-input textarea:focus ~ .bar::before,
  .material-form .container .material-input input:not([type]):focus ~ .bar:after,
  .material-form .container .material-input input[type=text]:focus ~ .bar:after,
  .material-form .container .material-input input[type=password]:focus ~ .bar:after,
  .material-form .container .material-input input[type=email]:focus ~ .bar:after,
  .material-form .container .material-input input[type=url]:focus ~ .bar:after,
  .material-form .container .material-input input[type=time]:focus ~ .bar:after,
  .material-form .container .material-input input[type=date]:focus ~ .bar:after,
  .material-form .container .material-input input[type=datetime-local]:focus ~ .bar:after,
  .material-form .container .material-input input[type=tel]:focus ~ .bar:after,
  .material-form .container .material-input input[type=number]:focus ~ .bar:after,
  .material-form .container .material-input input[type=search]:focus ~ .bar:after,
  .material-form .container .material-input textarea:focus ~ .bar:after,
  .material-form .container .material-input input:not([type]):valid ~ .bar:before,
  .material-form .container .material-input input[type=text]:valid ~ .bar:before,
  .material-form .container .material-input input[type=password]:valid ~ .bar:before,
  .material-form .container .material-input input[type=email]:valid ~ .bar:before,
  .material-form .container .material-input input[type=url]:valid ~ .bar:before,
  .material-form .container .material-input input[type=time]:valid ~ .bar:before,
  .material-form .container .material-input input[type=date]:valid ~ .bar:before,
  .material-form .container .material-input input[type=datetime-local]:valid ~ .bar:before,
  .material-form .container .material-input input[type=tel]:valid ~ .bar:before,
  .material-form .container .material-input input[type=number]:valid ~ .bar:before,
  .material-form .container .material-input input[type=search]:valid ~ .bar:before,
  .material-form .container .material-input textarea:valid ~ .bar::before,
  .material-form .container .material-input input:not([type]):valid ~ .bar:after,
  .material-form .container .material-input input[type=text]:valid ~ .bar:after,
  .material-form .container .material-input input[type=password]:valid ~ .bar:after,
  .material-form .container .material-input input[type=email]:valid ~ .bar:after,
  .material-form .container .material-input input[type=url]:valid ~ .bar:after,
  .material-form .container .material-input input[type=time]:valid ~ .bar:after,
  .material-form .container .material-input input[type=date]:valid ~ .bar:after,
  .material-form .container .material-input input[type=datetime-local]:valid ~ .bar:after,
  .material-form .container .material-input input[type=tel]:valid ~ .bar:after,
  .material-form .container .material-input input[type=number]:valid ~ .bar:after,
  .material-form .container .material-input input[type=search]:valid ~ .bar:after,
  .material-form .container .material-input textarea:valid ~ .bar::after {
    width: 51%;
    background: #167ffc;
    border-bottom: 0px;
  }
  .material-form .container .material-input .bar {
    position: relative;
    display: block;
    width: 100%;
  }
  .material-form .container .material-input .bar:before,
  .material-form .container .material-input .bar:after {
    content: '';
    height: 2px;
    width: 0px;
    position: absolute;
    bottom: 0.5px;
    background: #167ffc;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  .material-form .container .material-input .bar:before {
    left: 51%;
  }
  .material-form .container .material-input .bar:after {
    right: 49%;
  }
  .material-form .container .material-input .bar + label:after {
    display: block;
    content: "";
    position: absolute;
    top: 65px;
    opacity: 0;
    transition: 0.2s opacity ease-out, 0.2s color ease-out;
    -moz-transition: 0.2s opacity ease-out, 0.2s color ease-out;
    -webkit-transition: 0.2s opacity ease-out, 0.2s color ease-out;
  }
  .material-form .container .material-input select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    background-color: transparent;
    color: #333;
    font-size: 16px;
    padding: 10px 10px 10px 0;
    position: relative;
    display: block;
    width: 300px;
    border: none;
    border-bottom: 1px solid #d5d5d5;
    border-radius: 0;
  }
  .material-form .container .material-input select:focus {
    outline: none;
  }
  .material-form .container .material-input select + .icon-arrow-down {
    position: absolute;
    float: right;
  }
  .material-form .container .material-input select option:checked + label {
    display: none;
  }
  .material-form .container .material-input input[type="radio"] + label {
    pointer-events: all;
  }
  .material-form .container .material-input input[type="radio"]:not(:checked),
  .material-form .container .material-input input[type="radio"]:checked {
    position: absolute;
    left: -9999px;
  }
  .material-form .container .material-input input[type="radio"]:not(:checked) + label,
  .material-form .container .material-input input[type="radio"]:checked + label {
    position: relative;
    padding-left: 35px;
    padding-top: 4px;
    cursor: pointer;
    width: 100%;
    display: inline;
  }
  .material-form .container .material-input input[type="radio"]:not(:checked) + label:before,
  .material-form .container .material-input input[type="radio"]:checked + label:before,
  .material-form .container .material-input input[type="radio"]:not(:checked) + label:after,
  .material-form .container .material-input input[type="radio"]:checked + label:after {
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    width: 24px;
    height: 24px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  .material-form .container .material-input input[type="radio"]:not(:checked) + label:before,
  .material-form .container .material-input input[type="radio"]:checked + label:before {
    border: 1.5px solid #b9b9ba;
  }
  .material-form .container .material-input input[type="radio"]:checked + label:before {
    border: 1px solid #49ba8e;
  }
  .material-form .container .material-input input[type="radio"]:not(:checked) + label:before,
  .material-form .container .material-input input[type="radio"]:checked + label:before {
    border-radius: 50%;
  }
  .material-form .container .material-input input[type="radio"]:not(:checked) + label:after,
  .material-form .container .material-input input[type="radio"]:checked + label:after {
    font-size: 9px;
    color: #fff;
    background: #49ba8e;
  }
  .material-form .container .material-input input[type="radio"]:not(:checked) + label:after {
    transform: scale(0, 0);
  }
  .material-form .container .material-input input[type="radio"]:checked + label:after {
    transform: scale(1, 1);
  }
  .material-form .container .material-input input[type="radio"]:checked + label:after {
    border-radius: 50%;
    width: 16px;
    height: 16px;
    left: 5px;
    top: 7px;
  }
  .material-form .material-button {
    border-radius: 1.75rem;
    margin: .5rem auto 0 auto;
    display: block;
    position: relative;
    background: #fff;
    width: 9.375rem;
    box-shadow: 0 2px 6px rgba(170, 185, 200, 0.4);
  }
  .material-form .material-button svg {
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -15px 0 0 -15px;
    fill: #fff;
  }
  .material-form .material-button div.ui.progress {
    height: .5em;
    margin: -2px 0 0 0;
    position: absolute;
    top: 50%;
    left: 71px;
    right: 25px;
    background: #d3d7e0;
    display: none;
    border-radius: 2px;
  }
  .material-form .material-button div.ui.progress.upload .bar, .material-form .material-button div.ui.progress.upload.success .bar{
    background-color: #49ba8e !important;
  }
  .material-form .material-button button {
    position: relative;
    display: block;
    background: #3f82d7;
    z-index: 2;
    line-height: 3rem;
    height: 3rem;
    border-radius: 1.75rem;
    width: 100%;
    text-align: center;
    color: #fff;
    box-shadow: 0 2px 6px rgba(170, 185, 200, 0.4);
    font-size: 1rem;
    border: none;
    outline: none;
  }
  .material-form .material-button button span {
    cursor: pointer;
    display: block;
  }

</style>
<style lang="sass">
  .ui.segment.uploader
    display: flex
    align-items: center
    justify-content: center
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
  .ui.uploader-wrap
    background-color: #2685FF
    display: flex
    align-items: center
    justify-content: center
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.16), 0px 3px 3px 0px rgba(0, 0, 0, 0.23)
  .ui.uploader-wrap.inverse
    background-color: #ffffff
    display: flex
    align-items: center
    justify-content: center
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.16), 0px 3px 3px 0px rgba(0, 0, 0, 0.23)
  .uploader-wrap .photo.area
    width: 100%
    padding: 5rem 1rem
    border: .25rem dashed #ffffff
    font-weight: normal
    font-size: 1.28571429rem
    display: flex
    align-content: center
    justify-content: center
    position: relative
    color: #ffffff
  .uploader-wrap .photo.area:first-child
    margin-bottom: 1rem
  .uploader-wrap .info.area
    width: 100%
    padding: 0 1rem
    font-weight: normal
    font-size: 1.28571429rem
    text-align: left
    position: relative
    color: #2685FF
  .photo.area .file-upload-input
    position: absolute
    top: 0
    padding: 0
    width: 100%
    height: 100%
    outline: none
    opacity: 0
    cursor: pointer
    left: 0
  @media (max-width: 26rem)
    .ui.segment.uploader .grid
      margin: 5rem  1rem  1rem !important
    .uploader-wrap .photo.area
      padding: 2rem 0

</style>
