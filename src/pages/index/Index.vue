<template>
  <el-container>
    <!--网页头部导航栏-->
    <el-header>
      <header-menus></header-menus>
    </el-header>
    <el-main>
      <main-header></main-header>
      <main-left></main-left>
    </el-main>
    <el-footer>
      <copy-right></copy-right>
    </el-footer>
  </el-container>
</template>

<script>
import HeaderMenus from 'common/HeaderMenus'
import MainHeader from './components/MainHeader'
import MainLeft from './components/MainLeft'
import CopyRight from 'common/CopyRight'
export default {
  name: 'Index',
  components: {
    HeaderMenus,
    MainHeader,
    MainLeft,
    CopyRight
  },
  data () {
    return {
      msg: 'Welcome!'
    }
  }
}
</script>
<style lang='stylus' scoped>
  @import '~styles/variables.styl'
  .el-header, .el-footer
    color #333
    text-align center
    line-height $headerHeight
    height $headerHeight
    padding 0 0
    font-family "Microsoft YaHei","微软雅黑",Arial,sans-serif
  .el-aside
    background-color #D3DCE6
    color #333
    text-align center
    line-height 200px
  .el-main
    background-color #E9EEF3
    color #333
    text-align center
    line-height 160px
    padding 0
</style>
