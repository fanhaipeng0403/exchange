<template>
  <div class="depth-main ts-12 ex-tc-primary exchange-content-bg" style="height: 650px; width: 290px;">
    <div class="depth-header exchange-title-bg ts-14">
      <div class="text-center">
        <span class="mg-l8 tab-switch active">Depth</span>
        <span  class="mg-l8 tab-switch">Buy</span>
        <span class="mg-l8 tab-switch">Sell</span>
      </div>


    </div>

  </div>

</template>

<script>
  export default {
    name: 'left',
  }
</script>

<style scoped>

  .ex-tc-primary {
    color: #333;
  }

  .exchange-content-bg {
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04), 0 5px 10px 0 rgba(54, 54, 77, .1);
  }

  .ts-12 {
    font-size: 12px;
  }

  .depth-header {
    display: flex;
    align-items: center;
  }

  .text-center {
    text-align: center;
  }

  .ts-14 {
    font-size: 14px;
  }
  .tab-switch {
    display: inline-block;
    cursor: pointer;
    color: #666;
  }
  .mg-l8 {
    margin-left: 8px !important;
  }
</style>

