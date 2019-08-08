import { userAuthen } from '../constant'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case userAuthen.AUTH_USER:
      return { ...state, error: '', authenticated: true, data: action.payload }
    case userAuthen.UNAUTH_USER:
      return { ...state, authenticated: false }
    case userAuthen.AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
