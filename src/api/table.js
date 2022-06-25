import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getUserList(params) {
  return request({
    url: '/user/',
    method: 'get',
    params
  })
}
