<template>
     <!--网页头部导航栏-->
    <div>
      <header-menus @changeMenus="changeMenus" ref="header_child"></header-menus>
      <article>
        <left-side :sideInitDataParam="sideInitData"></left-side>
        <article-list :blogResult="blogResult"></article-list>
      </article>
      <copy-right ref="copy_right"></copy-right>
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
      blogResult: null,
      sideInitData: {
        categoryList: null,
        recommendList: null
      }
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.throttle(this.handleScroll, 200))
    axios.get('http://localhost:8088/blogs/index').then(result => {
      this.blogResult = result.data.data.blogList
      this.sideInitData.categoryList = result.data.data.categoryList
      this.sideInitData.recommendList = result.data.data.recommendList
    })
  },
  destroyed () {
    // window.removeEventListener('scroll', this.throttle(this.handleScroll, 200))
  },
  methods: {
    dataInit () {
      axios.get('/api/').then(response => (this.index()))
    },
    handleScroll () {
      // var _lastScrollPosition = this.lastScrollPosition
      // var _newScrollPosition = this.newScrollPosition
      // _lastScrollPosition = window.scrollY
      // this.$refs.header_child.handleScroll(_newScrollPosition, _lastScrollPosition)
      // this.$refs.copy_right.handleCdTop(_lastScrollPosition)
      // // this.$refs.left_side.fixedPosition(_newScrollPosition, _lastScrollPosition)
      // this.newScrollPosition = _lastScrollPosition
    },
    changeMenus (data) {
      this.currentTabComponent = this.mainComponentArray[data]
      this.currentLeftComponent = 'LeftSide'
    },
    // 节流函数
    throttle (func, delay) {
      let timer = null
      let startTime = Date.now()

      return function () {
        let curTime = Date.now()
        let remaining = delay - (curTime - startTime)
        const context = this
        const args = arguments
        clearTimeout(timer)
        if (remaining <= 0) {
          func.apply(context, args)
          startTime = Date.now()
        } else {
          timer = setTimeout(func, remaining)
        }
      }
    }
  }
}
</script>
<style lang='stylus'>
</style>
