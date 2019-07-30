import React from 'react'
import { Menu, Icon } from 'antd'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const { SubMenu } = Menu
const MenuList = props => {
  const { menu } = props
  console.log(menu)
  return (
    <Router>
      <Menu defaultSelectedKeys={['1']} mode="inline">
        {menu.map((mainMenu, key) =>
          mainMenu.parent ? (
            <SubMenu
              key={mainMenu.name}
              title={
                <span>
                  <Icon type="mail" />
                  <span>{mainMenu.name}</span>
                </span>
              }
            >
              {mainMenu.parent.map((subMenuTab, key) =>
                subMenuTab.parent ? (
                  <SubMenu
                    key={subMenuTab.name}
                    title={
                      <span>
                        <Icon type="mail" />
                        <span> {subMenuTab.name}</span>
                      </span>
                    }
                  >
                    {subMenuTab.parent.map((lastMenu, key) => (
                      <Menu.Item key={lastMenu.name}>
                        <Link to="/test" />
                        <Icon type="user" />
                        <span>{lastMenu.name}</span>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ) : (
                  <Menu.Item key={subMenuTab.name}>
                    <Link to="/test" />
                    <Icon type="user" />
                    <span>{subMenuTab.name}</span>
                  </Menu.Item>
                )
              )}
            </SubMenu>
          ) : (
            <Menu.Item key={mainMenu.name}>
              <Link to="/test" />
              <Icon type="user" />
              <span>{mainMenu.name}</span>
            </Menu.Item>
          )
        )}
      </Menu>
    </Router>
  )
}
export default MenuList
