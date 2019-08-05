import React, { useState } from 'react'
import { Layout, Spin, Switch } from 'antd'
import HeaderTab from './Header'
import MenuList from './MenuList'
import LogoTab from './Logo'
import axios from 'axios'
import './style.css'
const { Sider, Content } = Layout
const getMenu = () => axios.get(`http://localhost:4000/menu`)
const Index = props => {
  const [collapsed, setCollapsed] = useState(false)
  const [menu, setMenu] = useState([])
  const [userLogin, setUserLogin] = useState([])
  const [spinLoading, setLoading] = useState(true)
  const [rootKey, setRootKey] = useState([])
  React.useEffect(() => {
    getMenu().then(res => {
      const { menu, employee } = res.data
      const data = []
      menu.map(item => data.push(item.name))
      setMenu(menu)
      setUserLogin(employee)
      setLoading(false)
      setRootKey(data)
    })
  }, [])
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  const styleForAnt = {
    content: {
      margin: '24px 16px',
      padding: 24,
      background: '#fff',
      minHeight: 280,
    },
  }
  return (
    <Spin spinning={spinLoading} delay={0}>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsedWidth="0"
          collapsed={collapsed}
          width={230}
          theme={'light'}
          style={{
            height: '100vh',
          }}
        >
          <LogoTab logoText={'test'} />
          <MenuList menu={menu} rootSubmenuKeys={rootKey} />
        </Sider>
        <Layout>
          <HeaderTab toggle={toggle} user={userLogin} />
          <Content style={styleForAnt.content}>{props.children}</Content>
        </Layout>
      </Layout>
    </Spin>
  )
}
export default Index
