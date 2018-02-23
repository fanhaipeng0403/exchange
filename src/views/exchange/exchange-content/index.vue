<template>
  <el-row>
    <el-col :span="6">
      <left> </left>
    </el-col>
    <el-col :span="12">
      <middle></middle>
    </el-col>
    <el-col :span="6">
        <right></right>
    </el-col>
  </el-row>
</template>

<script>
import left from './left'
import right from './right'
import middle  from './middle/index'

export default {
  name: 'exchange-content',
  components: { left, middle, right }
}
</script>

<style scoped>
</style>
