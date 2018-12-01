<template>
  <div class="gbook">
    <h2>留言板</h2>
    <div class="gbko">
      <!--<script src="/e/pl/more/?classid=77&amp;id=106&amp;num=20"></script>-->
      <!--<div class="fb">-->
        <!--<ul>-->
          <!--<p class="fbtime"><span>2018-07-24 11:52:38</span>秋刀鱼</p>-->
          <!--<p class="fbinfo">这才是我要的朋友圈</p>-->
          <!--<div class="fblike"><i>点赞</i> (23)</div>-->
        <!--</ul>-->
      <!--</div>-->
      <!--<div class="hf">-->
        <!--<ul>-->
          <!--<p class="zzhf"><font color="#FF0000">站长回复:</font>嗯，我也是自制力有限，删除头条就是矫枉过正而已，这个因人而异，不强求他人，也不想标题党。</p>-->
        <!--</ul>-->
      <!--</div>-->
      <div >
        <div v-for="(item, index) in commentsPageInfo.list" :key="item.email + index" class="fb">
          <ul>
            <p class="fbtime"><span>{{item.createTime}}</span>{{item.userName}}</p>
            <p class="fbinfo">{{item.content}}</p>
            <a href="#"><div class="fblike" @click="vote(item)"><i>点赞</i> ({{item.likeCount}})</div></a>
          </ul>
        </div>
      </div>
      <!--<div class="fb">-->
        <!--<ul>-->
          <!--<p class="fbtime"><span>2018-07-24 08:52:48</span> 卜野</p>-->
          <!--<p class="fbinfo"></p>-->
          <!--<div class="ecomment"><span class="ecommentauthor">网友 家蚂蚁 的原文：</span>-->
            <!--<p class="ecommenttext">坚持哟!看你每天都有写，请继续加油，再接再厉哦</p>-->
          <!--</div>-->
        <!--</ul>-->
      <!--</div>-->
      <form v-on:submit.prevent="addComment" method="post" name="saypl" id="saypl" >
        <div id="plpost">
          <p class="saying">
            <span><a href="#">
              共有{{commentsPageInfo.total}}条评论</a>
          </span>来说两句吧...</p>

          <p class="yname"><span>您的邮箱:</span>
            <input v-model="comment.email" name="username" type="text" class="inputText" placeholder="必填" id="username" value="" size="16"><pan ref="emailInput" class="error-message">邮箱不能为空</pan>
          </p>
          <p class="yzm"><span>您的名字:</span>
            <input v-model="comment.username" name="key" placeholder="首次评论需要输入..." type="text" class="inputText" size="16"><pan ref="usernameInput" class="error-message">请输入昵称(1-12位)</pan>
          </p>
          <input name="nomember" type="hidden" id="nomember" value="1" checked="checked">
          <div>留言内容</div>
          <textarea v-model="comment.content" placeholder="来了就说两句吧..." name="saytext" rows="6" id="saytext"></textarea><pan ref="contentInput" class="error-message">内容不能为空(1-500位)</pan>
          <input name="imageField" type="submit" value="提交">
          <!--<input name="id" type="hidden" id="id" value="106">-->
          <!--<input name="classid" type="hidden" id="classid" value="77">-->
          <!--<input name="enews" type="hidden" id="enews" value="AddPl">-->
          <!--<input name="repid" type="hidden" id="repid" value="0">-->
          <!--<input type="hidden" name="ecmsfrom" value="/joke/talk/2018-07-23/106.html">-->
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
      var url = 'http://localhost:8088/comments/'
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
      axios.put('http://localhost:8088/comments/like/' + item.id).then(result => {
      // axios.put('/api/comments/like/' + item.id).then(result => {
        if (result.data.status === 1000) {
          alert('点赞成功!')
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
  .error-message
    display none
    color red
    padding-left 5px
  .show
    display inline-block
</style>
