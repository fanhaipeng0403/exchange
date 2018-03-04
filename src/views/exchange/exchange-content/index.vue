<template>
  <el-row>
    <el-col :span="6">
      <depth> </depth>
    </el-col>
    <el-col :span="13">
      <middle></middle>
    </el-col>
    <el-col :span="5">
      <!--<trade-history></trade-history>-->
    </el-col>
  </el-row>
</template>

<script>
import depth from './depth'
import tradeHistory from './tradeHistory'
import middle  from './middle/index'

export default {
  name: 'exchange-content',
  components: { depth, middle, tradeHistory }
}
</script>

<style scoped>
</style>
