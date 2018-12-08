<template>
  <div>
    <header-menus></header-menus>
    <article>
      <left-side></left-side>
      <main>
        <article-info :id="id" :articleData="articleData"></article-info>
      </main>
    </article>
  </div>
</template>

<script>
import HeaderMenus from 'common/HeaderMenus'
import CopyRight from 'common/CopyRight'
import ArticleInfo from './ArticleInfo'
import axios from 'Axios'
import LeftSide from 'common/LeftSide'
export default {
  name: 'Comment',
  components: {
    LeftSide,
    HeaderMenus,
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
        }
      })
    }
  }
}
</script>
<style lang='stylus'>
</style>
