<template>
  <div>
    <el-row :gutter="0">
      <el-container>
        <el-aside class="left-aside" style="width: 16.5rem;">Aside</el-aside>
        <el-main>Main</el-main>
        </el-container>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MainLeft'
}
</script>

<style lang='stylus' scoped>
  .el-row
    border solid #f00 1px
    width 23.5rem
    min-height 18rem
    max-width 23.5rem
    min-width 15rem
    margin 0 auto
    &last-child
      margin-bottom 0
    el-row el-container el-aside
      border solid red 1px
      min-height 18rem
      width 16.5rem
    .el-main
      border solid green 1px
      min-height 18rem

</style>
