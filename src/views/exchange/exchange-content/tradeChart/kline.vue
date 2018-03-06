<template>

  <div class="kline" >
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
          width:  735,
          height: 370,
          theme: 'light',
          language: 'en-us',
          ranges: ["1w", "1d", "1h", "30m", "15m", "5m", "1m", "line"],

//        ranges: ["line", "1w", "1d", "12h", "6h","4h","2h", '1h', '30m','15m', '5m','1m']
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

<style >


  .kline {
    width: 735px;
    margin-left: auto;
    margin-right: auto;
    height: 370px;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04), 0 5px 10px 0 rgba(54, 54, 77, .1);
    border-radius: 3px;
  }

  #chart_show_tools,  #chart_toolbar_periods_vert,#chart_dropdown_settings,#chart_language_setting_div, #chart_toolbar_theme{

    display: none;
  }

  .chart_container.light .chart_toolbar_tabgroup li a.selected {
    color:#659aed;
  }

  .chart_container.light .chart_toolbar_tabgroup li a{
    color: #666;
  }

  .chart_container.light .chart_toolbar_button.selected {
    background-color: #f7faff;
    border-color: #659aed;
    color:#659aed;
  }


  .chart_container.light .chart_toolbar_button {
    color: #666;
  }

  .chart_container.light #chart_toolbar {
    background-color:#f7faff
  }

    #chart_show_indicator:hover{
    background-color: #f7faff

  }

  #chart_show_indicator{
    background-color: #f7faff

  }

  .chart_container .chart_toolbar_button {
    border: none;
    cursor: pointer;
    float: left;
    margin: 3px 2px;
    padding: 3px 10px;
    position: relative;
    z-index: 100;
  }

</style>

