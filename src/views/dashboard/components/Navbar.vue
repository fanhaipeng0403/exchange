<template>
  <div  class="max-w">
    <ul  class="home-new-market" >
    <!--<li  class="item"  v-for="coin in socketMessage">-->
      <li  class="item"  >
      <a  href="/exchange?coinPair=BIX_BTC" >
        <div  class="markrt-card-main">
          <ul class="market-card-data" style="list-style-type: none">
            <li > <span  class="market-card-coin ts-14 color-primary tw-b"> BIX/BTC </span> <span  class="pd-l8 ts-12 color-fall">+29.91%</span> <a  target="_blank"></a>
            </li>
            <li >
              <span class="color-primary ts-18">0.00011683</span>
              <span  class="color-minor ts-14 pd-l8">$ 1.21</span>
            </li>
            <li  class="color-minor ts-12"> Volume: 8,423,655 BIX </li>
          </ul>
        </div>
      </a>
    </li>

  </ul>


  </div>

</template>


<script>
  export default {
    data() {
      return {
        socketMessage: ''
      }
    },

    sockets: {
      connect() {
        // Fired when the socket connects.
        this.isConnected = true;
      },

    disconnect() {
        this.isConnected = false;
      },

      messageChannel(data) {
        this.socketMessage = data
      }
    },

  }
</script>



<style rel="stylesheet/scss" lang="scss" scoped>
  .max-w {
    width: 1200px;
    padding: 0 50px;
    margin: 0 auto;
  }

  .home-new-market {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0;
    margin: 24px 0 8px;
    list-style-type: none;
  }
  .home-new-market .item {
    width: 224px;
    height: 90px;
    display: inline-block;
  }
/**/
  .markrt-card-main {
    position: relative;
    cursor: pointer;
  }
  .market-card-data .pd-l8 {
    padding-left: 8px;
  }
  .color-minor {
    color: #7d8b99;
  }
  .market-card-data span{
    display: inline-block;
  }
  .ts-12 {
    font-size: 12px;
  }
  .color-fall {
    color: #70b32e;
  }
  .pd-l8 {
    padding-left: 8px !important;
  }
  .market-card-data span{
    display: inline-block;
  }
  .ts-14 {
    font-size: 14px;
  }
  .tw-b {
    font-weight: 600;
  }
  .color-primary {
    color: #333;
  }
</style>
