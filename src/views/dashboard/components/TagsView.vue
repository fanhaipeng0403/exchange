<template>

  <div  class="home-market">
    <div class="max-w">
  <el-tabs    v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Favourites" name="first">Favourites</el-tab-pane>
    <el-tab-pane label="ETH Market" name="second">ETH <Mark></Mark>et</el-tab-pane>
    <el-tab-pane label="BTC Market" name="third">BTC Market</el-tab-pane>
    <el-tab-pane label="USDT Market" name="fourth">USDT Market</el-tab-pane>
  </el-tabs>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'fourth'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  .home-market {
    width: 100%;
    padding: 40px 0;
    background-color: #f8f8fb;
  }
  .max-w {
    width: 1200px;
    padding: 0 50px;
    margin: 0 auto;
  }

</style>

