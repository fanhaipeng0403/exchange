<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
		<Header class=""></Header>
		<div class="main-container">
			<app-main></app-main>
		</div>
	</div>
</template>

<script>
import { Navbar, Header, AppMain, TagsView } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Header,
    AppMain,
    TagsView
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
