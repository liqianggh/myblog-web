<template>
     <div class="infosbox">
      <div class="newsview">
        <h3 class="news_title">{{articleData.title}}</h3>
        <div class="bloginfo">
          <ul>
            <li class="author">作者：<a href="#">Jann</a></li>
            <li class="lmname"><a href="/">{{articleData.categoryName}}</a></li>
            <li class="timer">时间：{{articleData.createTime}} ({{articleData.calcTime}})</li>
            <li class="view">{{articleData.viewCount}}人已阅读</li>
          </ul>
        </div>
        <div class="tags"><a v-for="(item, index) in articleData.tagList" :key="index" href="/" target="_blank">{{item.tagName}}</a></div>
        <!--<div class="news_about"><strong>简介</strong>个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。</div>-->
        <div class="news_con">
          {{articleData.content}}
        </div>
      </div>
      <div class="share">
        <p class="diggit"><button class="dianzan diggit" v-on:click="voteArticle(articleData.id)"> 很赞哦！({{articleData.likeCount}})</button></p>
      </div>
      <div class="nextinfo">
        <p>上一篇：<router-link tag="a" :to="'/blog/detail/'+articleData.last.id">{{articleData.last.title}}</router-link></p>
        <p>下一篇：<router-link tag="a" :to="'/blog/detail/'+articleData.next.id">{{articleData.next.title}}</router-link></p>
      </div>
       <comment-list :targetId="id" :pageSize="pageSize" :pageNum="pageNum" :sessionId="sessionId"></comment-list>
  </div>
</template>

<script>
import CommentList from 'common/CommentList'
import axios from 'Axios'
export default {
  name: 'ArticleInfo',
  props: {
    articleData: {},
    id: {
      type: Number
    }
  },
  data () {
    return {
      pageNum: 1,
      pageSize: 100,
      sessionId: null
    }
  },
  components: {
    CommentList
  },
  mounted () {
  },
  watch: {
    $route (to, from) {
      let id = this.$route.params.id
      this.initData(id)
    }
  },
  methods: {
    voteArticle (id) {
      axios.put('http://localhost:8088/blogs/count/' + id + '?type=like').then(result => {
        if (result.data.status === 1000) {
          this.articleData.likeCount = this.articleData.likeCount + 1
        }
      })
    },
    initData (id) {
      axios.get('/api/blogs/' + id).then(result => {
        if (result) {
          this.articleData = result.data.data
        }
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
  .dianzan{
    background-color #E2523A
    border none
    cursor pointer
    width 160px
    height 40px
  }
</style>
