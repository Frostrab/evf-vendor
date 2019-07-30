import React from 'react'
import { Layout, Icon } from 'antd'
import Styled from 'styled-components'
const { Header } = Layout
const UserLogin = Styled.div`
  margin-right:5px
`
const styleForAnt = {
  header: {
    background: '#fff',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    marginTop: 20,
    marginLeft: 5,
    fontSize: '20px',
  },
}
const HeaderTab = props => (
  <Header style={styleForAnt.header}>
    <Icon
      className="trigger"
      type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={props.toggle}
      style={styleForAnt.icon}
    />
    <UserLogin>
      {props.user.firstNameTH} {props.user.lastNameTH}
    </UserLogin>
  </Header>
)
export default HeaderTab
