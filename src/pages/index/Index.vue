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
    axios.get('http://123.206.88.191:8088/blogs/index').then(result => {
      this.blogResult = result.data.data.blogList
      this.sideInitData.categoryList = result.data.data.categoryList
      this.sideInitData.recommendList = result.data.data.recommendList
      this.sideInitData.tagList = result.data.data.tagList
      this.sideInitData.clickRankList = result.data.data.clickRankList
    })
  }
}
</script>
<style lang='stylus'>
</style>
