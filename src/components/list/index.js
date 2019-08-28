import React from 'react'
import { List, Avatar } from 'antd'
import styled from 'styled-components'
import Button from '../../components/button/button'

const ListControl = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5px;
`
export const ListData = props => (
  <ListControl>
    <List
      itemLayout={props.itemLayout || 'horizontal'}
      dataSource={props.data || []}
      bordered={props.bordered}
      style={{
        backgroundColor: '#fff',
        width: '100%',
      }}
      renderItem={item => (
        <List.Item
          actions={[
            <div>
              {props.view ? (
                <span style={{ marginRight: 5 }}>
                  <Button type={'view'}>View</Button>
                </span>
              ) : (
                ''
              )}
              {props.edit ? (
                <span style={{ marginRight: 5 }}>
                  <Button type={'edit'}>Edit</Button>
                </span>
              ) : (
                ''
              )}
              {props.delete ? (
                <span style={{ marginRight: 5 }}>
                  <Button type={'delete'}>Delete</Button>
                </span>
              ) : (
                ''
              )}
              {props.preview ? (
                <span style={{ marginRight: 5 }}>
                  <Button type={'preview'}>Preview</Button>
                </span>
              ) : (
                ''
              )}
              {props.approve ? (
                <span style={{ marginRight: 5 }}>
                  <Button type={'approve'}>Approve</Button>
                </span>
              ) : (
                ''
              )}
              {props.reject ? (
                <span style={{ marginRight: 5 }}>
                  <Button type={'reject'}>Reject</Button>
                </span>
              ) : (
                ''
              )}
            </div>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar icon="user" />}
            title={<div>{item.title || ''}</div>}
            description={item.description || ''}
          />
        </List.Item>
      )}
    />
  </ListControl>
)
