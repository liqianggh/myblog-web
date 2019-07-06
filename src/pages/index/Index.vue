<template>
     <!--网页头部导航栏-->
    <div>
      <article>
        <left-side :sideInitDataParam="sideInitData"></left-side>
        <article-list :blogResult="blogResult" ></article-list>
      </article>
    </div>
</template>

<script>
import HeaderMenus from 'common/HeaderMenus'
import LeftSide from 'common/LeftSide'
import ArticleList from '../../common/ArticleList'
import CopyRight from 'common/CopyRight'
import axios from 'Axios'
export default {
  name: 'Index',
  components: {
    HeaderMenus,
    LeftSide,
    ArticleList,
    CopyRight
  },
  data () {
    return {
      msg: 'Welcome!',
      currentTabComponent: 'ArticleList',
      currentLeftComponent: 'LeftSide',
      newScrollPosition: 0,
      lastScrollPosition: 0,
      blogResult: {
        list: []
      },
      sideInitData: {
        recommendList: [],
        categoryList: [],
        clickRankList: [],
        tagList: []
      }
    }
  },
  mounted () {
    axios.get('api/blogs/index').then(result => {
      if (result.data.status === 1000) {
        this.blogResult = result.data.data.blog_list
        this.sideInitData.categoryList = result.data.data.category_list
        this.sideInitData.recommendList = result.data.data.recommend_list
        this.sideInitData.tagList = result.data.data.tagList
        this.sideInitData.clickRankList = result.data.data.click_rank_list
      } else {
        alert(result.data.msg)
      }
    })
  }
}
</script>
<style lang='stylus'>
</style>
