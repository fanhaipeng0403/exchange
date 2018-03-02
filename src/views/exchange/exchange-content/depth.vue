<template>
  <div class="depth-main ts-12 ex-tc-primary exchange-content-bg" style="height: 650px; width: 290px;">
    <div class="depth-header exchange-title-bg ts-14">
      <div class="text-center">
        <span class="mg-l8 tab-switch " :class="{active : depthActive }" @click="showTab('depth')">Depth</span>
        <span class="mg-l8 tab-switch" :class="{active :buyActive}" @click="showTab('buy')">Buy</span>
        <span class="mg-l8 tab-switch" :class="{active : sellActive}" @click="showTab('sell')">Sell</span>
      </div>


      <div class="ts-12">

        <span class="ex-tc--gray">Group:</span>
        <select v-model="selected" class="depth-select ex-tc-primary ie-option-bg" id="decSelect">
          <option value="8">8DEC</option>
          <option value="7">7DEC</option>
          <option value="6">6DEC</option>
          <option value="5">5DEC</option>
        </select>


      </div>

    </div>
    <div class="pd-b8 pd-t8">
      <table border="0" cellspacing="0" cellpadding="0" class="depth-table text-right">
        <colgroup>
          <col width="93">
          <col width="89">
          <col width="108">
        </colgroup>
        <tbody>
        <tr class="ex-tc--gray">
          <td class="text-left pd-l8">Price({{pairType}})</td>
          <td>Amount({{coinName}})</td>
          <td class="pd-r12 text-right">Total({{pairType}})</td>
        </tr>
        </tbody>
      </table>
    </div>

    <table border="0" cellspacing="0" cellpadding="0" class="depth-table text-right">
      <colgroup>
        <col width="93">
        <col width="89">
        <col width="108">
      </colgroup>
      <tbody v-for="item in sell.slice(0,sellMax)">
      <tr>
        <td class="item-price ex-tc-down text-left pd-l8 hover">


          <span>{{item.price.toFixed(selected) }}</span>
        </td>
        <td class="item-number ex-tc-primary hover">
          <span>{{item.amount}}</span>
        </td>
        <td class="ex-tc-gray pd-r12" style="position: relative;">

          <span>{{item.total}} </span>

          <div class="sell-bg" :style="{width:  calWidth(item.total, sell.slice(0,sellMax)) + 'px' }"></div>


        </td>
      </tr>

      </tbody>
    </table>


    <div class="item-segmentation text-center ts-16 pd-b8 pd-t8 ex-tc-up">
      {{ last_price.pair }} ≈ {{ last_price.usd }} USD
    </div>

    <table border="0" cellspacing="0" cellpadding="0" class="depth-table text-right" v-show="buyShow">
      <colgroup>
        <col width="93">
        <col width="89">
        <col width="108">
      </colgroup>
      <tbody v-for="item in buy.slice(0,buyMax)">
      <tr>
        <td class="item-price ex-tc-up text-left pd-l8 hover">
          <span>{{item.price.toFixed(selected) }}</span>
        </td>
        <td class="item-number ex-tc-primary hover">
          <span>{{item.amount}}</span>
        </td>
        <td class="ex-tc-gray pd-r12" style="position: relative">
          <span>{{item.total}}</span>
          <div class="buy-bg" :style="{width:  calWidth(item.total, buy.slice(0,buyMax)) + 'px' }"></div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  export default {
    name: 'depth',

    data() {

      return {

        last_price: {pair: 100, usd: 1000},

        coinName: 'Show',
        pairType: 'ETH',

        selected: 8,
        depthActive: true,

        sellActive: false,
        sellShow: true,
        sellMax: 16,

        buyActive: false,
        buyShow: true,
        buyMax: 16,

        sell: [

          /*从大到小*/

          {price: 0.060, amount: 27, total: 5000},
          {price: 0.059, amount: 32, total: 3000},
          {price: 0.058, amount: 28, total: 2000},
          {price: 0.057, amount: 27, total: 4000},
          {price: 0.056, amount: 21, total: 1002},
          {price: 0.054, amount: 21, total: 1004},
          {price: 0.053, amount: 21, total: 2000},
          {price: 0.052, amount: 21, total: 1000},
          {price: 0.051, amount: 21, total: 1100},
          {price: 0.050, amount: 21, total: 1200},
          {price: 0.046, amount: 21, total: 1000},
          {price: 0.033, amount: 21, total: 1130},
          {price: 0.021, amount: 21, total: 1020},
          {price: 0.012, amount: 21, total: 1030},
          {price: 0.010, amount: 21, total: 1230},
          {price: 0.009, amount: 21, total: 1230},
          {price: 0.008, amount: 21, total: 1010},
          {price: 0.006, amount: 21, total: 1130},
          {price: 0.005, amount: 21, total: 1330},
        ],
        /*从小到大*/
        buy: [
          {price: 0.056, amount: 27, total: 4000},
          {price: 0.057, amount: 21, total: 2000},
          {price: 0.058, amount: 37, total: 1000},
          {price: 0.059, amount: 24, total: 500},
          {price: 0.060, amount: 27, total: 3000},
          {price: 0.061, amount: 27, total: 9000},
          {price: 0.062, amount: 21, total: 1020},
          {price: 0.063, amount: 21, total: 1012},
          {price: 0.064, amount: 21, total: 1020},
          {price: 0.065, amount: 21, total: 1030},
          {price: 0.066, amount: 21, total: 1322},
          {price: 0.068, amount: 21, total: 1030},
          {price: 0.069, amount: 21, total: 1230},
          {price: 0.097, amount: 21, total: 1020},
          {price: 0.099, amount: 21, total: 1222},
          {price: 0.197, amount: 21, total: 1030},
          {price: 0.267, amount: 21, total: 1130},
          {price: 0.367, amount: 21, total: 1030},
          {price: 0.467, amount: 21, total: 1430},
          {price: 0.467, amount: 21, total: 1030},
          {price: 0.497, amount: 21, total: 1230},
          {price: 0.567, amount: 21, total: 1020},
          {price: 0.667, amount: 21, total: 1030},

        ],

      }


    },

    methods: {


      calWidth(total, sellOrder) {

        let totalMax = sellOrder[0].total
        return (total / totalMax) * 290
      },


      showTab(tab) {
        if (tab === 'depth') {
          this.sellMax = 16
          this.buyMax = 16
          this.depthActive = true
          this.sellActive = false
          this.buyActive = false
        }
        else if (tab === 'buy') {
          this.buyMax = 40
          this.sellMax = 0
          this.depthActive = false
          this.buyActive = true
          this.sellActive = false
        }
        else {
          this.sellMax = 40
          this.buyMax = 0
          this.depthActive = false
          this.buyActive = false
          this.sellActive = true


        }


      }


    }

  }
