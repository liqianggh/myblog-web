<template>
  <div>
    <header-menus></header-menus>
    <article>
      <left-side></left-side>
      <main>
        <comment-list></comment-list>
      </main>
    </article>
  </div>
</template>

<script>
import HeaderMenus from 'common/HeaderMenus'
import LeftSide from 'common/LeftSide'
import CopyRight from 'common/CopyRight'
import CommentList from 'common/CommentList'

export default {
  name: 'Comment',
  components: {
    HeaderMenus,
    LeftSide,
    CommentList,
    CopyRight
  },
  data () {
    return {
      msg: 'Welcome!'
    }
  }
}
</script>
<style lang='stylus'>
</style>
