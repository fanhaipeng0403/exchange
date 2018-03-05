<template>

  <div class="latest-price-main ex-tc-primary exchange-content-bg" style="height: 650px;">
    <div class="ts-14 exchange-title-bg pd-t8 pd-b8 text-center">Trade History</div>
    <div class="pd-tb4">
      <div class="ts-12 text-right ">
        <table border="0" cellspacing="0" cellpadding="0" class="latest-price-table">
          <colgroup>
            <col width="90">
            <col width="76">
            <col width="74">
          </colgroup>
          <tbody v-for="item in tradeHistory">
          <tr class="box-hover cursor">

            <td class="text-left pd-l8 " :class="['ex-tc-' + (item.sell ?  'down' : 'up')  ]">
              <div>
                <span>{{   item.price > 1 ?   item.price.toLocaleString('en-US') : item.price }}</span>
                <span style="opacity: 0.4;">{{(formatPrice(item.price))}} </span>


              </div>

            </td>
            <td>
              <div>{{item.amount}}</div>
            </td>
            <td class="ex-tc--gray pd-r12">{{item.tradeTime}}</td>
          </tr>

          </tbody>
        </table>

      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'tradeHistory',

    data() {

      return {
        tradeHistory: [

          /*后8位置*/

          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: true},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: true},
          {price: 0.00002010, amount: 1000, tradeTime: '09:12:10', sell: true},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: false},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: true},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: true},
          {price: 0.00002000, amount: 1000, tradeTime: '09:12:10', sell: true},
          {price: 1.00000000, amount: 1000, tradeTime: '09:12:10', sell: true},
          {price: 1.10000000, amount: 1000, tradeTime: '09:12:10', sell: true},
          {price: 113000000, amount: 1000, tradeTime: '09:12:10', sell: true},
          {price: 11300000000, amount: 1000, tradeTime: '09:12:10', sell: true},
          {price: 1130000000, amount: 1000, tradeTime: '09:12:10', sell: true},
          {price: 11300000000, amount: 1000, tradeTime: '09:12:10', sell: true},
        ]


      }

    },


    methods: {

      formatPrice(price) {

        let priceString = price.toString()
        let len= price.toString().length


         if (!priceString.includes('.')&&len>=10){
          return null
        }

        else if (!priceString.includes('.')&&len<10){
          let count = 9 - len
          let zeroArray = [].fill.call(new Array(count), 0)
          return '.'.concat( zeroArray.join(""))
        }

        else {
        let count = 10 - len
        let zeroArray = [].fill.call(new Array(count), 0)
        return zeroArray.join("")
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

  .exchange-title-bg {
    background-color: #f7faff;
  }

  .text-center {
    text-align: center;
  }

  .ex-tc--gray {
    color: #a5adb8;
  }

  .pd-b8 {
    padding-bottom: 8px !important;
  }

  .pd-t8 {
    padding-top: 8px !important;
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

  .box-hover:hover {

    background-color: #f7faff

  }

  .pd-l8 {
    padding-left: 8px !important;
  }

  .cursor {
    cursor: pointer;
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

  .latest-price-main {
    width: 250px;
  }
</style>

