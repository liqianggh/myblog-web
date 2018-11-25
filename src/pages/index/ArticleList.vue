<template>
  <main class="r_box">
    <li v-for="(item, index) in blogResult.list" :key="index"><i><a href="/"><img
      src="../../../static/images/1.jpg"></a></i>
      <h3><a href="/">{{item.title}}</a></h3>
      <p>{{item.summary}}</p>
    </li>
    <paginate
      v-model="currentPage"
      active-class="curPage"
      disabled-class="disabledEle"
      :page-count="blogResult.pages"
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
      defaultValue: Object
    }
  },
  data () {
    return {}
  },
  methods: {
    goToPage (pageNum) {
      axios.get('http://localhost:8088/blogs', {
        params: {
          pageNum: pageNum
        }
      }).then(result => {
        this.blogResult = result.data.data
        console.log(this.blogResult)
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
 </style>
