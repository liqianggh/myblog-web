<template>
  <div>
    <header-menus></header-menus>
    <article>
      <blog-left></blog-left>
      <main>
        <article-info :id="id" :articleData="articleData"></article-info>
      </main>
    </article>
  </div>
</template>

<script>
import HeaderMenus from 'common/HeaderMenus'
import BlogLeft from 'common/BlogLeft'
import CopyRight from 'common/CopyRight'
import ArticleInfo from './ArticleInfo'
import axios from 'Axios'
export default {
  name: 'Comment',
  components: {
    HeaderMenus,
    BlogLeft,
    CopyRight,
    ArticleInfo
  },
  data () {
    return {
      articleData: null
    }
  },
  mounted () {
    let idParam = this.$route.params.id
    this.id = idParam
    this.initData(this.id)
    // this.articleData = this.id
  },
  updated () {
    let idParam = this.$route.params.id
    if (this.id !== idParam) {
      this.initData(this.id)
    }
  },
  methods: {
    initData (id) {
      axios.get('http://localhost:8088/blogs/' + id).then(result => {
        if (result) {
          this.articleData = result.data.data
          console.log(this.articleData)
        }
      })
    }
  }
}
</script>
<style lang='stylus'>
</style>
