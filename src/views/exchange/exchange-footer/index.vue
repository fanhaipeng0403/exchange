<template>
  <div class="exchange-footer pd-t24 pd-b48 pd-t24 pd-b48">
    <div class="exchange-footer-title exchange-title-bg ts-14">
      <div class="ex-tc-primary"><span class="mg-l8 tab-switch active" >Open Orders</span> <span
        class="mg-l8 tab-switch" >Order History</span></div>
      <div class="exchange-footer-more"><span
        class="ts-14 box-btn_text color-theme" >Buy</span> <span
        class="ts-14 mg-l16 box-btn_text"
      >Sell</span> <span
        class="ts-14 mg-l16 box-btn_text"
      >All</span>
        <div class="box-line box-line_Light"></div> <!----> <label

          class="box-checkbox-main mg-r24 ex-tc-gray"><span
          class="box-checkbox__inner box-checkbox-normal"><i
          class="icon-my-checked"></i></span>
          <input type="checkbox" class="box-checkbox__input" value="false"> <span>Display Selected Market</span></label>
        <a href="/mandatory" class="a-theme mg-r16" target="_blank">More</a></div>
    </div>
    <div class="exchange-content-bg" style="min-height: 100px;">
      <div class="box-table-template-default box-table-theme_Light">
        <div class="box-table-box">
          <div class="box-table_content">
            <div class="table-header">
              <table border="0" cellspacing="0" cellpadding="0" class="table-main js_thead">
                <colgroup>
                  <col width="136">
                  <col width="98">
                  <col width="88">
                  <col width="128">
                  <col width="128">
                  <col width="158">
                  <col width="138">
                  <col width="58">
                  <col width="128">
                  <col width="140">
                </colgroup>
                <thead>
                <tr class="th-row">
                  <td class="text-left">Date</td>
                  <td class="text-center">Pair</td>
                  <td class="text-center">Type</td>
                  <td class="text-right">Price</td>
                  <td class="text-right">Amount</td>
                  <td class="text-right">Total</td>
                  <td class="text-right">Executed</td>
                  <td class="text-left"></td>
                  <td class="text-right">Unexecuted</td>
                  <td class="text-right">Operation</td>
                </tr>
                </thead>
              </table>
            </div>
            <table border="0" cellspacing="0" cellpadding="0" class="table-main box-table_tbody">
              <colgroup>
                <col width="136">
                <col width="98">
                <col width="88">
                <col width="128">
                <col width="128">
                <col width="158">
                <col width="138">
                <col width="58">
                <col width="128">
                <col width="140">
              </colgroup>
              <tbody>
              <tr class="table-no-data">
                <td colspan="10">No Data</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'exchange-footer',
  }
</script>

