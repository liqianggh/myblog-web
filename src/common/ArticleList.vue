<template>
  <main class="r_box">
    <router-link tag="li" :to="'/blog/detail/'+item.id" v-for="(item, index) in blogResult.list" :key="index">
      <slot v-bind="item">
        <i><router-link tag="a" :href="'/blog/detail/'+item.id"><img
          src="../../static/images/1.jpg"></router-link></i>
        <h3><a :href="'/blog/detail/'+item.id">{{item.title}}</a></h3>
        <p >{{item.summary}}</p>
      </slot>
    </router-link>
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
      type: Object,
      defaultValue: null
    },
    categoryId: {
      type: Number,
      defaultValue: null
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    goToPage (pageNum) {
      axios.get('http://localhost:8088/blogs', {
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

<style lang='stylus' scoped>
 </style>
