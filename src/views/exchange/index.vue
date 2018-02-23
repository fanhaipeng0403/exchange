<template>
  <div>

   <exchange-header></exchange-header>
  <exchange-content></exchange-content>

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


