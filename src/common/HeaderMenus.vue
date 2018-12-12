<template>
  <header class="header-navigation"  ref="header" id="header">
    <nav>
      <div class="logo"><a href="/">李强个人博客</a></div>
      <ul ref="startlist" id="starlist">
        <router-link tag="li" :to="item.url" v-for="(item, index) in navs" :itemIndex="index" :key="index" >
          {{item.content}}
        </router-link>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'HeaderMenus',
  mounted () {
    window.addEventListener('scroll', this.throttle(this.handleScroll, 200))
  },
  destroyed () {
    window.removeEventListener('scroll', this.throttle(this.handleScroll, 200))
  },
  data () {
    return {
      switchHandle: false,
      navs: [
        {
          url: '/index',
          content: '网站首页',
          isSelected: false
        },
        {
          url: '/blogs/category/0',
          content: '文章',
          isSelected: false
        },
        {
          url: '/comments/0',
          content: '留言',
          isSelected: false
        },
        {
          url: '/about',
          content: '关于我',
          isSelected: false
        }
      ]
    }
  },
  methods: {
    handleScroll () {
      if (document.documentElement.scrollTop > 70) {
        if (!this.switchHandle) {
          this.switchHandle = true
          this.$refs.header.style.top = '-60px'
        }
      } else {
        if (this.switchHandle) {
          this.switchHandle = false
          this.$refs.header.style.top = '0px'
        }
      }
    },
    throttle (func, delay) {
      let timer = null
      let startTime = Date.now()
      return function () {
        let curTime = Date.now()
        let remaining = delay - (curTime - startTime)
        const context = this
        const args = arguments
        clearTimeout(timer)
        if (remaining <= 0) {
          func.apply(context, args)
          startTime = Date.now()
        } else {
          timer = setTimeout(func, remaining)
        }
      }
    }
  }
}
</script>

<style scoped>
#starlist li{
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  border-radius: 1px
}
#starlist li:hover{
  background: #4AF2A1;
  color:#ADFFD5;
  transition: .3s
}
.router-link-active{
  background: #4AF2A1;
  color: #ADFFD5
}
</style>
