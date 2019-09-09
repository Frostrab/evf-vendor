import React from 'react'
import { Drawer } from 'antd'
import { Button } from '../../components'
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
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }}
      >
        <Button
          type={'close'}
          onClick={e => props.handleOpenDrawer(false)}
          style={{ marginRight: 8 }}
        >
          ปิด
        </Button>
      </div>
    </Drawer>
  )
}
