import React from 'react'
import { Rate } from 'antd'
const RateScore = props => {
  const [desc, setDesc] = React.useState([
    'terrible',
    'bad',
    'normal',
    'good',
    'wonderful',
  ])
  const [value, setValue] = React.useState(0)
  const handleChange = value => {
    setValue(value)
    console.log(value)
  }
  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} count={3} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
  )
}
export default RateScore
