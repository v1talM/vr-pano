<template lang="html">
  <div class="ui center vertical aligned segment portfolio">
      <div class="ui stackable four column container grid">
        <div class="column" v-for="(vr, index) in computedList">
          <div class="ui card vr-portfolio">
            <div class="image">
              <router-link :to="{name: 'vr', params: {id: vr.id}}">
                <img class="ui fluid image vr-thumb" :src="root + vr.pro_thumb" :alt="vr.pro_title" :title="vr.pro_title">
              </router-link>
            </div>
            <div class="extra content">
              <div class="ui author grid row">
                <div class="four wide column">
                  <router-link :to="{name: 'user', params: {id: vr.user_id}}">
                    <img class="ui large avatar" src="./../../assets/img/matt.jpg" :alt="vr.user.name" :title="vr.user.name">
                  </router-link>
                </div>
                <div class="ten wide column">
                  <div class="left aligned">
                    <div class="header">
                      <router-link :to="{name: 'vr', params: {id: vr.id}}" :title="vr.pro_title">
                        {{ vr.pro_title }}
                      </router-link>
                    </div>
                    <div class="meta">
                      Friends of <router-link :to="{name: 'user', params: {id: vr.user.id}}">{{ vr.user.name }}</router-link>
                     </div>
                  </div>
                </div>

                <div class="two wide column">
                  <div class="ui heart rating" data-rating="1" data-max-rating="1" data-tooltip="100 favorites" data-position="left center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {url_root} from '@/env'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      root: url_root,
    }
  },
  computed: {
    ...mapState({
      vr_list: state => state.portfolio.VR_List
    }),
    computedList () {
      return this.vr_list
    }
  }
}
</script>

<style lang="css">
</style>
