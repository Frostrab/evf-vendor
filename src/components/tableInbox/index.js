import React from 'react'
import { Table } from 'antd'
import { Button } from '../../components'
import { Link } from 'react-router-dom'
const columns = [
  {
    title: 'ชื่อผู้ขาย',
    dataIndex: 'name',
    width: '30%',
  },
  {
    title: 'คะแนนที่ได้',
    dataIndex: 'age',
    width: '30%',
  },
  {
    title: 'เกณฑ์การประเมิน',
    dataIndex: 'address',
    width: '20%',
  },
  {
    title: '',
    dataIndex: 'address',
    width: '20%',
    render: rec => (
      <span>
        <Link to="/spe-sum">
          <Button type="view">แสดง</Button>
        </Link>
        <Button type="approve">อนุมัติ</Button>
        <Button type="reject">ไม่อนุมัติ</Button>
      </span>
    ),
  },
]

const data = []
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `A`,
  })
}

export class TableInbox extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  }

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }

  render() {
    const { selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: 'all-data',
          text: 'Select All Data',
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(46).keys()], // 0...45
            })
          },
        },
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = []
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false
              }
              return true
            })
            this.setState({ selectedRowKeys: newSelectedRowKeys })
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = []
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true
              }
              return false
            })
            this.setState({ selectedRowKeys: newSelectedRowKeys })
          },
        },
      ],
    }
    return (
      <React.Fragment>
        <Button type="submit">อนุมัติ</Button>
        <Button type="reject">ไม่อนุมัติ</Button>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          size={'small'}
          style={{ marginTop: 10 }}
        />
        ;
      </React.Fragment>
    )
  }
}
