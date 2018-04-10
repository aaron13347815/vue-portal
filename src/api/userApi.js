import request from '@/utils/request'

export function queryUserPage(params) {
  return request({
    url: '/identity/api/users',
    method: 'get',
    params
  })
}

export function queryUserById(userId) {
  return request({
    url: '/identity/api/user/' + userId,
    method: 'get'
  })
}

export function insertRecords(data) {
  return request({
    url: '/identity/api/user/',
    method: 'post',
    data
  })
}

export function updateUserById(data) {
  return request({
    url: '/identity/api/user/',
    method: 'patch',
    data
  })
}

export function deleteUserById(userId) {
  return request({
    url: '/identity/api/user/' + userId,
    method: 'delete'
  })
}
