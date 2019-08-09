import axios from 'axios'
export const loginService = {
  loginService: login,
}
const url = `http://localhost:4000/`
const login = (username, password) => {
  return axios.get(`${url}/login`).then(res => res)
}
