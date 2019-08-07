import axios from 'axios'
import History from '../helper'
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../constant'

const ROOT_URL = 'http://localhost:4000'

export const signinUser = ({ username, password }) => {
  return async dispatch => {
    try {
      const res = await axios.get(`${ROOT_URL}/login`)
      await dispatch(siginSuccress(res.data))
      await localStorage.setItem('token', res.data.token)
      await History.push('/Inbox')
    } catch (e) {
      await dispatch(signError(e.data.errorMessage))
    }
  }
}
export const signOutUser = () => {
  localStorage.removeItem('token')
  return { type: UNAUTH_USER }
}
export const siginSuccress = data => {
  return {
    type: AUTH_USER,
    payload: data,
  }
}
export const signError = error => {
  return {
    type: AUTH_ERROR,
    payload: error,
  }
}
