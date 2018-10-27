<template>
       <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 20, 40,100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
 </template>
<script>
export default {
  name: 'Pagination',
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .el-pager li.active {
    color: $commonGreenColor !important
    cursor: default;
  }
</style>
