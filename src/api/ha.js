import request from '@/utils/request'

export function fetchHaList(query) {
  return request({
    url: '/dbopr/ha/',
    method: 'get',
    params: query
  })
}
