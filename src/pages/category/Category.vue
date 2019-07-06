<template>
  <!--网页头部导航栏-->
  <div>
    <article>
        <left-side></left-side>
       <article-list :categoryId="category" :blogResult="blogResult"></article-list>
    </article>
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
      blogResult: {},
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
      let type = this.$route.query.tag_type
      this.getArticleListByCategoryId(id, type)
    }
  },
  methods: {
    getArticleListByCategoryId (id, type) {
      if (id === null || id < 0) {
        alert('参数错误!')
        return
      }
      var url = 'api/blogs'
      if (type) {
        url += ('?tag_id=' + id)
        url += '&tag_type=2'
      } else {
        if (id !== '0') {
          url += ('?category_id=' + id)
        }
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
