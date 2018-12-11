<template>
  <!--网页头部导航栏-->
  <div>
    <header-menus @changeMenus="changeMenus" ref="header_child"></header-menus>
    <article>
        <left-side></left-side>
        <!--<component :blogResult="blogResult" ref="main_component" v-bind:is="currentTabComponent"></component>-->
       <article-list :categoryId="category" :blogResult="blogResult"></article-list>
    </article>
    <copy-right  :blogResult="blogResult" ref="copy_right"></copy-right>
  </div>
</template>

<script>
import HeaderMenus from 'common/HeaderMenus'
import LeftSide from 'common/LeftSide'
import CopyRight from 'common/CopyRight'
import CommentList from 'common/CommentList'
import ArticleList from '../../common/ArticleList'
import axios from 'Axios'
export default {
  name: 'Comment',
  components: {
    HeaderMenus,
    LeftSide,
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
    let type = this.$route.query.type
    this.getArticleListByCategoryId(id, type)
  },
  watch: {
    $route (to, from) {
      let id = this.$route.params.id
      let type = this.$route.query.type
      this.getArticleListByCategoryId(id, type)
    }
  },
  methods: {
    getArticleListByCategoryId (id, type) {
      if (id === null || id < 0) {
        alert('参数错误!')
        return
      }
      var url = 'http://123.206.88.191:8088/blogs'
      if (type) {
        url += ('?tagId=' + id)
        url += '&type=2'
      } else {
        if (id !== '0') {
          url += ('?categoryId=' + id)
        }
      }
      axios.get(url).then(result => {
        this.blogResult = result.data.data
        this.category = id
        console.log(this.blogResult)
      })
    }
  }
}
</script>
<style lang='stylus'>
</style>
