import React from 'react'
import { Table } from 'antd'
export const TableChange = props => {
  return (
    <div style={{ marginTop: 20, fontSize: '20px' }}>
      <Table
        columns={props.columns}
        dataSource={props.data}
        expandIconColumnIndex={0}
        expandIconAsCell={false}
        size={props.size}
        expandedRowRender={props.expandedRow}
        indentSize={24}
      />
    </div>
  )
}
