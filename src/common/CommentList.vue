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
      <div v-for="(item, index) in commentsPageInfo.list" :key="item.email + index">
        <div class="fb">
          <ul>
            <p class="fbtime"><span>{{item.createTime}}</span>{{item.userName}}</p>
            <p class="fbinfo">{{item.content}}</p>
            <div class="fblike"><i>点赞</i> ({{item.likeCount}})</div>
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
      <form action="/e/pl/doaction.php" method="post" name="saypl" id="saypl" onsubmit="return CheckPl(document.saypl)">
        <div id="plpost">
          <p class="saying">
            <span><a href="#">
              共有{{commentsPageInfo.total}}条评论</a>
          </span>来说两句吧...</p>

          <p class="yname"><span>您的邮箱:</span>
            <input v-model="comment.email" name="username" type="text" class="inputText" id="username" value="" size="16"> <pan>*</pan>
          </p>
          <p class="yzm"><span>您的名字:</span>
            <input v-model="comment.username" name="key" placeholder="首次评论需要输入..." type="text" class="inputText" size="16">
          </p>
          <input name="nomember" type="hidden" id="nomember" value="1" checked="checked">
          <div>留言内容</div>
          <textarea v-model="comment.content" placeholder="来了就说两句吧..." name="saytext" rows="6" id="saytext"></textarea>
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
    let id = this.$route.params.id
    let pageSize = this.$route.query.pageSize
    let pageNum = this.$route.query.pageNum
    let sessionId = this.$route.query.sessionId
    this.getCommentsList(id, pageNum, pageSize, sessionId);
  },
  methods: {
    getCommentsList (targetId, pageNum, pageSize, sessionId) {
      var url = 'http://localhost:8088/comments/'
      if (targetId) {
        url += targetId
      } else {
        url += 1
      }
      axios.get(url, {
        params: {
          pageNum: pageNum,
          pageSize: pageSize,
          sessionId: sessionId
        }
      }).then(result => {
        var pageInfo = result.data.data
        if (pageInfo) {
          this.commentsPageInfo.list = pageInfo.list
          this.commentsPageInfo.total = pageInfo.total
        }
        console.log(this.commentsPageInfo)
      })
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
