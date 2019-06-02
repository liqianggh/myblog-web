<template>
  <div>
    <footer>
      <p><a href="http://www.mycookies.cn" target="_blank">李强个人博客</a> <a href="/">皖ICP备17014740号-1</a></p>
    </footer>
    <a href="javascript:;" @click="slideToTop" ref="cd_top" class="cd-top">Top</a>
  </div>
</template>

<script>
export default {
  name: 'CopyRight',
  mounted () {
    window.addEventListener('scroll', this.throttle(this.handleScroll, 200))
  },
  destroyed () {
    window.removeEventListener('scroll', this.throttle(this.handleScroll, 200))
  },
  methods: {
    slideToTop () {
      if (this.$refs.cd_top.style.opacity === '0') {
        return false
      }
      var timer = null
      timer = setInterval(() => {
        document.body.scrollTop -= 40
        document.documentElement.scrollTop -= 40
        if (document.body.scrollTop || document.documentElement.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 20)
    },
    handleScroll () {
      if (document.documentElement.scrollTop > 70) {
        this.$refs.cd_top.style.opacity = '0.5'
        this.$refs.cd_top.style.cursor = 'pointer'
      } else {
        this.$refs.cd_top.style.opacity = '0'
        this.$refs.cd_top.style.cursor = 'default'
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
