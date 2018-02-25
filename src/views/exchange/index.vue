<template>

  <div class="exchange-main main-h exchange-main-trade">

    <div class="max-w">

   <exchange-header></exchange-header>
  <exchange-content></exchange-content>

  </div>
    </div>

</template>

<script>

import exchangeContent from './exchange-content/index.vue'
import exchangeHeader from './exchange-header/index.vue'

export default {
  name: 'exchange',
  components: { exchangeContent, exchangeHeader }
}

</script>

<style scoped>

.max-w {
width: 1200px;
padding: 0 50px;
margin: 0 auto;
}
.exchange-main.exchange-main-trade {
  background-color: #f7f7fa;
  border-top: 1px solid #ebeff5;
}
.exchange-main {
  min-height: calc(100vh - 55px - 160px);
  line-height: 1.5;
}
</style>

