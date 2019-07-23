import React from 'react'
import { Layout } from 'antd'
import HeaderTab from './Header'
import MenuList from './MenuList'
import LogoTab from './Logo'
import './style.css'
const { Sider, Content } = Layout
const Index = props => {
  const [collapsed, setCollapsed] = React.useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={230}
        style={{
          height: '100vh',
          // position: 'fixed',
          // left: 0,
        }}
      >
        <LogoTab logoText={'test'} />
        <MenuList />
      </Sider>
      <Layout>
        <HeaderTab toggle={toggle} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
            Content
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
export default Index
