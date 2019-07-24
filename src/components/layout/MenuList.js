import React from 'react'
import { Menu, Icon } from 'antd'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const { SubMenu } = Menu
const MenuList = props => {
  const { menu } = props
  return (
    <Menu defaultSelectedKeys={['1']} mode="inline">
      {console.log(menu)}
      {menu.map((mainMenu, key) =>
        mainMenu.parent ? (
          mainMenu.displayOnly ? (
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
                  subMenuTab.displayOnly ? (
                    <SubMenu
                      key={subMenuTab.name}
                      title={
                        <span>
                          <Icon type="mail" />
                          <span> {subMenuTab.name}</span>
                        </span>
                      }
                    >
                      {subMenuTab.parent.map((lastMenu, key) =>
                        lastMenu.displayOnly ? (
                          <Menu.Item key={lastMenu.name}>
                            <Icon type="user" />
                            <span>{lastMenu.name}</span>
                          </Menu.Item>
                        ) : (
                          false
                        )
                      )}
                    </SubMenu>
                  ) : (
                    <Menu.Item key={subMenuTab.name}>
                      <Icon type="user" />
                      <span>{subMenuTab.name}</span>
                    </Menu.Item>
                  )
                ) : (
                  <Menu.Item key={subMenuTab.name}>
                    <Icon type="user" />
                    <span>{subMenuTab.name}</span>
                  </Menu.Item>
                )
              )}
            </SubMenu>
          ) : (
            <Menu.Item key={mainMenu.name}>
              <Icon type="user" />
              <span>{mainMenu.name}</span>
            </Menu.Item>
          )
        ) : (
          <Menu.Item key={mainMenu.name}>
            <Icon type="user" />
            <span>{mainMenu.name}</span>
          </Menu.Item>
        )
      )}
    </Menu>
  )
}
export default MenuList
