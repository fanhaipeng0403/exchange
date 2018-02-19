<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
		<Header ></Header>
		<div class="main-container">
			<app-main></app-main>
		</div>
	</div>
</template>

<script>

import  Header  from './header'
import  AppMain  from './AppMain.vue'

export default {
  name: 'layout',
  components: {
    Header,
    AppMain
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
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
