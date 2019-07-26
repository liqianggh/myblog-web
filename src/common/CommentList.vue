<template>
  <div class="gbook">
    <h2>留言板</h2>
    <div class="gbko">
      <div>
        <div  v-for="(item, index) in commentsPageInfoData.list" :key="item.user_email + index" >
          <div class="fb">
            <ul>
              <p class="fbtime"><span>{{item.create_time}}</span>{{item.user_name}}</p>
              <p class="fbinfo">{{item.content}}</p>
              <a href="#">
                <div class="fblike" @click="vote(item)"><strong class="like">点赞 ({{item.like_count}})</strong></div>
              </a>
            </ul>
          </div>
          <div class="hf" v-if="item.children_comments !=null && item.children_comments.length > 0">
            <ul v-for=" child_comment in item.children_comments">
              <p class="zzhf"><font color="#FF0000">{{child_comment.user_name}}:</font>{{child_comment.content}}</p>
            </ul>
          </div>
        </div>
        <a href="#"><div style="text-align: center"  v-if="commentsPageInfoData.has_next_page"  @click="goToPage()">查看更多</div></a>
      </div>
      <form v-on:submit.prevent="addComment" method="post" name="saypl" id="saypl">
        <div id="plpost">
          <p class="saying">
            <span><a href="#">
              共有{{commentsPageInfoData.total}}条评论</a>
          </span>来说两句吧...</p>

          <p class="yname"><span>您的邮箱:</span>
            <input v-model="commentAddParam.user_email" name="username" type="text" class="inputText" placeholder="必填"
                   id="username" value="" size="16"><span ref="emailInput" class="error-message">邮箱不能为空</span>
          </p>
          <p class="yzm"><span>您的名字:</span>
            <input v-model="commentAddParam.user_name" name="key" placeholder="首次评论需要输入..." type="text"
                   class="inputText" size="16"><span ref="usernameInput" class="error-message">请输入昵称(1-12位)</span>
          </p>
          <input name="nomember" type="hidden" id="nomember" value="1" checked="checked">
          <div>留言内容</div>
          <textarea v-model="commentAddParam.content" placeholder="来了就说两句吧..." name="saytext" rows="6"
                    id="saytext"></textarea><span ref="contentInput" class="error-message">内容不能为空(1-500位)</span>
          <input name="imageField" type="submit" value="提交">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'Axios'
  import * as arrayObject from "friendly-errors-webpack-plugin/src/utils";

  export default {
    name: 'CommentInput',
    props: {
      commentsPageInfoData: {
        type: Object,
      },
      targetId: {
        type: Number,
        defaultValue: 0
      },
      targetType: {
        type: String,
      }
    },
    data() {
      return {
        commentAddParam: {
          user_email: null,
          user_name: null,
          content: null,
          target_id: 0,
          target_type: null
        },
        page_size: 10,
        page_num: 1,
        target_id: null,
        target_type: null
      }
    },
    mounted() {
      if (JSON.stringify(this.commentsPageInfoData)) {
        let id = this.$route.params.id
        this.target_type = this.targetType
        this.target_id = this.targetId
        let pageSize = this.$route.query.page_size
        let pageNum = this.$route.query.page_num
        let targetType = this.$route.query.target_type
        this.getCommentsList(id, pageNum, pageSize, targetType)
      }
     },
    methods: {
      getCommentsList() {
        var url = 'api/comments/'
        url += this.targetId
        axios.get(url, {
          params: {
            pageNum: this.page_num,
            page_size: this.page_size,
            targetType: this.targetType
          }
        }).then(result => {
          console.log(result)
          var pageInfo = result.data.data
          if (pageInfo) {
            this.commentsPageInfoData.list = pageInfo.list
            this.commentsPageInfoData.total = pageInfo.total
            this.commentsPageInfoData.page_nux = pageInfo.page_num
            this.commentsPageInfoData.has_next_page = pageInfo.has_next_page
          }
        })
      },
      vote(item) {
        axios.put('/api/comments/like/' + item.id).then(result => {
          if (result.data.status === 1000) {
            item.like_count = item.like_count + 1
          }
        })
      },
      addComment() {
        this.commentAddParam.target_id = this.targetId
        this.commentAddParam.target_type = this.targetType
        if (this.target_id) {
          this.commentAddParam.target_id = this.target_id
        }
        if (this.commentAddParam.user_email == null) {
          this.$refs.emailInput.classList.add('show')
        }
        if (this.commentAddParam.content == null) {
          this.$refs.contentInput.classList.add('show')
        }
        if (this.commentAddParam.target_type == null) {
          alert("Param error!")
        }
        axios.post('/api/comments', this.commentAddParam, {headers: {'Content-Type': 'application/json'}}).then(result => {
          if (result.data.status === 1000) {
            this.getCommentsList()
          } else if (result.data.status) {
            console.log(result)
          }
        })
      },
      goToPage () {
        var url = 'api/comments/'
        url += this.targetId
        axios.get(url, {
          params: {
            pageNum: this.page_num+1,
            page_size: this.page_size,
            targetType: this.targetType
          }
        }).then(result => {
          var pageInfo = result.data.data
          if (pageInfo) {
            if (pageInfo.list && pageInfo.list.length > 0) {
              this.commentsPageInfoData.list = arrayObject.concat(this.commentsPageInfoData.list, pageInfo.list)
              this.commentsPageInfoData.total = pageInfo.total
              this.commentsPageInfoData.has_next_page = pageInfo.has_next_page
              this.page_num = pageInfo.page_num + 1
            }
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
    padding: 10px
</style>
