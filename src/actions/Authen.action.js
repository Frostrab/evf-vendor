import axios from 'axios'
import { history } from '../helper'
import { userAuthen } from '../constant'

const ROOT_URL = 'http://localhost:4000'

export const signinUser = ({ username, password }) => {
  return async dispatch => {
    try {
      const res = await axios.get(`${ROOT_URL}/login`)
      await dispatch(siginSuccress(res.data))
      await localStorage.setItem('token', res.data.token)
      await history.push('/Inbox')
    } catch (e) {
      await dispatch(signError(e.data.errorMessage))
    }
  }
}
export const signOutUser = () => {
  localStorage.removeItem('token')
  return { type: userAuthen.UNAUTH_USER }
}
export const siginSuccress = data => {
  return {
    type: userAuthen.AUTH_USER,
    payload: data,
  }
}
export const signError = error => {
  return {
    type: userAuthen.AUTH_ERROR,
    payload: error,
  }
}
