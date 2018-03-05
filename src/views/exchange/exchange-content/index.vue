<template>
  <div>
    <el-row>
      <el-col :span="12">
        <trade-chart></trade-chart>
      </el-col>
    </el-row>
    <el-row style="padding-top: 24px;">
      <el-col :span="6">
        <depth></depth>
      </el-col>
      <el-col :span="13">
        <div style="height: 370px; text-align: center">深度图</div>
        <trade></trade>

      </el-col>
      <el-col :span="5" >
        <trade-history ></trade-history>
      </el-col>

    </el-row>

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
