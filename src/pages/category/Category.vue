<template>
  <!--网页头部导航栏-->
  <div>
    <header-menus @changeMenus="changeMenus" ref="header_child"></header-menus>
    <article>
        <blog-left></blog-left>
        <!--<component :blogResult="blogResult" ref="main_component" v-bind:is="currentTabComponent"></component>-->
       <article-list :categoryId="category" :blogResult="blogResult"></article-list>
    </article>
    <copy-right  :blogResult="blogResult" ref="copy_right"></copy-right>
  </div>
</template>

<script>
import HeaderMenus from 'common/HeaderMenus'
import BlogLeft from 'common/BlogLeft'
import CopyRight from 'common/CopyRight'
import CommentList from 'common/CommentList'
import ArticleList from '../../common/ArticleList'
import axios from 'Axios'
export default {
  name: 'Comment',
  components: {
    HeaderMenus,
    BlogLeft,
    CommentList,
    CopyRight,
    ArticleList
  },
  data () {
    return {
      blogResult: [],
      category: null
    }
  },
  mounted () {
    let id = this.$route.params.id
    this.getArticleListByCategoryId(id)
  },
  methods: {
    getArticleListByCategoryId (id) {
      if (id === null || id < 0) {
        alert('参数错误!')
        return
      }
      var url = 'http://localhost:8088/blogs'
      if (id > 0) {
        url += ('?categoryId=' + id)
      }
      axios.get(url).then(result => {
        this.blogResult = result.data.data
        this.category = id
      })
    }
  }
}
</script>
<style lang='stylus'>
</style>
