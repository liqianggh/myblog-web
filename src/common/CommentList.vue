<template>
  <main class="r_box">
    <div class="about">
  <div class="news_pl">
    <h2>文章评论</h2>
    <div class="gbko">
      <!--<script src="/e/pl/more/?classid=77&amp;id=106&amp;num=20"></script>-->
      <div class="fb">
        <ul>
          <p class="fbtime"><span>2018-07-24 11:52:38</span>dancesmile</p>
          <p class="fbinfo">这才是我要的朋友圈</p>
        </ul>
      </div>
      <div class="fb">
        <ul>
          <p class="fbtime"><span>2018-07-24 08:52:48</span> 卜野</p>
          <p class="fbinfo"></p>
          <div class="ecomment"><span class="ecommentauthor">网友 家蚂蚁 的原文：</span>
            <p class="ecommenttext">坚持哟!看你每天都有写，请继续加油，再接再厉哦</p>
          </div>
        </ul>
      </div>

      <!--<script>-->
        <!--function CheckPl(obj)-->
        <!--{-->
          <!--if(obj.saytext.value=="")-->
          <!--{-->
            <!--alert("您没什么话要说吗？");-->
            <!--obj.saytext.focus();-->
            <!--return false;-->
          <!--}-->
          <!--return true;-->
        <!--}-->
      <!--</script>-->
      <form action="/e/pl/doaction.php" method="post" name="saypl" id="saypl" onsubmit="return CheckPl(document.saypl)">
        <div id="plpost">
          <p class="saying"><span><a href="/e/pl/?classid=77&amp;id=106">共有
            <!--<script type="text/javascript" src="/e/public/ViewClick/?classid=77&amp;id=106&amp;down=2"></script>-->
            2条评论</a></span>来说两句吧...</p>
          <p class="yname"><span>用户名:</span>
            <input name="username" type="text" class="inputText" id="username" value="" size="16">
          </p>
          <p class="yzm"><span>验证码:</span>
            <input name="key" type="text" class="inputText" size="16">
          </p>
          <input name="nomember" type="hidden" id="nomember" value="1" checked="checked">
          <textarea name="saytext" rows="6" id="saytext"></textarea>
          <input name="imageField" type="submit" value="提交">
          <input name="id" type="hidden" id="id" value="106">
          <input name="classid" type="hidden" id="classid" value="77">
          <input name="enews" type="hidden" id="enews" value="AddPl">
          <input name="repid" type="hidden" id="repid" value="0">
          <input type="hidden" name="ecmsfrom" value="/joke/talk/2018-07-23/106.html">
        </div>
      </form>
    </div>
  </div>
    </div>
  </main>
 </template>

<script>
export default {
  name: 'CommentInput'
}
</script>

<style lang='stylus' scoped>

</style>
