import React from 'react'
import { Table } from 'antd'
export const TableChange = props => {
  return (
    <div style={{ marginTop: 20 }}>
      <Table columns={props.columns} dataSource={props.data} size={'small'} />
    </div>
  )
}
