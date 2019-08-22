import React, { useState } from 'react'
import { Layout, Spin, Drawer } from 'antd'
import HeaderTab from './Header'
import MenuList from './MenuList'
import LogoTab from './Logo'
import axios from 'axios'
import './style.css'
const { Sider, Content } = Layout
const getMenu = () => axios.get(`http://localhost:4000/login`)
const Index = props => {
  const [collapsed, setCollapsed] = useState(true)
  const [menu, setMenu] = useState([])
  const [userLogin, setUserLogin] = useState([])
  const [spinLoading, setLoading] = useState(true)
  const [rootKey, setRootKey] = useState([])
  const [showDrawer, setShowDrawer] = useState(false)
  const [systenName] = useState('SPE System')
  React.useEffect(() => {
    getMenu().then(res => {
      const { menu, employee } = res.data
      const data = []
      menu.map(item => data.push(item.name))
      if (window.innerWidth > 480) setCollapsed(false)
      if (window.innerWidth < 480) setCollapsed(true)
      setMenu(menu)
      setUserLogin(employee)
      setLoading(false)
      setRootKey(data)
    })
  }, [])
  const toggle = () => {
    setCollapsed(!collapsed)
    setShowDrawer(true)
  }
  const onClose = () => {
    setShowDrawer(false)
  }

  return (
    <Spin spinning={spinLoading} delay={0}>
      <Layout>
        {window.innerWidth > 480 ? (
          <Sider
            trigger={null}
            collapsible
            collapsedWidth="0"
            collapsed={collapsed}
            width={256}
            // theme={'light'}
            style={{
              backgroundColor: '#F7F7F8',
              height: '100vh',
            }}
          >
            <LogoTab logoText={systenName} />
            <MenuList menu={menu} rootSubmenuKeys={rootKey} />
          </Sider>
        ) : (
          <Drawer
            title={systenName}
            placement={'left'}
            closable={false}
            onClose={onClose}
            visible={showDrawer}
            bodyStyle={{ padding: 0 }}
          >
            <MenuList menu={menu} rootSubmenuKeys={rootKey} />
          </Drawer>
        )}
        <Layout>
          <HeaderTab toggle={toggle} user={userLogin} />
          <Content style={styleForAnt.content}>{props.children}</Content>
        </Layout>
      </Layout>
    </Spin>
  )
}
export default Index
const styleForAnt = {
  content: {
    margin: '7px 10px',
    padding: 0,
    background: '#f0f2f5',
    minHeight: '60vh',
  },
}
