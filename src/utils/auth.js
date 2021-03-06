import Cookies from 'js-cookie'

const TokenKey = 'jwt-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  Cookies.remove('csrftoken')
  return Cookies.remove(TokenKey)
}
