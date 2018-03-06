<template>
  <div style="display: flex;justify-content: space-between">
   <div>

     <depth></depth>
   </div>
    <div>
         <trade-chart></trade-chart>
        <trade></trade>

    </div>

    <div>

       <trade-history ></trade-history>

    </div>


  </div>
</template>

<script>
  import depth from './depth'
  import tradeHistory from './tradeHistory'
  import trade from './trade'
  import tradeChart from './tradeChart/kline.vue'

  export default {
    name: 'exchange-content',
    components: {depth, trade, tradeChart, tradeHistory}
  }
</script>

<style scoped>
</style>
