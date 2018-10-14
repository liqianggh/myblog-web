<template>
  <el-row :gutter="0">
    <el-col :span="1" :offset="0">
      <div class="grid-content bg-purple">
        <i class="el-icon-bell"></i>
        <span class="main-header-message">
          目前是v1.0t版本 更多功能正逐步实现中...站长qq562839809 本站源码https//github.com/liqianggh/blog
        </span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style lang='stylus' scoped>
  .el-row
    border solid #f00 1px
    width 20rem
    margin-left 0
    margin-right 0
    margin 0 auto
    width 23.5rem
    max-width 23.5rem
    min-width 15rem
    &last-child
      margin-bottom 0
  .el-col
    border-radius 4px
    height .78rem
    line-height .78rem
    background-color #fff
    width 100%
    text-align left
    padding-left .05rem
    .el-icon-bell
      font-size .4rem
      color red
    .main-header-message
      padding-left 0.2rem
      font-size 0.32rem
      font-weight bold

</style>
