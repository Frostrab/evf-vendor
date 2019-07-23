import React from 'react'
import styled from 'styled-components'
const Logo = styled.div`
  height: 58px;
  background: rgba(255, 255, 255, 0.2);
  margin: 3px;
`
const LogoTab = props => <Logo>{props.logoText}</Logo>
export default LogoTab
