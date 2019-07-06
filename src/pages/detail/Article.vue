<template>
  <div>
    <header-menus></header-menus>
    <article>
      <left-side></left-side>
      <main>
        <article-info :id="id" :articleData="articleData"></article-info>
        <comment-list :targetId="id"  :commentsPageInfoData ="commentsPageInfo"  :targetType="target_type"></comment-list>
      </main>
    </article>
  </div>
</template>

<script>
import HeaderMenus from 'common/HeaderMenus'
import CopyRight from 'common/CopyRight'
import ArticleInfo from './ArticleInfo'
import CommentList from 'common/CommentList'
import axios from 'Axios'
import LeftSide from 'common/LeftSide'
export default {
  name: 'Comment',
  components: {
    LeftSide,
    HeaderMenus,
    CopyRight,
    ArticleInfo,
    CommentList
  },
  data () {
    return {
      articleData: null,
      id: 0,
      target_type: 'ARTICLE',
      page_num: 1,
      pageSize: 100,
      commentsPageInfo: {
        list: [],
        total: 0
      },
    }
  },
  mounted () {
    let idParam = this.$route.params.id
    this.id = Number.parseInt(idParam)
    this.initData(this.id)
  },
  updated () {
  },
  methods: {
    initData (id) {
      axios.get('api/blogs/' + id).then(result => {
        if (result) {
          this.articleData = result.data.data
          this.getCommentsList();
        }
      })
    },
    getCommentsList() {
      var url = 'api/comments/'
      url += this.id
      axios.get(url, {
        params: {
          page_num: this.page_num,
          page_size: this.page_size,
          targetType: this.target_type
        }
      }).then(result => {
        var pageInfo = result.data.data
        if (pageInfo) {
          this.commentsPageInfo.list = pageInfo.list
          this.commentsPageInfo.total = pageInfo.total
        }
      })
    }
  }
}
</script>
<style lang='stylus'>
</style>
