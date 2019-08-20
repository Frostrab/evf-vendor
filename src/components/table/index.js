import React from 'react'
import { Rate } from 'antd'
import TableTab from './table'
import 'antd/dist/antd.css'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
const columnsDefinition = [
  {
    title: 'หัวข้อการประเมิน (Performance Item)',
    dataIndex: 'name',
    rowKey: 'name',
    width: '70%',
  },
  {
    title: `น้ำหนัก %Weight`,
    dataIndex: 'weight',
    width: '5%',
  },
  {
    title: 'ระดับคะแนน',
    dataIndex: 'point',
    width: '20%',
    render: (text, record) => <Rate tooltips={desc} value={0} />,
  },
  {
    title: `หมายเหตุ(Commnet) (ความคิดเห็นประกอบการให้คะแนน)`,
    dataIndex: 'comment',
    width: '5%',
  },
]

const data = []
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    number: 70,
    building: 'c',
    comment: 'test',
  })
}

class index extends React.Component {
  state = {
    columns: columnsDefinition,
    hiddenColumns: [],
  }
  componentWillMount() {
    const w = window.innerWidth
    if (window.innerWidth <= 320) {
      this.setState({
        columns: [this.state.columns[0]],
        hiddenColumns: [
          this.state.columns[1],
          this.state.columns[2],
          this.state.columns[3],
        ],
      })
      console.log('didmount', 320, `value :${window.innerWidth}`)
    } else if (window.innerWidth <= 480) {
      this.setState({
        columns: [this.state.columns[0]],
        hiddenColumns: [
          this.state.columns[1],
          this.state.columns[2],
          this.state.columns[3],
        ],
      })
      console.log('didmount', 480, `value :${window.innerWidth}`)
    } else if (window.innerWidth <= 768) {
      this.setState({
        columns: [
          this.state.columns[0],
          this.state.columns[1],
          this.state.columns[3],
        ],
        hiddenColumns: [this.state.columns[2], this.state.columns[5]],
      })
      console.log('didmount', 768, `value :${window.innerWidth}`)
    } else if (w <= 1024) {
      console.log('didmount', 1024, `value :${window.innerWidth}`)
    } else {
      console.log('didmount >', 1024, `value :${window.innerWidth}`)
    }
  }
  render() {
    let expandedRowRender = undefined
    if (this.state.hiddenColumns.length > 0) {
      expandedRowRender = this.renderExpandRow
    }
    console.log(`state`, this.state)
    return (
      <div>
        <div style={{ margin: '10px 10px 10px 10px' }}>
          <TableTab
            columns={this.state.columns}
            dataSource={data}
            size="small"
            pagination={{ defaultPageSize: 5 }}
            expandedRowRender={expandedRowRender}
          />
        </div>
      </div>
    )
  }
  renderExpandRow = (record, index, indent, expanded) => {
    console.log(`rec 2`, this.state.hiddenColumns[1], `state`, this.state)
    const line1 = this.state.hiddenColumns[1].title
    const line2 = this.state.hiddenColumns[2].title
    const line0 = this.state.hiddenColumns[0].title
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <span>
            <b>{line1} :</b>
          </span>
        </div>
        <div style={{ display: 'flex' }}>
          <span>
            <b>{line0} :</b>
          </span>
        </div>
        <div style={{ display: 'flex' }}>
          <span>
            <b>{line2} :</b>
          </span>
        </div>
      </div>
    )
  }
}

export default index
