<template lang="html">
  <div class="user panel" >
      <div class="ui grid container">
        <div class="ui user info fluid card">
          <div class="ui stackable grid">
            <div class="five wide column">
              <div class="ui items">
                <div class="item meta info">
                  <div class="ui tiny avatar image">
                    <img :src="url_root + user.avatar">
                  </div>
                  <div class="middle aligned content">
                    <div class="header">{{ user.name }}</div>
                    <div class="computer only">
                      <div class="meta">
                        <span class="price"><i class="weibo icon"></i> vital</span>
                      </div>
                      <div class="meta">
                        <span class="price"><i class="wechat icon"></i> rongyuxxx</span>
                      </div>
                      <div class="meta">
                        <span class="price"><i class="calendar icon"></i> 加入于 {{ user.created_at }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="eleven wide column">
              <div class="ui small statistics">
                <div class="statistic">
                  <div class="label">作品数 </div>
                  <div class="value">
                    {{ count }}
                  </div>
                </div>
                <div class="statistic">
                  <div class="label">关注者 </div>
                  <div class="value">
                    0
                  </div>
                </div>
                <div class="statistic">
                  <div class="label">喜欢 </div>
                  <div class="value">
                    12
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui user stackable center grid row">
          <div class="four wide column">
            <div class="ui detail fluid card">
              <div class="content">
                <div class="header"><i class="info icon"></i> 个人资料</div>
                <div class="description">
                  <p>いくつになったら、オレは、何かに伤ついたり、凹んだり、あがいたりしなくなるんだ。  </p>
                  <p>例え愿いが届けなかったとしても、别な小さな幸せが、どこかで待っててくれたりするんだろうか 。</p>
                </div>
                <div class="extra content">
                   <a href="#">修改资料</a>
                 </div>
              </div>
            </div>
            <div class="ui profiles fluid card computer only column">
              <div class="content">
                <div class="header"><i class="smile icon"></i> 关注者</div>
                <div class="ui followers list">
                  <div class="item">
                    <img class="ui avatar image" :src="require('@/assets/img/matt.jpg')">
                    <div class="content">
                      <a class="header">Rachel</a>
                      <div class="meta">Last seen watching  just now.</div>
                    </div>
                  </div>
                  <div class="item">
                    <img class="ui avatar image" :src="require('@/assets/img/matt.jpg')">
                    <div class="content">
                      <a class="header">Rachel</a>
                      <div class="meta">Last seen watching  just now.</div>
                    </div>
                  </div>
                  <div class="item">
                    <img class="ui avatar image" :src="require('@/assets/img/matt.jpg')">
                    <div class="content">
                      <a class="header">Rachel</a>
                      <div class="meta">Last seen watching  just now.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="eight wide column">
            <div class="ui fluid card" v-for="profile in productList">
              <div class="content">
                <img class="left floated avatar ui image" :src="url_root + user.avatar">
                <div class="header"><a href="#">{{ profile.pro_title }} </a></div>
                <div class="meta">{{ profile.created_at }} · {{ user.name }} </div>
              </div>
              <div class="image">
                <img :src="url_root + profile.pro_thumb">
              </div>
              <div class="footer content">
                <span class="right floated"> <i class="heart outline like icon"></i> 17 </span>
                <i class="comment icon"></i> 3
              </div>
              <div class="ui comments">
                <div class="comment">
                  <a class="avatar">
                    <img :src="require('@/assets/img/matt.jpg')">
                  </a>
                  <div class="content">
                    <a class="author">Ian Vital</a>
                    <div class="metadata">
                      <div class="date">2 天前</div>
                      <div class="rating"><i class="star icon"></i> 5 点赞 </div>
                    </div>
                    <div class="text">不要再逗留，人心太拥挤，被混乱的游戏或是真理的命运。</div>
                    <div class="actions">
                      <a class="reply"><i class="reply icon"></i>回 复</a>
                      <a class="remove"><i class="remove icon"></i>删 除</a>
                      <a class="hide"><i class="hide icon"></i>隐 藏</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="extra content">
                <div class="ui large transparent left icon input">
                  <i class="heart outline icon"></i>
                  <input type="text" placeholder="添加评论...">
                </div>
              </div>
            </div>
          </div>
          <div class="four wide column">
            <div class="ui actives card computer only column">
              <div class="content">
                <div class="header"> 作品墙</div>
                <div class="ui two column grid profile-list">
                  <div class="column">
                    <img class="ui image" :src="require('@/assets/img/green.png')">
                  </div>
                  <div class="column">
                    <img class="ui image" :src="require('@/assets/img/green.png')">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {url_root} from '@/env'
export default {
  data () {
    return {
      url_root: url_root
    }
  },
  props: ['count'],
  computed: mapState({
    user: state => state.user.user,
    productList () {
      return this.user.products
    }
  })
}
</script>
<style lang="sass">
  .user.panel
    background-color: #fbfcfd
    margin-top: -3.5rem
  .user.panel a
    color: #0097a7
  .user.panel .ui.user.info.card
    border-radius: .128571429rem
    padding: 1rem
    box-shadow: 0 1px 2px 0 rgba(0,0,0, .2),0 2px 2px 0 rgba(0,0,0, .2)
    margin-bottom: .5rem
  .user.panel .ui.items>.item>.content>.header
    color: #546e7a
  .user.panel .ui.items>.item .meta
    color: #879aa2
  .user.panel .ui.statistics>.statistic
    margin-bottom: 0
    padding: 0 1.5rem
  .user.panel .ui.statistics .statistic>.label
    margin-bottom: .75rem
    color: #546e7a
  .user.panel .ui.grid>.row
    width: calc(100% + 2rem) !important
  .user.center .ui.card
    border-radius: .128571429rem
    box-shadow:  0 1px 2px 0 rgba(0,0,0, .2),0 2px 2px 0 rgba(0,0,0, .2)
  .user.center .ui.card .header
    font-size: 1.28571429em
    color: #546e7a
    font-weight: 400
  .user.center .ui.card .content>.description
    color: #879aa2
    font-size: .75rem
    margin-top: .75rem
  .user.center .ui.card .footer.content
    border-bottom: 1px solid rgba(34,36,38,.1)
  .user.center .ui.card  .extra.content
    margin-top: .75rem
  .user.center .ui.card  .comments
    padding: 0 1rem
    font-size: .875rem
  .user.center .ui.card .followers >.item
    margin-bottom: .75rem
  .user.panel .ui.card.actives .profile-list
    margin-top: .75rem
  .user.panel .ui.card.actives .profile-list>.column
    padding: .5rem

  @media only screen and (max-width: 75rem)
    .user.panel
      margin-top: -4rem
    .user.info .item.meta.info
      margin: 0
    .user.info .item.meta.info .image
      display: inline-block
    .user.panel .ui.statistics > .statistic
      margin: 0 auto
    .user.center.grid.row
      padding: 1rem
    .user.center .ui.card
      margin-bottom: 0
</style>
