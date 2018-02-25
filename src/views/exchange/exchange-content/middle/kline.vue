<template>

  <div class="kline">
    <div id="kline_container"></div>
  </div>
</template>

<script>


  import 'kline';
  import "kline/src/css/main.css"
  import "./sockjs"
  import "./stomp.js"
  import "./jquery.js"
  import "./jquery.mousewheel.js"

export default {
    name : 'k-line',
    mounted() {
      this.kline = new Kline({
          element: document.getElementById('kline_container'),
          width: 675,
          height: 367,
          theme: 'light', // light/dark
          language: 'en-us', // zh-cn/en-us/zh-tw
          ranges: ["1w", "1d", "1h", "30m", "15m", "5m", "1m", "line"],
          symbol: "BTC",
          symbolName: "BTC/USD",
          type: "stomp", // poll/stomp
          url: 'https://127.0.0.1/v1/socket',
          limit: 1000,
          intervalTime: 5000,
          subscribePath: "/trade/kline",
          sendPath: "/trade/kline",
          debug: true,
          showTrade: true,
          enableSockjs: true
        });

        this.kline.draw()
    }}

</script>

<style scoped>


  .kline {
    width: 675px;
    margin-left: auto;
    margin-right: auto;
    height: 367px;
    position: relative;
  }
</style>

