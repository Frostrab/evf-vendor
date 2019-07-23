import React from 'react'
import { Layout, Icon } from 'antd'
const { Header } = Layout
const HeaderTab = props => (
  <Header
    style={{
      background: '#fff',
      padding: 0,
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <Icon
      className="trigger"
      type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={props.toggle}
      style={{
        marginTop: 20,
        marginLeft: 5,
      }}
    />
    <div>test</div>
  </Header>
)
export default HeaderTab
