import React from 'react'
import Signin from '../components/Login'
import Bg from '../img/background_singha.png'
import 'antd/dist/antd.css'
import { createGlobalStyle } from 'styled-components'
import Background from '../components/Background'
const GlobalStyle = createGlobalStyle`
  body {
    background: url(${Bg}) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
  }
`
const LoginPage = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Signin />
    </React.Fragment>
  )
}
export default LoginPage
