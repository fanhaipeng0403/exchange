import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}


export function register(params) {
  return request({
    url: '/login/register',
    method: 'post',
    params: { params }
  })
}

export function geetest (params) {
  return request(
    {url: '/member/geetestInit?t=' + (new Date()).getTime(), params}
  )
}
