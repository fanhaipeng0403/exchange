import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

//vue  请求数据
// 使用axios
// https://github.com/hua1995116/webchat/blob/master/src/api/server.js  推荐这个和本项目的
// https://github.com/Exrick/xmall-front/blob/master/src/api/public.js
// https://github.com/hua1995116/musiccloudWebapp/blob/cd16ad0510a98caa8d83bd7fa924332d15f5b14c/src/utils/axios.js
// https://github.com/hua1995116/webchat/blob/master/src/api/axios.js

//自己用fetch写的
// https://github.com/bailicangdu/vue2-elm/blob/master/src/config/fetch.js
// http://www.webhek.com/post/javascript-fetch-api.html
// https://segmentfault.com/a/1190000003810652
// 这个新fetch API相比起XMLHttpRequest更简单，更易读，是很好的Ajax替代方法；fetch有很明显的优势，相信很快会流行起来


// 对比分析
// https://segmentfault.com/a/1190000012836882



// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => response,
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
