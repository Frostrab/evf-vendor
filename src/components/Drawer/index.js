import React from 'react'
import { Drawer } from 'antd'

const DrawerTemplate = props => {
  return (
    <div>
      <Drawer
        title={props.title}
        width={props.width}
        onClose={e => props.handleOpenDrawer(false)}
        visible={props.visible}
      >
        {props.children}
      </Drawer>
    </div>
  )
}
export default DrawerTemplate
