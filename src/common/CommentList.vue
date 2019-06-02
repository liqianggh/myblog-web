<template>
  <div class="gbook">
    <h2>留言板</h2>
    <div class="gbko">
      <div >
        <div v-for="(item, index) in commentsPageInfo.list" :key="item.email + index" class="fb">
          <ul>
            <p class="fbtime"><span>{{item.createTime}}</span>{{item.userName}}</p>
            <p class="fbinfo">{{item.content}}</p>
            <a href="#"><div class="fblike" @click="vote(item)"><strong class="like">点赞 ({{item.likeCount}})</strong></div></a>
          </ul>
        </div>
      </div>
      <form v-on:submit.prevent="addComment" method="post" name="saypl" id="saypl" >
        <div id="plpost">
          <p class="saying">
            <span><a href="#">
              共有{{commentsPageInfo.total}}条评论</a>
          </span>来说两句吧...</p>

          <p class="yname"><span>您的邮箱:</span>
            <input v-model="comment.email" name="username" type="text" class="inputText" placeholder="必填" id="username" value="" size="16"><span ref="emailInput" class="error-message">邮箱不能为空</span>
          </p>
          <p class="yzm"><span>您的名字:</span>
            <input v-model="comment.username" name="key" placeholder="首次评论需要输入..." type="text" class="inputText" size="16"><span ref="usernameInput" class="error-message">请输入昵称(1-12位)</span>
          </p>
          <input name="nomember" type="hidden" id="nomember" value="1" checked="checked">
          <div>留言内容</div>
          <textarea v-model="comment.content" placeholder="来了就说两句吧..." name="saytext" rows="6" id="saytext"></textarea><span ref="contentInput" class="error-message">内容不能为空(1-500位)</span>
          <input name="imageField" type="submit" value="提交">
        </div>
      </form>
    </div>
  </div>
 </template>

<script>
import axios from 'Axios'
export default {
  name: 'CommentInput',
  props: {
    commentsOfBlog: {
      type: Object,
      default: null
    },
    targetId: {
      type: Number,
      default: 0
    },
    pageNum: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    sessionId: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      comment: {
        email: null,
        username: null,
        content: null,
        targetId: 0
      },
      commentsPageInfo: {
        list: [],
        total: 0
      }
    }
  },
  mounted () {
    if (this.commentsOfBlog === null) {
      let id = this.$route.params.id
      let pageSize = this.$route.query.pageSize
      let pageNum = this.$route.query.pageNum
      let sessionId = this.$route.query.sessionId
      this.getCommentsList(id, pageNum, pageSize, sessionId)
    } else {
      this.commentsPageInfo = this.commentsOfBlog
    }
  },
  methods: {
    getCommentsList (targetId, pageNum, pageSize, sessionId) {
      var url = 'api/comments/'
      url += targetId
      console.log(targetId + ' ' + url)
      axios.get(url, {
        params: {
          pageNum: pageNum,
          pageSize: pageSize,
          sessionId: sessionId,
          targetId: targetId
        }
      }).then(result => {
        var pageInfo = result.data.data
        if (pageInfo) {
          this.commentsPageInfo.list = pageInfo.list
          this.commentsPageInfo.total = pageInfo.total
        }
      })
    },
    vote (item) {
      axios.put('/api/comments/like/' + item.id).then(result => {
        if (result.data.status === 1000) {
          item.likeCount = item.likeCount + 1
        }
      })
    },
    addComment () {
      if (this.targetId) {
        this.comment.targetId = this.targetId
      }
      if (this.comment.email == null) {
        this.$refs.emailInput.classList.add('show')
      }
      if (this.comment.content == null) {
        this.$refs.contentInput.classList.add('show')
      }
      axios.post('/api/comments', this.comment, {headers: {'Content-Type': 'application/json'}}).then(result => {
        if (result.data.status === 1000) {
          this.getCommentsList(this.targetId, this.pageNum, this.pageSize, null)
        } else if (result.data.status) {
          console.log(result)
        }
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
  .like
    color #FF464D
  .like:hover
    color #FF2D8C
  .error-message
    display none
    color red
    padding-left 5px
  .show
    display inline-block
  .gbook
    padding:10px
</style>
