<template>
  <div class="dark" style="width: 655px; height: 367px; visibility: visible;">

  <kline> </kline>
  <trade></trade>

    </div>

</template>

<script>

  import trade from  './trade.vue'
  import kline from './kline.vue'

export default {
    name : 'middle',
  components: { kline,  trade}
  }
</script>

<style scoped>

</style>

