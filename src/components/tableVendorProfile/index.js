import React from 'react'
import { Table, Divider, Tag } from 'antd'
import { Button } from '../../components'

const columns = [
  {
    title: 'ครั้งที่',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'คะแนนที่ได้',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'เกณฑ์การประเมินที่ได้',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </span>
    ),
  },
  {
    title: '',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button type="delete">ลบ</Button>
      </span>
    ),
  },
]

const data = [
  {
    key: '1',
    name: 'ครั้งที่ 1',
    age: 60,
    address: 'New York No. 1 Lake Park',
    tags: ['ดี'],
  },
  {
    key: '2',
    name: 'ครั้งที่ 2',
    age: 22,
    address: 'London No. 1 Lake Park',
    tags: ['ควรปรับปรุง'],
  },
  {
    key: '3',
    name: 'ครั้งที่ 3',
    age: 80,
    address: 'Sidney No. 1 Lake Park',
    tags: ['ดีมาก'],
  },
]
export const TableVendorProfile = props => {
  return <Table columns={columns} dataSource={data} />
}
