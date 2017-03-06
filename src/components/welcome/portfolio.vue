<template lang="html">
  <div class="ui center vertical aligned segment portfolio">
    <div class="ui stackable four column container grid">
      <div class="column" v-for="vr in vr_list">
        <div class="ui card vr-portfolio">
          <div class="image">
            <img class="ui fluid image vr-thumb" :src="'http://vr.dev/' + vr.pro_thumb">
          </div>
          <div class="extra content">
            <div class="ui author grid row">
              <div class="four wide column">
                <img class="ui large avatar" src="./../../assets/img/matt.jpg">
              </div>
              <div class="ten wide column">
                <div class="left aligned">
                  <div class="header">
                    <a href="#" v-bind:title="vr.pro_title">{{ vr.pro_title }} </a>
                  </div>
                  <div class="meta">
                    Friends of <a href="#">Veronika</a>
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
      <!-- <div class="column">
        <div class="ui card vr-portfolio">
          <div class="image">
            <img class="ui fluid image" src="./../../assets/img/green.png">
          </div>
          <div class="extra content">
            <div class="ui author">
              <img class="left floated ui large avatar" src="./../../assets/img/matt.jpg">
              <div class="left floated left aligned">
                <div class="header">
                  <a href="#">Elliot Fu </a>
                </div>
                <div class="meta">
                  Friends of <a href="#">Veronika</a>
                 </div>
              </div>
              <div class="right floated">
                <div class="ui heart rating" data-rating="1" data-max-rating="1" data-tooltip="100 favorites" data-position="left center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ui card vr-portfolio">
          <div class="image">
            <img class="ui fluid image" src="./../../assets/img/green.png">
          </div>
          <div class="extra content">
            <div class="ui author">
              <img class="left floated ui large avatar" src="./../../assets/img/matt.jpg">
              <div class="left floated left aligned">
                <div class="header">
                  <a href="#">Elliot Fu </a>
                </div>
                <div class="meta">
                  Friends of <a href="#">Veronika</a>
                 </div>
              </div>
              <div class="right floated">
                <div class="ui heart rating" data-rating="1" data-max-rating="1" data-tooltip="100 favorites" data-position="left center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ui card vr-portfolio">
          <div class="image">
            <img class="ui fluid image" src="./../../assets/img/green.png">
          </div>
          <div class="extra content">
            <div class="ui author">
              <img class="left floated ui large avatar" src="./../../assets/img/matt.jpg">
              <div class="left floated left aligned">
                <div class="header">
                  <a href="#">Elliot Fu </a>
                </div>
                <div class="meta">
                  Friends of <a href="#">Veronika</a>
                 </div>
              </div>
              <div class="right floated">
                <div class="ui heart rating" data-rating="1" data-max-rating="1" data-tooltip="100 favorites" data-position="left center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ui card vr-portfolio">
          <div class="image">
            <img class="ui fluid image" src="./../../assets/img/green.png">
          </div>
          <div class="extra content">
            <div class="ui author">
              <img class="left floated ui large avatar" src="./../../assets/img/matt.jpg">
              <div class="left floated left aligned">
                <div class="header">
                  <a href="#">Elliot Fu </a>
                </div>
                <div class="meta">
                  Friends of <a href="#">Veronika</a>
                 </div>
              </div>
              <div class="right floated">
                <div class="ui heart rating" data-rating="1" data-max-rating="1" data-tooltip="100 favorites" data-position="left center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ui card vr-portfolio">
          <div class="image">
            <img class="ui fluid image" src="./../../assets/img/green.png">
          </div>
          <div class="extra content">
            <div class="ui author">
              <img class="left floated ui large avatar" src="./../../assets/img/matt.jpg">
              <div class="left floated left aligned">
                <div class="header">
                  <a href="#">Elliot Fu </a>
                </div>
                <div class="meta">
                  Friends of <a href="#">Veronika</a>
                 </div>
              </div>
              <div class="right floated">
                <div class="ui heart rating" data-rating="1" data-max-rating="1" data-tooltip="100 favorites" data-position="left center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ui card vr-portfolio">
          <div class="image">
            <img class="ui fluid image" src="./../../assets/img/green.png">
          </div>
          <div class="extra content">
            <div class="ui author">
              <img class="left floated ui large avatar" src="./../../assets/img/matt.jpg">
              <div class="left floated left aligned">
                <div class="header">
                  <a href="#">Elliot Fu </a>
                </div>
                <div class="meta">
                  Friends of <a href="#">Veronika</a>
                 </div>
              </div>
              <div class="right floated">
                <div class="ui heart rating" data-rating="1" data-max-rating="1" data-tooltip="100 favorites" data-position="left center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ui card vr-portfolio">
          <div class="image">
            <img class="ui fluid image" src="./../../assets/img/green.png">
          </div>
          <div class="extra content">
            <div class="ui author">
              <img class="left floated ui large avatar" src="./../../assets/img/matt.jpg">
              <div class="left floated left aligned">
                <div class="header">
                  <a href="#">Elliot Fu </a>
                </div>
                <div class="meta">
                  Friends of <a href="#">Veronika</a>
                 </div>
              </div>
              <div class="right floated">
                <div class="ui heart rating" data-rating="1" data-max-rating="1" data-tooltip="100 favorites" data-position="left center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ui card vr-portfolio">
          <div class="image">
            <img class="ui fluid image" src="./../../assets/img/green.png">
          </div>
          <div class="extra content">
            <div class="ui author">
              <img class="left floated ui large avatar" src="./../../assets/img/matt.jpg">
              <div class="left floated left aligned">
                <div class="header">
                  <a href="#">Elliot Fu </a>
                </div>
                <div class="meta">
                  Friends of <a href="#">Veronika</a>
                 </div>
              </div>
              <div class="right floated">
                <div class="ui heart rating" data-rating="1" data-max-rating="1" data-tooltip="100 favorites" data-position="left center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="ui card vr-portfolio">
          <div class="image">
            <img class="ui fluid image" src="./../../assets/img/green.png">
          </div>
          <div class="extra content">
            <div class="ui author">
              <img class="left floated ui large avatar" src="./../../assets/img/matt.jpg">
              <div class="left floated left aligned">
                <div class="header">
                  <a href="#">Elliot Fu </a>
                </div>
                <div class="meta">
                  Friends of <a href="#">Veronika</a>
                 </div>
              </div>
              <div class="right floated">
                <div class="ui heart rating" data-rating="1" data-max-rating="1" data-tooltip="100 favorites" data-position="left center"></div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import portfolio from '@/api/portfolio'
