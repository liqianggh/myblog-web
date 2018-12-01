<template>
  <aside class="l_box">
    <div class="about_me">
      <h2>关于我</h2>
      <ul>
        <i><img src="../../static/images/4.jpg"></i>
        <p><b>李强</b>，一个不羁的码农。</p>
      </ul>
    </div>
    <div class="wdxc">
      <h2>我的相册</h2>
      <ul>
        <li><a href="/"><img src="../../static/images/7.jpg"></a></li>
        <li><a href="/"><img src="../../static/images/8.jpg"></a></li>
        <li><a href="/"><img src="../../static/images/9.jpg"></a></li>
        <li><a href="/"><img src="../../static/images/10.jpg"></a></li>
        <li><a href="/"><img src="../../static/images/11.jpg"></a></li>
        <li><a href="/"><img src="../../static/images/12.jpg"></a></li>
      </ul>
    </div>
    <div ref="fix_postion">
      <div class="search">
        <form action="/e/search/index.php" method="post" name="searchform" id="searchform">
          <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字词" style="color: rgb(153, 153, 153);" onfocus="if(value=='请输入关键字词'){this.style.color='#000';value=''}" onblur="if(value==''){this.style.color='#999';value='请输入关键字词'}" type="text">
          <input name="show" value="title" type="hidden">
          <input name="tempid" value="1" type="hidden">
          <input name="tbname" value="news" type="hidden">
          <input name="Submit" class="input_submit" value="搜索" type="submit">
        </form>
      </div>
      <div class="fenlei">
        <h2>文章分类</h2>
        <ul>
           <li v-for="(item, index) in sideInitData.categoryList" :key="index"><a href="/">{{item.tagName}}（{{item.count}}）</a></li>
        </ul>
      </div>
      <div class="tuijian">
        <h2>站长推荐</h2>
        <ul>
          <li v-for="(item, index) in sideInitData.recommendList" :key="index"><a href="/">{{item.title}}</a></li>
        </ul>
      </div>
      <div class="links">
        <h2>友情链接</h2>
        <ul>
          <a href="http://www.mycookies.cn">李强个人博客</a>
        </ul>
      </div>
    </div>
    <!--<div class="guanzhu">-->
      <!--<h2>关注我 么么哒</h2>-->
      <!--<ul>-->
        <!--<img src="../../static/images/wx.jpg">-->
      <!--</ul>-->
    <!--</div>-->
  </aside>
</template>
<script>
import axios from 'Axios'
export default {
  name: 'LeftSide',
  props: {
    sideInitDataParam: {
      recommendList: [],
      categoryList: []
    }
  },
  data () {
    return {
      sideInitData: {
        recommendList: [],
        categoryList: []
      }
    }
  },
  mounted () {
    this.dataInit()
  },
  methods: {
    fixedPosition (_newScrollPosition, _lastScrollPosition) {
      console.log(_newScrollPosition + '  ' + _lastScrollPosition)
    },
    dataInit () {
      if (this.sideInitDataParam) {
        this.sideInitData = this.sideInitDataParam
        localStorage.setItem('sideInitData', this.sideInitData)
        return
      }
      var sideData = localStorage.getItem('sideInitData')
      console.log(sideData.recommendList + '123')
      if (sideData != null && (sideData.recommendList != null || sideData.categoryList)) {
        this.sideInitData = sideData
        alert(12)
      } else {
        axios.get('http://localhost:8088/blogs/left').then(result => {
          this.sideInitData.categoryList = result.data.data.categoryList
          this.sideInitData.recommendList = result.data.data.recommendList
        })
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
</style>
