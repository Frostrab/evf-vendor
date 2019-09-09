import React from 'react'
import { Table, Divider } from 'antd'
import { Button } from '..'
export const TableEve = props => {
  const [columns] = React.useState([
    {
      title: 'SPENumber',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Vendor',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
    },
    {
      title: '',
      key: 'tags',
      dataIndex: 'tags',
      width: '20%',
      render: tags => (
        <span>
          <Button type="view" onClick={() => props.openPreview('ประเมิน')}>
            แสดง
          </Button>
          <Button type="submit" onClick={() => props.openPreview('ประเมิน')}>
            ประเมิน
          </Button>
          <Button type="reject">ไม่ประเมิน</Button>
        </span>
      ),
    },
  ])
  const [data] = React.useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ])
  return <Table columns={columns} dataSource={data} />
}
