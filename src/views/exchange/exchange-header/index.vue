<template>
  <div class="exchange-header pd-b24 pd-t24">

    <div style="display: flex;">


      <ul class="exchange-header-ul mg-l50">
        <li class="ts-16 ex-tc-primary">
          <span>9,789.0746</span>
          <span class="ex-tc-gray"> $9,756.88</span>
        </li>
        <li class="ts-12 ex-tc-gray">Last Price </li>
      </ul>

      <ul class="exchange-header-ul mg-l50">
        <li class="ts-16 ex-tc-primary">
          <span>9,789.0746</span>
          <span class="ex-tc-gray"> $9,756.88</span>
        </li>
        <li class="ts-12 ex-tc-gray">Last Price </li>
      </ul>

      <ul class="exchange-header-ul mg-l50">
        <li class="ts-16 ex-tc-primary">
          <span>9,789.0746</span>
          <span class="ex-tc-gray"> $9,756.88</span>
        </li>
        <li class="ts-12 ex-tc-gray">Last Price </li>
      </ul>


      <ul class="exchange-header-ul mg-l50">
        <li class="ts-16 ex-tc-primary">
          <span>9,789.0746</span>
          <span class="ex-tc-gray"> $9,756.88</span>
        </li>
        <li class="ts-12 ex-tc-gray">Last Price </li>
      </ul>


      <ul class="exchange-header-ul mg-l50">
        <li class="ts-16 ex-tc-primary">
          <span>9,789.0746</span>
          <span class="ex-tc-gray"> $9,756.88</span>
        </li>
        <li class="ts-12 ex-tc-gray">Last Price </li>
      </ul>

    </div>
  </div>


</template>

<script>
  export default {
    name: 'exchange-header',
  }
</script>


<style scoped>

  .exchange-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .pd-b24 {
    padding-bottom: 24px !important;
  }

  .pd-t24 {
    padding-top: 24px !important;
  }

  .exchange-header .exchange-header-ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-left: 0px;
  }

  .mg-l50 {
    margin-left: 50px !important;
  }

  .exchange-main.exchange-main-trade .ex-tc-primary {
    color: #333;
  }

  .exchange-main .ex-tc-primary {
    color: #fff;
  }

  .ts-16 {
    font-size: 16px;
  }

  .ex-tc-gray {
    color: #a5adb8;
  }

  .ts-12 {

    font-size: 12px;

  }
  .coin-icon {
    font-size: 24px;
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  .icon-svg-symbol {
    width: 1em;
    height: 1em;
    vertical-align: -.15em;
    fill: currentColor;
    margin-right: 4px;
    overflow: hidden;
  }

</style>



