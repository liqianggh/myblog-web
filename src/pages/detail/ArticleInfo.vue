<template>
     <div class="infosbox">
      <div class="newsview">
        <h3 class="news_title">{{articleData.title}}</h3>
        <div class="bloginfo">
          <ul>
            <li class="author">作者：<a href="#">Jann</a></li>
            <li class="lmname"><a href="/">{{articleData.category_name}}</a></li>
            <li class="timer">时间：{{articleData.create_time}} ({{articleData.calc_time}})</li>
            <li class="view">{{articleData.view_count}}人阅读</li>
          </ul>
        </div>
        <div class="tags">
          <router-link tag="a"  v-for="(item, index) in articleData.tag_list" :key="index" :to="'/blogs/category/'+ item.id +'?type=2'" target="_self">{{item.tag_name}}</router-link>
        </div>
        <div class="news_about" v-html="articleData.summary"></div>
        <div class="news_con markdown-body" v-html="articleData.html_content">
        </div>
      </div>
      <div class="share">
        <p class="diggit"><button class="dianzan diggit" v-on:click="voteArticle(articleData.id)"> 很赞哦！({{articleData.like_count}})</button></p>
      </div>
      <div class="nextinfo">
        <p v-if="articleData.last != null">上一篇：<router-link tag="a" :to="'/blog/detail/'+articleData.last.id">{{articleData.last.title}}</router-link></p>
        <p v-if="articleData.next != null">下一篇：<router-link tag="a" :to="'/blog/detail/'+articleData.next.id">{{articleData.next.title}}</router-link></p>
      </div>
  </div>
</template>

<script>
import CommentList from 'common/CommentList'
import axios from 'Axios'
export default {
  name: 'ArticleInfo',
  props: {
    articleData: {
      type: Object
    },
    id: {
      type: Number
    }
  },
  data () {
    return {
      pageNum: 1,
      pageSize: 100,
      target_type: 'ARTICLE',
      blogDetail:{}
    }
  },
  components: {
    CommentList
  },
  mounted () {
  },
  methods: {
    voteArticle (id) {
      axios.put('/api/blogs/count/' + id + '?type=like').then(result => {
        if (result.data.status === 1000) {
          this.articleData.like_count = this.articleData.like_count + 1
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
  .markdown-body {color : #555}
  .news_title {
    font-size: 26px;
    font-weight: normal;
    padding: 18px 0;
    color: #333;
    text-align: center;
  }
</style>
