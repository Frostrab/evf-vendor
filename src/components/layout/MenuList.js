import React from 'react'
import { Menu, Icon } from 'antd'
const { SubMenu } = Menu
const MenuList = props => {
  const { menu } = props
  return (
    <Menu defaultSelectedKeys={['1']} mode="inline">
      {console.log(menu)}
      {menu.map((mainMenu, key) =>
        mainMenu.children ? (
          mainMenu.display ? (
            <SubMenu
              key={mainMenu.name}
              title={
                <span>
                  <Icon type="mail" />
                  <span>{mainMenu.name}</span>
                </span>
              }
            >
              {mainMenu.children.map((subMenuTab, key) =>
                subMenuTab.children ? (
                  subMenuTab.display ? (
                    <SubMenu
                      key={subMenuTab.name}
                      title={
                        <span>
                          <Icon type="mail" />
                          <span> {subMenuTab.name}</span>
                        </span>
                      }
                    >
                      {subMenuTab.children.map((lastMenu, key) =>
                        lastMenu.display ? (
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
