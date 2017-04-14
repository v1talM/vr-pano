<template lang="html">
  <div class="ui masthead segment vertical uploader"
    v-bind:style="{backgroundImage: 'url(' + require('@/assets/img/uploader-bg.jpg') + ')'}">
    <div class="ui container stackable centered two column grid">
      <div class="ui five wide column uploader-wrap">
        <div class="ui photo area">
          <input type="file" class="file-upload-input" />
          <div class="drag-text">
            <p class="title">拖动图片到此上传</p>
          </div>
        </div>
      </div>
      <div class="ui column uploader-wrap inverse">
        <div class="ui info area">
          <form class="material-form">
            <div class="container">
              <!-- Text input -->
              <div class="material-input">
                <input class="input-item" type="text" required id="input-field1">
                <label>作品名称</label>
                <span class="bar"></span>
              </div>
              <div class="material-input">
                <textarea class="input-item"></textarea>
                <label>作品描述</label>
                <span class="bar"></span>
              </div>
              <label class="label">作品分类</label>
              <div class="material-input">
                <input class="input-item" id="test-radio1" name="test" type="radio" required>
                <label for="test-radio1">城市</label>
              </div>

              <div class="material-input">
                <input class="input-item" id="test-radio2" name="test" type="radio" required>
                <label for="test-radio2">风景</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="css">
  .material-form .container {
    background: white;
    padding: 2rem 1rem;
  }
  .material-form .container .material-input {
  position: relative;
  margin-bottom: 30px;
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
  .material-form .container .material-input input[type=search]:valid + label {
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
  .material-form .container .material-input input[type=search]:valid ~ .bar:after {
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
    padding: 12rem 1rem
    border: .25rem dashed #ffffff
    font-weight: normal
    font-size: 1.28571429rem
    text-align: center
    position: relative
    color: #ffffff
  .uploader-wrap .info.area
    width: 100%
    padding: 2rem 1rem
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


</style>