<style scoped>
  @font-face {
    font-family: element-icons;
    src: url(data:application/font-woff;base64,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) format("woff"), url(/static/fonts/element-icons.b02bdc1.ttf) format("truetype");
    font-weight: 400;
    font-style: normal
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

  .deal-agreement-scroll ::-webkit-scrollbar-thumb:vertical {
    height: 20px;
    background-color: #f3f3f3;
    -webkit-border-radius: 2px;
    outline: 5px solid #e8e8e8;
    outline-offset: -5px;
    border: 5px solid #e8e8e8;
    margin-left: 10px
  }

  body, html {
    height: 100%
  }

  .exchange-footer-title {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  .exchange-footer-title .exchange-footer-more, .exchange-footer-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }

  .exchange-footer-title .exchange-footer-more .color-theme {
    cursor: pointer
  }

  .tab-switch {
    color: #fff;
    padding: 8px 8px 6px
  }

  .tab-switch.active, .tab-switch :hover {
    color: #659aea
  }

  .exchange-title-bg {
    background-color: #1d2129
  }

  .exchange-content-bg {
    background-color: #242933
  }

  .ex-tc-primary {
    color: #fff
  }

  .ex-tc-gray {
    color: #a5adb8
  }

  .box-line {
    width: 1px;
    height: 1.5em;
    margin: 0 24px
  }

  .box-line_Light {
    background-color: #e6eaf0
  }

  .box-checkbox-main {
    cursor: pointer
  }

  .box-checkbox-main:hover .box-checkbox__inner {
    border-color: #659aea
  }

  .box-checkbox-normal {
    width: 14px;
    height: 14px
  }

  .box-checkbox__inner {
    vertical-align: middle;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid #c7ced9;
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px)
  }

  .box-checkbox__input {
    display: none
  }

  .icon-my-checked {
    display: inline-block;
    font-size: 12px;
    color: #fff;
    transition: -webkit-transform .1s;
    transition: transform .1s;
    transition: transform .1s, -webkit-transform .1s;
    -webkit-transform: scale(0);
    transform: scale(0);
    line-height: 14px
  }

  .icon-my-checked :before {
    vertical-align: middle;
    margin: 0
  }

  .box-btn_text {
    text-decoration: none;
    color: #8a9099
  }

  .box-btn_text {
    cursor: pointer
  }

  .box-btn_text :hover {
    color: #5a8ad1
  }

  .table-main {
    width: 100%;
    table-layout: fixed
  }

  .table-main td {
    padding: inherit;
    margin: inherit
  }

  .box-table-box {
    position: relative
  }

  .box-table_content, .table-header {
    overflow: hidden
  }

  .box-table_tbody {
    overflow: hidden
  }

  .table-no-data {
    font-size: 24px;
    font-weight: 300;
    text-align: center
  }

  .box-table-template-default.box-table-theme_Light .box-table_tbody {
    background: #fff
  }

  .box-table-template-default.box-table-theme_Light .th-row {
    background-color: #f7f7fa
  }

  .box-table-template-default.box-table-theme_Light .table-no-data {
    color: #ccc;
    background-color: #fff;
    box-shadow: inset 0 -1px 0 0 #f0f4fa
  }

  .box-table-template-default .th-row {
    font-size: 12px;
    padding: 10px 0 10px 16px;
    color: #a5adb8
  }

  .box-table-template-default .th-row td:last-of-type {
    padding-right: 16px
  }

  .box-table-template-default .table-no-data {
    padding: 40px
  }

  /*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
  html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }

  body {
    margin: 0
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
  }

  input {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0
  }

  input {
    overflow: visible
  }

  [type=checkbox] {
    box-sizing: border-box;
    padding: 0
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
  }

  [class^=icon-my]:before {
    font-family: iconfont;
    font-weight: 400;
    speak: none;
    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    text-align: center;
    font-variant: normal;
    text-transform: none;
    line-height: 1em
  }

  @font-face {
    font-family: iconfont;
    src: url(//at.alicdn.com/t/font_510792_m6gs87b6ribxzuxr.eot?t=1518169168284);
    src: url(//at.alicdn.com/t/font_510792_m6gs87b6ribxzuxr.eot?t=1518169168284#iefix) format("embedded-opentype"), url("data:application/x-font-woff;charset=utf-8;base64,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") format("woff"), url(//at.alicdn.com/t/font_510792_m6gs87b6ribxzuxr.ttf?t=1518169168284) format("truetype"), url(//at.alicdn.com/t/font_510792_m6gs87b6ribxzuxr.svg?t=1518169168284#iconfont) format("svg")
  }

  [class^=icon-my]:before {
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  .icon-my-checked:before {
    content: "\E63D"
  }

  .pd-b48 {
    padding-bottom: 48px !important
  }

  .mg-r24 {
    margin-right: 24px !important
  }

  .pd-t24 {
    padding-top: 24px !important
  }

  .mg-l16 {
    margin-left: 16px !important
  }

  .mg-r16 {
    margin-right: 16px !important
  }

  .mg-l8 {
    margin-left: 8px !important
  }

  .color-theme {
    color: #659aea !important
  }

  .a-theme {
    text-decoration: none
  }

  .a-theme {
    cursor: pointer;
    color: #659aea !important
  }

  .text-left {
    text-align: left
  }

  .text-right {
    text-align: right
  }

  .text-center {
    text-align: center
  }

  .ts-14 {
    font-size: 14px
  }

  body {
    font-family: Open Sans, SF Pro Text, Helvetica Neue, Helvetica, Arial, sans-serif
  }

  .tab-switch {
    display: inline-block;
    cursor: pointer;
    color: #666
  }

  .tab-switch:hover {
    color: #659aea
  }

  .tab-switch.active {
    color: #659aea;
    font-weight: 600;
    border-bottom: 2px solid #659aea
  }

</style>
