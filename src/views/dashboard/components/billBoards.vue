<template>
  <div class="home-banner">
    <div>
      <h1 class="banner-title text-center color-default ts-24">The Leading Global Cryptocurrency Exchange</h1>
      <div class="text-center banner-notice">
        <span> <a href="/" target="_blank" class="notice-a">BitLink Lists Fusion (CDN)</a>
        <span class="mg-l8 mg-r8"> / </span></span>
        <span> <a href="/" target="_blank" class="notice-a">BitLink Lists Tron (ABC)</a>
        <span class="mg-l8 mg-r8"> / </span> </span>
        <span><a href="/" target="_blank" class="notice-a">BitLink Adds BIX/USDT, BTC/DAI Trading Pair</a>
      </span>
      </div>

      <div class="max-w">
        <swiper></swiper>
      </div>
    </div>

  </div>
</template>


<script>
  import swiper from '@/components/Swiper'

  export default {
    name: 'HomeBanner',
    components: {swiper}
  }

</script>
<style rel="stylesheet/scss">
  .mg-r8 {
    margin-right: 8px !important;
  }

  .mg-l8 {
    margin-left: 8px !important;
  }

  .home-banner {
    width: 100%;
    height: 240px;
    padding: 40px 0 20px;
    background-color: #0a1833;
  }

  .home-banner .banner-notice .notice-a:hover {
    color: #659aea;
  }

  .home-banner .banner-notice {
    padding: 16px 0 40px;
    color: #c2daff;
  }

  .text-center {
    text-align: center;
  }

  .home-banner .banner-title {
    margin: 0;
    font-weight: 300;
    line-height: 1;
  }

  .ts-24 {
    font-size: 24px;
  }

  .text-center {
    text-align: center;
  }

  .color-default {
    color: #fff;
  }

  .max-w {
    width: 1200px;
    padding: 0 50px;
    margin: 0 auto;
  }
</style>
