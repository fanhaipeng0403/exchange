


// 导入



//发现不同项目采用的导入方式不同, 这里对比了下require和import ,
// 好文 http://imweb.io/topic/582293894067ce9726778be9
// http://www.ruanyifeng.com/blog/2015/05/require.html
// http://www.ruanyifeng.com/blog/2015/05/require.html



// ES6

// 直接加载
// import Register from '../view/Register'


// 懒加载
// const Index = () => import('/page/index.vue')


//require


// resolve => require(['../components/Home.vue'],resolve)
// r => require.ensure([], () => r(require('../page/home')), 'home')


// const _import = require('./_import_' + process.env.NODE_ENV)
// _import('errorPage/404')



// v-router

// 路由参数匹配(注意复用不更新的问题)
// template: <div>User {{ $route.params.id }}</div>(内容显示url的部分)
// https://jsfiddle.net/yyx990803/4xfa2f19/


// 嵌套路由,子路由, 根据url匹配,从组件集合里(即子组件)取一个,  只显示一个视图 (1对1个组合里的一个)
// https://jsfiddle.net/yyx990803/L7hscd8h/


// 命名路由
//<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
//<router-link to="/user/foo">/user/foo</router-link>

// 命名视图
// 有时候想同时（同级）展示多个视图，而不是嵌套展示,显示多个视图(一对多)



// 重定向与别名的区别:
// 是否更改url


//钩子

// http://blog.csdn.net/wang1006008051/article/details/77962942

// 进入
// 进出
// 跳转
// 权限之类的

//







// https://github.com/fanhaipeng0403/webchat/blob/master/src/router/index.js
// https://github.com/bailicangdu/vue2-elm/blob/master/src/router/router.js
// https://github.com/bailicangdu/vue2-happyfri/blob/master/src/router/router.js
// https://github.com/tgxhx/vue-reader/blob/master/src/router/index.js
// https://github.com/Exrick/xmall-front/blob/master/src/router/index.js
//

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading


/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if fasle ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/register', component: _import('register/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  { path: '',
    component: Layout,
    name: 'dashboard',
    meta: {
      title: 'dashboard',
    },
    children: [
      {
      path: '',
      component: _import('dashboard/index'),
      name: 'Basic',
      meta: { title: 'Basic',noCache: true },
      hidden: true
    },
      {
      path: 'exchange',
      component: _import('exchange/index'),
        name: 'Basic',
      meta: { title: 'Basic',noCache: true }
    },
      { path: 'fullExchange',  component: _import('example/tab/index'), name: 'Full Screen', meta: { title: 'Full Screen' }}
    ]

  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [{
      path: 'index',
      component: _import('documentation/index'),
      name: 'documentation',
      meta: { title: 'documentation', icon: 'documentation', noCache: true }
    }]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    meta: { roles: ['admin'] }, // you can set roles in root nav
    children: [{
      path: 'index',
      component: _import('permission/index'),
      name: 'permission',
      meta: {
        title: 'permission',
        icon: 'lock',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }]
  },
  {
    path: '/icon',
    component: Layout,
    children: [{
      path: 'index',
      component: _import('svg-icons/index'),
      name: 'icons',
      meta: { title: 'icons', icon: 'icon', noCache: true }
    }]
  },

  {
    path: '/error-log',
    component: Layout,
    redirect: 'noredirect',
    children: [{ path: 'log', component: _import('errorLog/index'), name: 'errorLog', meta: { title: 'errorLog', icon: 'bug' }}]
  },


]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [

  { path: '*', redirect: '/404', hidden: true }
]
