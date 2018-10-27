<template>
  <div class="el-menu-wrapper">
    <el-menu
      :default-active="activeIndex"
      class="header-menus"
      mode="horizontal"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item class="menu-item" index="1">首页</el-menu-item>
      <el-menu-item class="menu-item" index="2">技术分享</el-menu-item>
      <el-menu-item class="menu-item" index="3">生活笔记</el-menu-item>
      <el-menu-item class="menu-item" index="4">胡说八道</el-menu-item>
      <el-menu-item class="menu-item" index="5">我的书单</el-menu-item>
      <el-menu-item class="menu-item" index="6">资源分享</el-menu-item>
      <el-menu-item class="menu-item" index="7">留言板</el-menu-item>
      <el-menu-item class="menu-item" index="8">关于我</el-menu-item>
      <el-menu-item class="menu-item header-menus-search" index="9"  >
        <el-input
          placeholder="请输入内容"
          v-model="searchKeywords"
          clearable>
        </el-input>
        <i class="el-icon-search"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenus',
  data () {
    return {
      activeIndex: '4',
      searchKeywords: ''
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import "~styles/variables.styl"
  .el-menu-wrapper
    display block
    zoom 1
    max-width 39rem
    width 100%
     /*background: url(http://p34qzbztu.bkt.clouddn.com/images/temp1.png);*/
    background $bgColor
   .el-menu--horizontal>.el-menu-item
      float left
      height $headerHeight
      line-height $headerHeight
      margin 0 0;
      color #909399;
    .header-menus
      position: relative;
      left: 0;
      margin: 0 auto;
      display: flex;
      overflow: hidden
      height: 100%
      clear: both
      background-color: $bgColor !important;
      font-size: 1rem;
      max-width: 1180px;
      .menu-item
        font-size .35rem
      .el-menu-item.menu-item:hover
        background-color $menuHoverColor
     .el-menu-item.is-active
       background-color: $menuHoverColor !important
       border none
       font-size .35rem
    .header-menus-search
      padding-left: 1.423rem
    .header-menus-search:hover
      border none
      height $headerHeight
      background-color #25a4bb
    .header-menus-search.is-active
      border none
    .el-icon-search
      font-size 0.5rem
      font-weight bold
      color $menuColor
</style>
