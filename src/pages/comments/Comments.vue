<template>
  <div>
    <header-menus></header-menus>
    <article>
      <blog-left></blog-left>
      <main>
         <comment-list></comment-list>
      </main>
    </article>
  </div>
</template>

<script>
import HeaderMenus from 'common/HeaderMenus'
import BlogLeft from 'common/BlogLeft'
import CopyRight from 'common/CopyRight'
import CommentList from 'common/CommentList'

export default {
  name: 'Comment',
  components: {
    HeaderMenus,
    BlogLeft,
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
