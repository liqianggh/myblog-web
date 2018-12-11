
<template>
  <main class="r_box">
    <router-link :class="listClass" tag="li" :name="index" :to="'/blog/detail/'+item.id" v-for="(item, index) in blogResult.list" :key="index">
        <h3><a>{{item.title}}</a></h3>
        <p >{{item.summary}}</p>
    </router-link>
    <paginate
      v-model="currentPage"
      active-class="curPage"
      disabled-class="disabledEle"
      :page-count="blogResult.pages||1"
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
      listClass: 'listIn'
    }
  },
  watch: {
    blogResult: function (newV, oldV) {
      this.listClass = 'list'
    }
  },
  methods: {
    goToPage (pageNum) {
      axios.get('/api/blogs', {
        params: {
          pageNum: pageNum,
          categoryId: this.categoryId
        }
      }).then(result => {
        this.blogResult = result.data.data
      })
    }
  }
}
</script>

<style scoped>
.list{
  position: relative;
  opacity: 0;
  left:30px;
  animation: .8s linear .3s slidein;
  animation-fill-mode: forwards;
}
.list:hover{
  background: #4AF2A1;
  color:#EEF5FF;
  left:40px;
  top:-4px;
  transition: .3s;
}

@keyframes slidein {
  from { transform: scaleX(0);opacity: 0 }
  to   { transform: scaleX(1);opacity: 1 }
}
@keyframes leftIn {
  from {left:700px;opacity: 0}
  to {left:30px;opacity: 1}
}
</style>
