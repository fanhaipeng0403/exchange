<template>

  <div class="kline" style="padding-bottom: 20px">
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
          width: 1200,
          height: 390,
          theme: 'light',
          language: 'en-us',
          ranges: ["1w", "1d", "1h", "30m", "15m", "5m", "1m", "line"],
          symbol: "BTC",
          symbolName: "BTC/USD",
          type: "stomp",
          url: 'https://127.0.0.1/v1/socket',
          limit: 1000,
          intervalTime: 5000,
          subscribePath: "/trade/kline",
          sendPath: "/trade/kline",
          showTrade: false,
          debug: true,
          enableSockjs: true
        });

        this.kline.draw()
    }}

</script>

<style scoped>


  .kline {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    height: 390px;
    position: relative;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04), 0 5px 10px 0 rgba(54, 54, 77, .1);

  }



</style>

