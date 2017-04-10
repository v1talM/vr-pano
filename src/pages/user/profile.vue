<template lang="html">
  <div>
    <navbar></navbar>
    <jumbtron></jumbtron>
    <center-panel :count="count"></center-panel>
  </div>
</template>

<script>
import navbar from '@/components/header/op_navbar'
import jumbtron from '@/components/user/userJumbtron'
import centerPanel from '@/components/user/centerPanel'
import {mapActions} from 'vuex'
import swal from 'sweetalert2'
export default {
  components: {
    navbar, jumbtron, centerPanel
  },
  data () {
    return {
      count: 0
    }
  },
  created () {
    $(".user.jumbtron").visibility({
      once: false,
      onBottomPassedReverse: function () {
        $(".ui.fixed.menu").addClass('opbar')
      },
      onBottomPassed: function () {
        $(".opbar").removeClass('opbar')
      }
    })
    this.$store.dispatch('getUserDataById', this.$route.params.id).then( res => {
      if(res.data === ''){
        const vm = this
        swal({
          text: '无效的用户',
          type: 'error'
        })
      }else{
        this.count = res.data.products.length
        this.$store.dispatch('setUserData', res.data)
      }
    }).catch( err => {
      swal({
        text: '获取用户信息失败',
        type: 'error'
      })
    })
  },
}
</script>

<style lang="css">
</style>
