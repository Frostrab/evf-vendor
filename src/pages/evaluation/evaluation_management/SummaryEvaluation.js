import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const SummaryEvaluation = props => {
  const onChange = value => {
    setValue(value)
    console.log(`selected ${value}`)
  }
  const [value, setValue] = React.useState(0)
  const [list, setList] = React.useState([
    {
      id: 0,
      name: 'ศูนย์',
    },
    {
      id: 1,
      name: 'หนึ่งง',
    },
    {
      id: 2,
      name: 'สอง',
    },
    {
      id: 3,
      name: 'สาม',
    },
  ])
  return (
    <div>
      <Select
        showSearch
        value={value}
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
      >
        {list.map(item => (
          <Option value={item.id}>{item.name}</Option>
        ))}
      </Select>
      <h2>{value}</h2>
    </div>
  )
}

export default SummaryEvaluation
