<template>
  <div class="max-w">
    <ul class="home-new-market">
      <li class="item" v-for="coin in market">
        <!--<li  class="item"  >-->
        <!--<a :href="/exchange?coinPair=+" + {{ symbol }}">-->

        <div class="markrt-card-main" @click="move( coin.symbol)">
          <ul class="market-card-data" style="list-style-type: none">
            <li>
              <span class="market-card-coin ts-14 color-primary tw-b"> {{coin.symbol}} </span>
              <span class="pd-l8 ts-12 color-fall">{{coin.change}}</span> <a target="_blank"></a>
            </li>
            <li>
              <span class="color-primary ts-18">{{coin.price}}</span>
              <span class="color-minor ts-14 pd-l8">$ {{coin.priceUSDT}}</span>
            </li>
            <li class="color-minor ts-12"> Volume: {{coin.volume}} BIX </li>
          </ul>
        </div>
      </li>

    </ul>


  </div>

</template>


<script>
  // *.ticker
  // 用在首页的列表以及详情页的那个
  //  {
  //    topic: "*.ticker",
  //      body: [{
  //    symbol: "ETH_BTC",
  //    new: 120,
  //    new_usd: 120, // 其他语言的时候，客户端进行货币换算？
  //    high: 150,
  //    low: 90,
  //    change: "+0.0321",
  //    change_pct: "+12.3%",
  //    volume: 20000,
  //  },
  //    {
  //      symbol: "ABC_BTC",
  //      pric: 120,
  //      new_usd: 120, // 其他语言的时候，客户端进行货币换算？
  //      high: 150,
  //      low: 90,
  //      change: "-0.0321",
  //      change_pct: "-12.3%",
  //      volume: 30000,
  //    }]
  //  }


  export default {
    data() {
      return {

        market:
          [
            {
              symbol: 'BIX/BTC',
              change: 29.91,
              usd: 1.21,
              price: 0.00011684,
              high: 150,
              low: 90,
              volume: 8423655,
            },

            {
              symbol: 'BIX/BTC',
              change: 29.91,
              price: 0.00011684,
              usd: 1.21,
              volume: 8423655,
            },

            {
              symbol: 'BIX/BTC',
              change: 29.91,
              price: 0.00011684,
              usd: 1.21,
              volume: 8423655,
            },


            {
              symbol: 'BIX/BTC',
              change: 29.91,
              price: 0.00011684,
              usd: 1.21,
              volume: 8423655,
            },


            {
              symbol: 'BIX/BTC',
              change: 29.91,
              price: 0.00011684,
              usd: 1.21,
              volume: 8423655,
            },


          ]


      }
    },
    methods: {
      move: function (symbol) {
        this.$router.push({path: 'exchange', query: {symbol: symbol}});

      }

    }
  }


  /* 1. a标签 :href  */
  /* 2. router-line :to  */
  /* 3. this.$router.push (跳转操作某些指定的动作) */

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

  .market-card-data span {
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

  .market-card-data span {
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



