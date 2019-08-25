import React from 'react'
import { Popover, Icon, Table } from 'antd'
const columns = [
  {
    title: 'คะแนน',
    dataIndex: 'name',
  },
  {
    title: 'เกรด',
    dataIndex: 'age',
  },
  {
    title: 'ระดับ',
    dataIndex: 'address',
  },
]
const data = [
  {
    key: '1',
    name: '80 - 100	',
    age: 'A',
    address: 'ดีกว่ามาตราฐาน	',
  },
  {
    key: '2',
    name: '60 - 79	',
    age: 'B',
    address: 'ตามมาตราฐาน	',
  },
  {
    key: '3',
    name: '< 60	',
    age: 'C',
    address: 'ต่ำกว่ามาตราฐาน	',
  },
]
const content = <Table columns={columns} dataSource={data} pagination={false} />
class PopoverIcon extends React.Component {
  state = {
    visible: false,
  }

  hide = () => {
    this.setState({
      visible: false,
    })
  }

  handleVisibleChange = visible => {
    this.setState({ visible })
  }

  render() {
    return (
      <Popover
        placement="top"
        content={content}
        title="เกณฑ์การประเมิน"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Icon type="info-circle" />
      </Popover>
    )
  }
}
export default PopoverIcon
