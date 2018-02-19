

<template>
      <swiper :options="swiperOption">


        <swiper-slide>
          <ul class="banner-box"><li class="item"><a href="https://www.bibox.com/NewYear.html?if=newyear" target="_blank" class="item-a">
            <img src="https://img.bibox.com/appimg/web-banner-1-1-zh-cn-1518587908544.jpg">
          </a>
          </li>
            <li class="item">
            <a href="https://bibox.zendesk.com/hc/en-us/articles/360000841453" target="_blank" class="item-a">
              <img src="https://img.bibox.com/appimg/web-banner-1-6-en-ww-1518257034111.jpg">
            </a>
            </li>
            <li class="item">
              <a href="https://bibox.zendesk.com/hc/en-us/articles/360000841833" target="_blank" class="item-a">
                <img src="https://img.bibox.com/appimg/web-banner-1-4-en-ww-1518249443793.jpg">
              </a>
            </li>
            <li class="item">
              <a href="https://bibox.zendesk.com/hc/en-us/articles/360000660453" target="_blank" class="item-a">
                <img src="https://img.bibox.com/appimg/web-banner-1-2-en-ww-1517885798216.jpg">
              </a>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="banner-box"><li class="item"><a href="https://bibox.zendesk.com/hc/en-us/articles/115004941093" target="_blank" class="item-a"><img src="https://img.bibox.com/appimg/web-banner-1-7-en-ww-1517049533312.jpg"></a></li><li class="item"><a href="https://t.me/biboxglobal" target="_blank" class="item-a"><img src="https://img.bibox.com/appimg/web-banner-1-3-en-ww-1515567654867.jpg"></a></li><li class="item"><a href="https://bibox.zendesk.com/hc/en-us/articles/360000674134" target="_blank" class="item-a"><img src="https://img.bibox.com/appimg/web-banner-1-en-ww-1518073668853.jpg"></a></li><li class="item"><a href="https://bibox.zendesk.com/hc/en-us/articles/360000833973" target="_blank" class="item-a"><img src="https://img.bibox.com/appimg/web-banner-1-8-en-ww-1518491069842.jpg"></a></li></ul>

        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>

      </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          centeredSlides: true,
          autoplay: {
            delay: 5500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>


  .banner-box .item img {
    width: 100%;
    height: 128px;
  }


  .banner-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  .banner-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }



.banner-box .item {
box-sizing: border-box;
width: 280px;
height: 132px;
border-radius: 4px;
border: 2px solid transparent;
overflow: hidden;
margin-right: 20px;
cursor: pointer;
}
.swiper-button-next{ display:none; }
  .swiper-button-prev{ display:none; }
  .swiper-pagination { display:none; }
</style>


