<template>
  <el-container>
    <!--网页头部导航栏-->
    <el-header>
      <header-menus></header-menus>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import HeaderMenus from 'common/HeaderMenus'
export default {
  name: 'Index',
  components: {
    HeaderMenus
  },
  data () {
    return {
      msg: 'Welcome!'
    }
  }
}
</script>
<style lang='stylus' scoped>
  .el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  }

  .el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
  }

  .el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  }
</style>
