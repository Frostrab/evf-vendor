import React from 'react'
import { Drawer } from 'antd'

export const DrawerTemplate = props => {
  return (
    <Drawer
      title={props.title}
      width={props.width}
      onClose={e => props.handleOpenDrawer(false)}
      visible={props.visible}
      maskClosable={false}
    >
      {props.children}
    </Drawer>
  )
}
