<template>
  <div>
    <div>
      <el-container class="blog-container">
        <el-header class="blog-title">
          <div class="blog-title-category">ahahha 分类</div>
          <i class="el-icon-caret-right"></i>
          <span class="blog-title-content">选择合适的数据结构</span>
        </el-header>
        <el-container>
          <el-aside class="blog-icon">
            <img class="blog-icon-img" src="../../static/data/test1.png" alt="">
          </el-aside>
          <el-main class="blog-abstract">
            <div class="blog-abstract-content">
              **为什么要用单例模式？** 在开发过程中，根据需求的不同，有时可能要求对象实例只能有一个，这时就要使用到了单例模式。 如：Spring中的bean默认使用的都是单例模式。 **什么是单例模式？** 确保对象只有一个，并提供一个...
            </div>
            <div class="blog-abstract-footer">
              <span class="blog-abstract-footer-date"><i class="iconfont icon-shijian-riqi"></i>12月前 (2018-12-12)</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-yuedu">230</i>浏览</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-pinglun1">1234</i>评论</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-dianzan1">999</i>点赞</span>
            </div>
          </el-main>
        </el-container>
      </el-container>

      <el-container class="blog-container">
        <el-header class="blog-title">
          <div class="blog-title-category">ahahha 分类</div>
          <i class="el-icon-caret-right"></i>
          <span class="blog-title-content">选择合适的数据结构</span>
        </el-header>
        <el-container>
          <el-aside class="blog-icon">
            <img class="blog-icon-img" src="../../static/data/test1.png" alt="">
          </el-aside>
          <el-main class="blog-abstract">
            <div class="blog-abstract-content">
              **为什么要用单例模式？** 在开发过程中，根据需求的不同，有时可能要求对象实例只能有一个，这时就要使用到了单例模式。 如：Spring中的bean默认使用的都是单例模式。 **什么是单例模式？** 确保对象只有一个，并提供一个...
            </div>
            <div class="blog-abstract-footer">
              <span class="blog-abstract-footer-date"><i class="iconfont icon-shijian-riqi"></i>12月前 (2018-12-12)</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-yuedu">230</i>浏览</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-pinglun1">1234</i>评论</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-dianzan1">999</i>点赞</span>
            </div>
          </el-main>
        </el-container>
      </el-container>

      <el-container class="blog-container">
        <el-header class="blog-title">
          <div class="blog-title-category">ahahha 分类</div>
          <i class="el-icon-caret-right"></i>
          <span class="blog-title-content">选择合适的数据结构</span>
        </el-header>
        <el-container>
          <el-aside class="blog-icon">
            <img class="blog-icon-img" src="../../static/data/test1.png" alt="">
          </el-aside>
          <el-main class="blog-abstract">
            <div class="blog-abstract-content">
              **为什么要用单例模式？** 在开发过程中，根据需求的不同，有时可能要求对象实例只能有一个，这时就要使用到了单例模式。 如：Spring中的bean默认使用的都是单例模式。 **什么是单例模式？** 确保对象只有一个，并提供一个...
            </div>
            <div class="blog-abstract-footer">
              <span class="blog-abstract-footer-date"><i class="iconfont icon-shijian-riqi"></i>12月前 (2018-12-12)</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-yuedu">230</i>浏览</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-pinglun1">1234</i>评论</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-dianzan1">999</i>点赞</span>
            </div>
          </el-main>
        </el-container>
      </el-container>

      <el-container class="blog-container">
        <el-header class="blog-title">
          <div class="blog-title-category">ahahha 分类</div>
          <i class="el-icon-caret-right"></i>
          <span class="blog-title-content">选择合适的数据结构</span>
        </el-header>
        <el-container>
          <el-aside class="blog-icon">
            <img class="blog-icon-img" src="../../static/data/test1.png" alt="">
          </el-aside>
          <el-main class="blog-abstract">
            <div class="blog-abstract-content">
              **为什么要用单例模式？** 在开发过程中，根据需求的不同，有时可能要求对象实例只能有一个，这时就要使用到了单例模式。 如：Spring中的bean默认使用的都是单例模式。 **什么是单例模式？** 确保对象只有一个，并提供一个...
            </div>
            <div class="blog-abstract-footer">
              <span class="blog-abstract-footer-date"><i class="iconfont icon-shijian-riqi"></i>12月前 (2018-12-12)</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-yuedu">230</i>浏览</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-pinglun1">1234</i>评论</span>
              <span class="blog-abstract-footer-other"><i class="iconfont icon-dianzan1">999</i>点赞</span>
            </div>
          </el-main>
        </el-container>
       </el-container>
    </div>
    <div class="pagination-container">
      <pagination-normal></pagination-normal>
    </div>
  </div>
</template>

<script>
import PaginationNormal from './PaginationNormal.vue'
export default {
  name: 'ListItem',
  components: {
    PaginationNormal
  }
}
</script>
<style lang='stylus' scoped>
  @import "~styles/variables.styl"
  .iconfont
    font-size .28rem
  .el-header
    padding 0 .02rem
  .el-main
    padding .1rem .1rem
  .el-aside
    width auto;
  .el-container
    height .33rem
  .blog-container
    /*border solid red 1px*/
    padding-left .22rem
    height 4.24rem
    margin-bottom: .13rem;
    background-color #ffffff
    .blog-title
      position relative
      height .9rem !important
      text-align left
      line-height .9rem
      .blog-title-category
        display inline-block
        border-radius .06rem
        color: #ffffff
        background-color $iconRedColor
        marigin 0
        padding 0
        width auto
        line-height 0.5rem;
        height: 0.5rem;
      .el-icon-caret-right
        position relative
        font-size 0.38rem
        color: $iconRedColor
        white-space: nowrap
        text-align left
        left -0.23rem
      .blog-title-content
        text-decoration none
        font-size .4rem
        color: $commonGreenColor
        margin-left: -.16rem;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    .blog-icon
      /*border solid green 1px*/
      width auto !important
      height 3.24rem !important
      .blog-icon-img
        width: 4rem;
        height: 3rem;
  .blog-abstract
    color: $darkTextColor
    /*border solid yellowgreen 1px*/
    height 3.24rem !important
    .blog-abstract-content
      /*border solid green 1px*/
      height 2.3rem
      white-space normal;
      word-break break-all;
      word-wrap break-word;
      line-height .6rem;
      text-align left
      font-size: .3rem;
      padding: .1rem .1rem 0 .2rem;
     .blog-abstract-footer
       text-align: right;
       padding-right: .1rem
       height .64rem
       line-height .64rem
       /*border solid red .01rem*/
      .blog-abstract-footer-other
        display inline-block
        width 1.87rem
        text-align left
      .blog-abstract-footer-date
        display: inline-block;
        width: 3.1rem;
        text-align left
      .iconfont
        margin 0 .1rem
   .pagination-container
      height 1rem !important
</style>