import {mapState, mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'setVRList',
      'getVRList',
      'pushVRList',
      'setPage'
    ])
  },
  computed: {
    ...mapState({
      page: state => state.portfolio.page,
      size: state => state.portfolio.size,
      vr_list: state => state.portfolio.VR_List
    })
  },
  created () {
    const page = this.$store.state.portfolio.page
    const size = this.$store.state.portfolio.size
    portfolio.getVRList(page, size).then( res => {
      const vr_list = res.data.data
      const list = []
      for (var i = 0; i < vr_list.length; i++) {
        list.push(vr_list[i])
      }
      this.setVRList(list)
    })
  },
  mounted () {
      const vm = this
      $(document).ready(function () {
        $('.ui.segment.portfolio .container')
          .visibility({
            once: false,
            observeChanges: true,
            continuous: true,
            onBottomVisible: function(calculations) {
              const page = vm.page + 1
              const size = vm.size
              portfolio.getVRList(page, size).then(res => {
                const vr_list = res.data.data
                const list = []
                for (var i = 0; i < vr_list.length; i++) {
                  list.push(vr_list[i])
                }
                vm.pushVRList(list).then( res => {
                    vm.setPage(page)
                })
              })
            }
          })
        ;
      })


  }

}
</script>

<style lang="sass">
  .ui.segment.portfolio
    background-color: #e1f5fe
    border-bottom: none
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
  .ui.author.grid
    padding: 0 .625rem 0 1rem
  .ui.author.grid .column
    padding: 0rem 0 1rem 0
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
