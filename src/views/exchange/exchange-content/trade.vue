<template>

  <div   class="flex-box pd-tb16 mg-t16 exchange-content-bg exchange-shadow"  paybix="true">
    <div class="pd-lr16 exchange-buy_line-Light">
      <ul class="trader-box_list">
        <li class="flex-box space-between pd-b8">
          <div class="ts-14 tw6 trader-str-buy">Buy EOS</div>
          <div class="color-grey ts-12">USDT Available:0.000000000</div>
        </li>
        <li class="color-grey ts-14">
          <div>
            <div class="box-input-box"><span class="box-input_prefix pd-l8"><div
              class="color-555" style="width: 72px;">Price</div></span> <span
              class="box-input_suffix pd-r8" style="z-index: 1;"><div

              class="color-999">USDT</div></span>
              <!----> <input placeholder="Please enter current price"
                             class="box-input_input input__input_style    input_normal box-input_input-Light-buy"
                             style="padding-left: 80px; padding-right: 44px;" type="text"></div>
            <div class="box-input_err text-left ts-12"></div>
          </div>
          <div style="" class="pd-l80 ts-12">≈
            7.87 USD
          </div>
        </li>
        <li class="color-grey ts-14" style="position: relative;">
          <div class="pd-tb8">
            <div class="box-input-box"><span class="box-input_prefix pd-l8"><div
              class="color-555" style="width: 72px;">Amount</div></span> <span
              class="box-input_suffix pd-r8" style="z-index: 1;"><div

              class="color-999">EOS</div></span>
              <!----> <input placeholder="Please enter amount"
                             class="box-input_input input__input_style    input_normal box-input_input-Light-buy"
                             style="padding-left: 80px; padding-right: 35px;" type="text"></div>
            <div class="box-input_err text-left ts-12"></div>
          </div> <!----></li>
        <li class="flex-box space-between color-grey ts-12">
          <div class="trader-box_percentage_Light">25%</div>
          <div class="trader-box_percentage_Light">50%</div>
          <div class="trader-box_percentage_Light">75%</div>
          <div class="trader-box_percentage_Light">100%</div>
        </li>
        <li class="flex-box ts-14 pd-t8 pd-b4">
          <div class="color-grey" style="width: 80px;">Total</div>
          <div class="tw6 color-555">0.00000000 USDT</div>
        </li>
        <li>
          <button class="box-button box-btn-s_big box-btn-t_buy trader-btn-buy">
            <!----> Log in or Sign up
          </button>
        </li>
      </ul> <!----></div>
    <div class="pd-lr16">
      <ul class="trader-box_list">
        <li class="flex-box space-between pd-b8">
          <div class="ts-14 tw6 trader-str-sell">Sell EOS</div>
          <div class="color-grey ts-12">EOS Available:0.0000</div>
        </li>
        <li class="color-grey ts-14">
          <div style="width: 295px;">
            <div class="box-input-box">
              <span class="box-input_prefix pd-l8"><div
              class="color-555" style="width: 72px;">Price</div></span> <span
              class="box-input_suffix pd-r8" style="z-index: 1;"><div

              class="color-999">USDT</div></span>
              <!----> <input placeholder="Please enter current price"
                             class="box-input_input input__input_style   input_normal box-input_input-Light-buy"
                             style="padding-left: 80px; padding-right: 44px;" type="text"></div>
            <div class="box-input_err text-left ts-12"></div>
          </div>
          <div style="" class="pd-l80 ts-12">≈
            7.87 USD
          </div>
        </li>
        <li class="color-grey ts-14" style="position: relative;">
          <div class="pd-tb8">
            <div class="box-input-box"><span class="box-input_prefix pd-l8"><div
              class="color-555" style="width: 72px;">Amount</div></span> <span
              class="box-input_suffix pd-r8" style="z-index: 1;"><div

              class="color-999">EOS</div></span>
              <!----> <input placeholder="Please enter amount"
                             class="box-input_input input__input_style    input_normal box-input_input-Light-buy"
                             style="padding-left: 80px; padding-right: 35px;" type="text"></div>
            <div class="box-input_err text-left ts-12"></div>
          </div> <!----></li>
        <li class="flex-box space-between color-grey ts-12">
          <div class="trader-box_percentage_Light">25%</div>
          <div class="trader-box_percentage_Light">50%</div>
          <div class="trader-box_percentage_Light">75%</div>
          <div class="trader-box_percentage_Light">100%</div>
        </li>
        <li class="flex-box ts-14 pd-t8 pd-b4">
          <div class="color-grey" style="width: 80px;">Total</div>
          <div class="tw6 color-555">0.00000000 USDT</div>
        </li>
        <li>
          <button class="box-button box-btn-s_big box-btn-t_sell trader-btn-sell">
            <!----> Log in or Sign up
          </button>
        </li>
      </ul> <!----></div>
  </div>

