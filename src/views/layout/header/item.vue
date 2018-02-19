<template>
  <div class="menu-wrapper" >
    <template v-for="item in routes" v-if="!item.hidden&&item.children">


      <router-link v-if="item.children.length===1 && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">

        <el-menu-item  v-if="item.children[0].meta&&item.children[0].meta.title" class="item-style"  :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <span >{{generateTitle(item.children[0].meta.title)}}</span>
        </el-menu-item>

      </router-link>


    </template>
  </div>
</template>

<script>
import { generateTitle } from '@/utils/i18n'

export default {
  name: 'item',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    generateTitle
  }
}
</script>



<style rel="stylesheet/scss" lang="scss" scoped>


.item-style:hover {
outline: 0;
color: #659aea;
font-family: Open Sans,SF Pro Text,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 16px;

}

.item-style {
font-family: Open Sans,SF Pro Text,Helvetica Neue,Helvetica,Arial,sans-serif;
  text-decoration: none;
  cursor: pointer;
  color: #666;
  font-size: 16px;
}


</style>

