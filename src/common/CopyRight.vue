<template>
  <div>
    <footer>
      <p>Design by <a href="http://www.yangqq.com" target="_blank">李强个人博客</a> <a href="/">蜀ICP备11002373号-1</a></p>
    </footer>
    <a href="#" @click="slideToTop" ref="cd_top" class="cd-top">Top</a>
  </div>
</template>

<script>
export default {
  name: 'CopyRight',
  data () {
    return {
      offset: 300,
      offset_opacity: 1200,
      scroll_top_duration: 700
    }
  },
  mounted () {
  },
  methods: {
    slideToTop () {
      document.getElementsByTagName('body')[0].animate({
        scrollTop: 0
      }, this.scroll_top_duration
      )
    },
    handleCdTop (scrollY) {
      var backTop = this.$refs.cd_top
      if (scrollY > this.offset) {
        backTop.classList.add('cd-is-visible')
      } else {
        backTop.classList.remove('cd-is-visible')
        backTop.classList.remove('cd-fade-out')
      }
      if (scrollY > this.offset_opacity) {
        backTop.classList.add('cd-fade-out')
      }
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
