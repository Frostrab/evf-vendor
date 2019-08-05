import React from 'react'
import styled from 'styled-components'
const Logo = styled.div`
  height: 58px;
  background: rgba(255, 255, 255, 0.2);
  margin: 1px;
  display: flex;
  justify-content: center;
`
const InLogo = styled.span`
display: flex
align-items: center;
font-size: 30px
`
const LogoTab = props => (
  <Logo>
    <InLogo>{props.logoText}</InLogo>
  </Logo>
)
export default LogoTab
