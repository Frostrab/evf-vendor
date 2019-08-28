import React from 'react'
import { Select } from 'antd'

const { Option } = Select
const SelecList = props => {
  return (
    <Select
      defaultValue={props.defaultValue}
      style={{ width: props.width }}
      onChange={props.onChange}
    >
      {props.dataSelect.map(item => (
        <Option value={item.id}>{item.name}</Option>
      ))}
    </Select>
  )
}
export default SelecList
