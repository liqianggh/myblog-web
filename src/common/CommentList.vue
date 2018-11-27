<template>
  <div class="gbook">
    <h2>文章评论</h2>
    <div class="gbko">
      <!--<script src="/e/pl/more/?classid=77&amp;id=106&amp;num=20"></script>-->
      <div class="fb">
        <ul>
          <p class="fbtime"><span>2018-07-24 11:52:38</span>秋刀鱼</p>
          <p class="fbinfo">这才是我要的朋友圈</p>
          <div class="fblike"><i>点赞</i> (23)</div>
        </ul>
      </div>
      <div class="hf">
        <ul>
          <p class="zzhf"><font color="#FF0000">站长回复:</font>嗯，我也是自制力有限，删除头条就是矫枉过正而已，这个因人而异，不强求他人，也不想标题党。</p>
        </ul>
      </div>
      <div class="fb">
        <ul>
          <p class="fbtime"><span>2018-07-24 11:52:38</span>我又不乱来</p>
          <p class="fbinfo">期待下一次更新哦</p>
          <div class="fblike"><i>点赞</i> (23)</div>
        </ul>
      </div>
      <div class="fb">
        <ul>
          <p class="fbtime"><span>2018-07-24 11:52:38</span>hello</p>
          <p class="fbinfo">年轻的我总是爱惹是非，在每个人眼中，我早已注定成了一个不正的学生。大四了，感觉什么都没做好，被身边的朋友说笑，女朋友也没有。好不容易想去报一个java软件培训，却在钱的问题上踌躇不前。不想让父母知道，因为知道自己上的是本三，本来学费就贵。向亲人借钱，却被告知必须要父母同意才借。感觉自己已经长大，可在别人眼里，依旧是个孩子。也许，每个人都要为自己的年轻负责。在青姐博客下留言，偷偷地许几个愿望，难过时就前来看看。1，我要去筹钱，不犯法，不违背道德就好；2，我要学号java；3，我要找一个女朋友；4，我想和青姐分享我的小想法。期待，未来，能够遇见更好的自己。告诉所有，我不是一个坏孩子。</p>
          <div class="fblike"><i>点赞</i> (23)</div>
        </ul>
      </div>
      <div class="fb">
        <ul>
          <p class="fbtime"><span>2018-07-24 11:52:38</span>跟着感觉走</p>
          <p class="fbinfo">star了</p>
          <div class="fblike"><i>点赞</i> (23)</div>

        </ul>
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
              共有22条评论</a>
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
export default {
  name: 'CommentInput',
  data () {
    return {
      comment: {
        email: null,
        username: null,
        content: null,
        targetId: 0
      }
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
