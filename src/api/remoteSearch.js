import request from '@/utils/request'

export function userSearch(name) {
  return request({
    url: '/search/user',
    method: 'get',
    params: { name }
  })
}



// 或者
// function userSearch(name) {
//   return request({
//     url: '/search/user',
//     method: 'get',
//     params: { name }
//   })
// }
//
// export {userSearch}


// 1.  直接 export 接触函数
// 2.  变量赋值 , 然后 export {a}
// 3.   export default
// 4. 实际上 export default 等效于 { xxx  as default  }


// http://imweb.io/topic/582293894067ce9726778be9
