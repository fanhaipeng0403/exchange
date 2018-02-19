<template>
    <div>
    <home-banner></home-banner>
    <Navbar></Navbar>
    <TagsView></TagsView>
    </div>

</template>

<script>

  import { Navbar, HomeBanner ,AppMain, TagsView } from './components'

  export default {
    name: 'Dashboard',
    components: {
      HomeBanner,
      Navbar,
      TagsView
    }

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
