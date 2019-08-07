import { userConstants } from '../constant'

export const reducer = ({ state = {}, action }) => {
  switch (action.type) {
    case userConstants.AUTH_USER:
      return { ...state, error: '', authenticated: true, data: action.payload }
    case userConstants.UNAUTH_USER:
      return { ...state, authenticated: false }
    case userConstants.AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
