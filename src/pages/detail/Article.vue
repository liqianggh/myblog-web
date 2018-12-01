<template>
  <div>
    <header-menus></header-menus>
    <article>
      <blog-left></blog-left>
      <main>
        <article-info></article-info>
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
import ArticleInfo from './ArticleInfo'

export default {
  name: 'Comment',
  components: {
    HeaderMenus,
    BlogLeft,
    CommentList,
    CopyRight,
    ArticleInfo
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
