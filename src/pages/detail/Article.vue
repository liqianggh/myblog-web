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
      articleData: null,
      id: 0
    }
  },
  mounted () {
    let idParam = this.$route.params.id
    this.id = Number.parseInt(idParam)
    this.initData(this.id)
    // this.articleData = this.id
  },
  watch: {
    $route (to, from) {
      let id = this.$route.params.id
      this.initData(id)
    }
  },
  methods: {
    initData (id) {
      axios.get('api/blogs/' + id).then(result => {
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
