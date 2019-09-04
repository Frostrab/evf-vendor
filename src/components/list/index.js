import React from 'react'
import { List, Avatar } from 'antd'
import styled from 'styled-components'
import { Button } from '../../components/button/button'

const ListControl = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5px;
`
export const ListData = props => (
  <React.Fragment>
    <ListControl>
      <List
        size={props.size}
        header={<h3>{props.header}</h3>}
        itemLayout={props.itemLayout || 'horizontal'}
        dataSource={props.data || []}
        bordered={props.bordered}
        style={{
          backgroundColor: '#fff',
          width: props.width,
        }}
        renderItem={item => (
          <List.Item
            actions={[
              <div>
                {console.log('item', item)}
                {props.view ? (
                  <span style={{ marginRight: 5 }}>
                    <Button type={'view'}>แสดง</Button>
                  </span>
                ) : (
                  ''
                )}
                {props.edit ? (
                  <span style={{ marginRight: 5 }}>
                    <Button type={'edit'}>แก้ไข</Button>
                  </span>
                ) : (
                  ''
                )}
                {props.delete ? (
                  <span style={{ marginRight: 5 }}>
                    <Button type={'delete'}>ลบ</Button>
                  </span>
                ) : (
                  ''
                )}
                {props.preview ? (
                  <span style={{ marginRight: 5 }}>
                    <Button type={'preview'}>ภาพตัวอย่าง</Button>
                  </span>
                ) : (
                  ''
                )}
                {props.approve ? (
                  <span style={{ marginRight: 5 }}>
                    <Button type={'approve'}>อนุมัติ</Button>
                  </span>
                ) : (
                  ''
                )}
                {props.reject ? (
                  <span style={{ marginRight: 5 }}>
                    <Button type={'reject'}>ไม่อนุมัติ</Button>
                  </span>
                ) : (
                  ''
                )}
                {props.copy ? (
                  <span style={{ marginRight: 5 }}>
                    <Button type={'copy'}>คัดลอก</Button>
                  </span>
                ) : (
                  ''
                )}
              </div>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  size={48}
                  icon={props.icon}
                  style={{
                    color: '#000000',
                    backgroundColor: '#fff',
                  }}
                />
              }
              title={<div style={{ fontSize: '20px' }}>{item.title || ''}</div>}
              description={item.description || ''}
            />
          </List.Item>
        )}
      />
    </ListControl>
  </React.Fragment>
)
