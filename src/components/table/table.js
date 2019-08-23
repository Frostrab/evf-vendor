import React from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'

class TableForm extends React.Component {
  render() {
    return (
      <Table
        columns={this.props.columns}
        dataSource={this.props.dataSource}
        bordered
        rowClassName={() => 'responsive-row'}
        pagination={false}
        expandedRowRender={this.props.expandedRowRender}
        size="small"
      />
    )
  }
}
export default TableForm
