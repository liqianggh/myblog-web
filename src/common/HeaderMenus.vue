<template>
  <el-menu
    :default-active="activeIndex"
    class="header-menus"
    mode="horizontal"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'HeaderMenus',
  data () {
    return {
      activeIndex: '4'
    }
  }
}
</script>

<style lang='stylus' scoped>
  .header-menus
    background url(http://p34qzbztu.bkt.clouddn.com/images/temp1.png)
    position relative
    height 52px
    width 100%
 </style>
