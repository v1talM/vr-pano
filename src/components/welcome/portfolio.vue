<template lang="html">
  <div class="ui center vertical aligned segment portfolio">
      <transition-group
      class="ui stackable four column container grid"
      tag="div"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave">
        <div class="column" v-for="(vr, index) in computedList" :key="vr.id">
        <div class="ui card vr-portfolio">
          <div class="image">
            <router-link :to="{name: 'vr', params: {id: vr.id}}">
              <img class="ui fluid image vr-thumb" :src="root + vr.pro_thumb" :alt="vr.pro_title" :title="vr.pro_title">
            </router-link>
          </div>
          <div class="extra content">
            <div class="ui author grid row">
              <div class="four wide column">
                <router-link :to="{name: 'user', params: {id: vr.user.id}}">
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
    </transition-group>
  </div>
</template>

<script>
import portfolio from '@/api/portfolio'
import {url_root} from '@/env'
import Velocity from 'velocity'
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      root: url_root,
    }
  },
  methods: {
    ...mapActions([
      'setVRList',
      'getVRList',
      'pushVRList',
      'setPage',
      'setMaxPage'
    ]),
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1 },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  },
  computed: {
    ...mapState({
      page: state => state.portfolio.page,
      size: state => state.portfolio.size,
      type: state => state.portfolio.type,
      vr_list: state => state.portfolio.VR_List,
      is_max: state => state.portfolio.is_max,
      query: state => state.search.query,
    }),
    computedList () {
      var vm = this
      return this.vr_list.filter(item => {
        return (item.pro_title.indexOf(vm.query) !== -1) ||
               (item.user.name.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1) ||
               (item.user.email.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1)

      })
    }
  },
  created () {
    if(!this.is_max){
      const page = this.$store.state.portfolio.page
      const size = this.$store.state.portfolio.size
      const type = this.$store.state.portfolio.type
      const vm = this
      setTimeout(function () {
        portfolio.getVRList(page, size, type).then( res => {
          const vr_list = res.data.data
          const list = []
          for (var i = 0; i < vr_list.length; i++) {
            list.push(vr_list[i])
          }
          vm.pushVRList(list)
          vm.setPage(page + 1)
        })
      }, 300)
    }
  },
  mounted () {
      const vm = this
      $('.ui.portfolio .container.grid')
          .visibility({
            once: false,
            observeChanges: true,
	    initialCheck: false,
	    target: '.ui.vr-loader .load-bar',
	    onPassed: {
		'80%': function(){console.log('hello')}
	    },
            onBottomVisible: function(caculation) {
	      console.log(caculation)
              const page = vm.page
              const size = vm.size
              const type = vm.type
              if( !vm.is_max && page > 1){
                setTimeout(function () {
                  portfolio.getVRList(page, size, type).then(res => {
                    const vr_list = res.data.data
                    if( vr_list.length < 1) {
                      vm.setMaxPage()
                    }
                    const list = []
                    for (var i = 0; i < vr_list.length; i++) {
                      list.push(vr_list[i])
                    }
                    vm.pushVRList(list).then( res => {
                      if(!vm.is_max)
                        vm.setPage(page + 1)
                    })
                  })
                }, 300)
              }
            }
          })
      ;
  }

}
</script>
<style lang="sass">
  .ui.segment.portfolio
    background-color: #e1f5fe
    border-bottom: none
    padding-bottom: 2rem
  .ui.segment.portfolio .grid
    margin-top: 0
  .ui.segment.portfolio .card
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.16),0px 2px 5px 0px rgba(0,0,0,0.23)
  .ui.segment.portfolio .card:hover
    box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.16),0px 4px 6px 0px rgba(0,0,0,0.23)
    transition: box-shadow .3s
  .ui.segment.portfolio .card .content, .ui.segment.portfolio .card .extra.content
    background-color: #ffffff
  .ui.segment.portfolio .card.vr-portfolio
    width: 20rem
    margin: 0 auto
    height: auto
  .ui.author.grid
    padding: 0 .625rem 0 1rem
  .ui.author.grid .column
    padding: 0rem 0 1rem 0
  .ui.segment.portfolio .card.vr-portfolio .ui.image.vr-thumb
    height: 9.625rem
  .ui.segment.portfolio .card.vr-portfolio .avatar
    width: 2.5rem
    height: 2.5rem
    margin-right: 1rem
  .ui.segment.portfolio .card.vr-portfolio .header
    color: #546e7a
    font-size: 1.125rem
    font-weight: 700
  .ui.segment.portfolio .card.vr-portfolio .header>a
    color: inherit
    text-overflow: ellipsis
    overflow: hidden
    white-space: nowrap
    display: block
  .ui.segment.portfolio .card.vr-portfolio .header>a:hover
    color: inherit
  .ui.segment.portfolio .card.vr-portfolio .meta
    color: #cfd8dc
    font-size: .875rem
  .ui.segment.portfolio .card.vr-portfolio .rating
    margin-top: .775rem
  .ui.segment.portfolio .card.vr-portfolio .meta>a
    color: inherit
  .ui.segment.portfolio .card.vr-portfolio .meta>a:hover
    color: #ff1744
</style>
