<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Microsoft YaHei;
}
</style>
<script>
export default {
  mounted() {
    var u = navigator.userAgent;
    console.log(u);
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    var isiOS = u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    // 获取微信的用户代理
    var uaweichat = navigator.userAgent.toLowerCase();
    if (uaweichat.match(/windowswechat/i) == "windowswechat") {
      this.$router.replace("/pc");
    } else if (uaweichat.match(/micromessenger/i) == "micromessenger") {
      this.$router.replace("/weixin");
    } else if (isAndroid) {
      this.$router.replace("/android");
    } else if (isiOS) {
      this.$router.replace("/ios");
    } else {
      this.$router.replace("/pc");
    }
  }
};
</script>
