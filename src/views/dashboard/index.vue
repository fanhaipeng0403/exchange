<template>
    <div>
      <billBoards></billBoards>
      <leaderBoards></leaderBoards>
      <tradeHome></tradeHome>
    </div>
</template>

<script>

  import  leaderBoards from './components/leaderBoards.vue'
  import  billBoards from './components/billBoards.vue'
  import  tradeHome from './components/tradeHome.vue'

  export default {
    name: 'Dashboard',
    components: {
      leaderBoards,
      billBoards,
      tradeHome

    }

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
