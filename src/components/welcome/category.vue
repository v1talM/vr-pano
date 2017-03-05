<template lang="html">
<div class="ui segment category">
  <div class="ui secondary container menu grid">
    <a class="item four wide mobile one wide computer column"><i class="calendar icon"></i>Date</a>
    <a class="item four wide mobile one wide computer column"><i class="unhide icon"></i>View</a>
    <a class="item four wide mobile one wide computer column"><i class="heartbeat icon"></i>Favorite</a>
    <a class="item four wide mobile one wide computer column"><i class="paint brush icon"></i>Popular</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="sass">
  .ui.segment.category
    border: none
    margin-top: 0
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16), 0px 1px 3px 0px rgba(0, 0, 0, 0.23)
    border-radius: 0
    padding-top: .3125rem
    padding-bottom: .3125rem
    color: #546e7a
  .ui.segment.category .ui.secondary.menu a.item
    color: inherit
  .ui.segment.category .ui.secondary.menu a.item:hover
    background: none
  @media screen and (max-width: 44rem)
    .ui.segment.category .ui.secondary.menu a.item
      margin: 0
</style>