</template>

<script>


  export default {
    name: 'trade',



  }
</script>

<style scoped>


  .deal-agreement-scroll ::-webkit-scrollbar-thumb:vertical {
    height: 20px;
    background-color: #f3f3f3;
    -webkit-border-radius: 2px;
    outline: 5px solid #e8e8e8;
    outline-offset: -5px;
    border: 5px solid #e8e8e8;
    margin-left: 10px
  }

  .deal-agreement-scroll ::-webkit-scrollbar-thumb:vertical {
    height: 20px;
    background-color: #f3f3f3;
    -webkit-border-radius: 2px;
    outline: 5px solid #e8e8e8;
    outline-offset: -5px;
    border: 5px solid #e8e8e8;
    margin-left: 10px
  }

  .exchange-buy_line-Light {
    border-right: 1px dashed #ebeff5
  }

  .trader-box_list {
    padding: 0;
    margin: 0;
    list-style-type: none
  }

  .trader-str-buy {
    color: #46a656
  }

  .trader-str-sell {
    color: #e66653
  }

  .box-button.trader-btn-buy {
    background-color: #46a656;
    border: #46a656
  }

  .box-button.trader-btn-sell {
    background-color: #e66653;
    border: #e66653
  }

  .box-button.trader-btn-buy, .box-button.trader-btn-sell {
    width: 100%;
    color: #fff
  }

  .trader-box_percentage_Light {
    width: 22%;
    height: 24px;
    border-radius: 3px;
    cursor: pointer;
    line-height: 24px;
    text-align: center
  }

  .trader-box_percentage_Light {
    color: #555;
    border: 1px solid #e6e6e6
  }

  .trader-box_percentage_Light:hover {
    color: #659aea
  }

  .exchange-content-bg {
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04), 0 5px 10px 0 rgba(54, 54, 77, .1);
  }

  .input__input_style {
    outline: none;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    padding-left: 8px;
    background: transparent;
    color: #333
  }

  .input__input_style.input_normal {
    height: 36px
  }

  .input__input_style::placeholder {
    font-size: 14px;
    color: #ccc
  }

  .input__input_style :-ms-input-placeholder, .input__input_style::-ms-input-placeholder {
    font-size: 14px;
    color: #ccc
  }

  .input__input_style :hover {
    border-color: #659aea
  }

  .input__input_style :focus {
    box-shadow: 0 0 0 2px rgba(101, 154, 234, .2);
    border-color: #659aea
  }

  .box-input_err {
    position: absolute;
    color: #ff5447
  }

  .box-input-box {
    position: relative
  }

  .box-input_input.box-input_input-Light-buy {
    font-size: 16px;
    font-weight: 600
  }

  .box-input_input.box-input_input-Light-buy ::-webkit-input-placeholder {
    font-weight: 400
  }

  .box-input_input.box-input_input-Light-buy :-ms-input-placeholder, .box-input_input.box-input_input-Light-buy ::-ms-input-placeholder {
    font-weight: 400
  }

  .box-input_prefix {
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
  }

  .box-input_suffix {
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 1
  }

  .box-button {
    text-decoration: none;
    line-height: 1.5;
    outline: none;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: #fff
  }

  .box-button.box-btn-s_big {
    font-size: 16px;
    font-weight: 600;
    height: 40px;
    padding: 0 24px
  }

  .pd-l80 {
    padding-left: 80px !important
  }

  .mg-t16 {
    margin-top: 16px !important
  }

  .pd-lr16 {
    padding-left: 16px !important;
    padding-right: 16px !important
  }

  .pd-tb16 {
    padding-top: 16px !important;
    padding-bottom: 16px !important
  }

  .pd-l8 {
    padding-left: 8px !important
  }

  .pd-r8 {
    padding-right: 8px !important
  }

  .pd-t8 {
    padding-top: 8px !important
  }

  .pd-b8 {
    padding-bottom: 8px !important
  }

  .pd-tb8 {
    padding-top: 8px !important;
    padding-bottom: 8px !important
  }

  .pd-b4 {
    padding-bottom: 4px !important
  }

  .color-999 {
    color: #999
  }

  .color-555 {
    color: #555
  }

  .color-grey {
    color: #a5adb8
  }

  .tw6 {
    font-weight: 700
  }

  .text-left {
    text-align: left
  }

  .ts-12 {
    font-size: 12px
  }

  .ts-14 {
    font-size: 14px
  }

  .flex-box {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center
  }

  .flex-box.space-between {
    justify-content: space-between
  }

  .input__input_style::placeholder {
    color: #ccc;
    font-weight: 400;
    font-size: 12px;
  }

</style>

