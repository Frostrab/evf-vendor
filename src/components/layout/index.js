import React from 'react'
import { Layout, Spin } from 'antd'
import HeaderTab from './Header'
import MenuList from './MenuList'
import LogoTab from './Logo'
import axios from 'axios'
import './style.css'
const { Sider, Content } = Layout
const getMenu = () => axios.get(`http://localhost:4000/menu`)

const Index = props => {
  const [collapsed, setCollapsed] = React.useState(false)
  const [menu, setMenu] = React.useState([])
  const [userLogin, setUserLogin] = React.useState([])
  const [spinLoading, setLoading] = React.useState(true)
  React.useEffect(() => {
    getMenu().then(res => {
      setMenu(res.data.menu)
      setUserLogin(res.data.employee)
      setLoading(false)
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
          style={{
            height: '100vh',
          }}
        >
          <LogoTab logoText={'test'} />
          <MenuList menu={menu} />
        </Sider>
        <Layout>
          <HeaderTab toggle={toggle} user={userLogin} />
          <Content style={styleForAnt.content}>
            {/* <div style={{background: '#fff', textAlign: 'center'}}> */}
            {props.children}
            {/* </div> */}
          </Content>
        </Layout>
      </Layout>
    </Spin>
  )
}
export default Index
