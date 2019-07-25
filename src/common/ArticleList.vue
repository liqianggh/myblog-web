
<template>
  <main class="r_box">
    <router-link :class="listClass" tag="li" :name="index" :to="'/blog/detail/'+item.id" v-for="(item, index) in blogList.list" :key="index">
      <i v-if="item.img_url"><a href="/"><img :src="item.img_url"></a></i>
        <h3><a>{{item.title}}</a></h3>
        <p >{{item.summary}}</p>
    </router-link>
    <paginate
      v-model="currentPage"
      active-class="curPage"
      disabled-class="disabledEle"
      :page-count="blogList.pages||1"
      :page-range="5"
      :click-handler="goToPage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :break-view-text="'...'"
      :no-li-surround="true"
      class="pagelist"
    >
    </paginate>
  </main>

</template>

<script>
import Paginate from 'vuejs-paginate'
import axios from 'Axios'
export default {
  components: {
    Paginate
  },
  name: 'ArticleList',
  props: {
    blogResult: {
      type: Object,
      defaultValue: null
    },
    categoryId: {
      type: String,
      defaultValue: null
    }
  },
  data () {
    return {
      currentPage: 1,
      listClass: 'listIn',
      blogList: []
    }
  },
  watch: {
    blogResult: function (newV, oldV) {
      this.blogList = this.blogResult
      this.listClass = this.listClass === 'list' ? 'list1' : 'list'
    }
  },
  methods: {
    goToPage (pageNum) {
      axios.get('/api/blogs', {
        params: {
          pageNum: pageNum,
          pageSize: this.pageSize,
          categoryId: this.categoryId
        }
      }).then(result => {
        this.blogList = result.data.data
      })
    }
  }
}
</script>

<style scoped>
.list{
  position: relative;
  opacity: 0;
  /*left:30px;*/
  animation: .5s linear .3s slidetop;
  animation-fill-mode: forwards;
}
.list:hover{
  /*background: #4AF2A1;*/
  font-weight: bolder;
  color:#EEF5FF;
  left:5px;
  top:-4px;
  transition: .3s;
}
.list1{
  position: relative;
  opacity: 0;
  /*left:30px;*/
  animation: .5s linear .3s slidetopa;
  animation-fill-mode: forwards;
}
.list1:hover{
  /*background: #4AF2A1;*/
  font-weight: bolder;
  color:#EEF5FF;
  left:5px;
  top:-4px;
  transition: .3s;
}
@keyframes slidetop {
  from {top:20px;opacity: 0}
  to {top:0px;opacity: 1}
}
@keyframes slidein {
  from { transform: scaleX(0);opacity: 0 }
  to   { transform: scaleX(1);opacity: 1 }
}
@keyframes leftIn {
  from {left:700px;opacity: 0}
  to {left:30px;opacity: 1}
}
@keyframes slidetopa {
  from {top:20px;opacity: 0}
  to {top:0px;opacity: 1}
}
@keyframes slideina {
  from { transform: scaleX(0);opacity: 0 }
  to   { transform: scaleX(1);opacity: 1 }
}
@keyframes leftIna {
  from {left:700px;opacity: 0}
  to {left:30px;opacity: 1}
}
</style>