</script>

<style scoped>
  .ts-12 {
    font-size: 12px;
  }

  .ts-14 {
    font-size: 14px;
  }

  .ex-tc-primary {
    color: #333;
  }

  .exchange-content-bg {
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04), 0 5px 10px 0 rgba(54, 54, 77, .1);
    border-radius: 4px;
    overflow: hidden;
  }

  .depth-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .exchange-title-bg {
    background-color: #f7faff;
  }

  .text-center {
    text-align: center;
  }

  .mg-l8 {
    margin-left: 8px !important;
  }

  .tab-switch {
    color: #fff;
    min-width: 20px;
    padding: 8px 8px 6px;
  }

  .tab-switch {
    display: inline-block;
    cursor: pointer;
    color: #666;
    min-width: 20px;
    padding: 8px 8px 6px;
  }

  .tab-switch.active {
    color: #659aea;
    font-weight: 600;
    border-bottom: 2px solid #659aea;
  }

  .ex-tc--gray {
    color: #a5adb8;
  }

  .depth-select {
    background-color: transparent;
    border: 1px solid transparent;
    outline: none;
  }

  .pd-b8 {
    padding-bottom: 8px !important;
  }

  .pd-t8 {
    padding-top: 8px !important;
  }

  .depth-table {
    table-layout: fixed;
    width: 100%;
  }

  .pd-r12 {
    padding-right: 12px !important;
  }

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  .pd-l8 {
    padding-left: 8px !important;
  }

  .ex-tc-down {
    color: #f0523a;
  }

  .pd-l8 {
    padding-left: 8px !important;
  }

  .item-price.hover {
    cursor: pointer;
    transition: font-width .3s;
  }

  .hover:hover {

    font-weight: 800;
  }

  .item-number {
    position: relative;
  }

  .pd-r12 {
    padding-right: 12px !important;
  }

  .text-center {
    text-align: center;
  }

  .ex-tc-up {
    color: #51ad23;
  }

  .ts-16 {
    font-size: 16px;
  }

  .buy-bg {
    background-color: #eff7e4 !important;
    position: absolute;
    top: 0px;
    bottom: 1px;
    right: 0;
    width: 0px;
    z-index: 1;
  }

  .sell-bg {
    background-color: #faebf2 !important;
    position: absolute;
    top: 0px;
    bottom: 1px;
    right: 0;
    width: 0px;
    z-index: 1;
  }

  td span {
    z-index: 2;
    position: relative;
  }
</style>

