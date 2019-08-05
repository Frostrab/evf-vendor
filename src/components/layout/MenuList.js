import React, { useState, useEffect } from 'react'
import { Menu, Icon, Tooltip } from 'antd'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const { SubMenu } = Menu
const MenuList = props => {
  const [openKeys] = useState(['Inbox'])
  const { menu, rootSubmenuKeys } = props

  const onOpenChange = openKeys => {
    console.log(`openKeys`, openKeys)
    console.log(`test`, rootSubmenuKeys)
    // const latestOpenKey = openKeys.find (key => openKeys.indexOf (key) === -1);
    // if (rootSubmenuKeys.indexOf (latestOpenKey) === -1) {
    //   setOpenKey ({openKeys});
    // } else {
    //   setOpenKey (latestOpenKey ? [latestOpenKey] : []);
    // }
  }
  return (
    <Router>
      <Menu
        // defaultSelectedKeys={openKeys}
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
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
                        <Tooltip placement="topLeft" title={lastMenu.name}>
                          <Link to={lastMenu.name} />
                          <Icon type="user" />
                          <span>{lastMenu.name}</span>
                        </Tooltip>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ) : (
                  <Menu.Item key={subMenuTab.name}>
                    <Tooltip placement="topLeft" title={subMenuTab.name}>
                      <Link to={subMenuTab.name} />
                      <Icon type="user" />
                      <span>{subMenuTab.name}</span>
                    </Tooltip>
                  </Menu.Item>
                )
              )}
            </SubMenu>
          ) : (
            <Menu.Item key={mainMenu.name}>
              <Tooltip placement="topLeft" title={mainMenu.name}>
                <Link to={mainMenu.url} />
                <Icon type="user" />
                <span>{mainMenu.name}</span>
              </Tooltip>
            </Menu.Item>
          )
        )}
      </Menu>
    </Router>
  )
}
export default MenuList
