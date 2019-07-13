<template>
  <div id='app'>
    <header-menus/>
    <router-view/>
    <copy-right/>
  </div>
</template>

<script>
import HeaderMenus from './common/HeaderMenus.vue'
import CopyRight from './common/CopyRight.vue'

export default {
  name: 'App',
  components: {
    HeaderMenus,
    CopyRight
  },
  mounted() {
    // 友盟统计添加
    const script = document.createElement("script");
    script.src =
      "https://s23.cnzz.com/z_stat.php?id=1277647101&web_id=1277647101";
    script.language = "JavaScript";
    document.body.appendChild(script);
  },
  watch: {
    $route() {
      if (window._czc) {
        let location = window.location;
        let contentUrl = location.pathname + location.hash;
        let refererUrl = "/";
        window._czc.push(["_trackPageview", contentUrl, refererUrl]);
      }
    }
  }
}
</script>
