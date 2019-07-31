import React from 'react'
import { Card } from 'antd'
const styled = {
  card: {
    textAlign: 'center',
  },
}
const Background = props => {
  return <Card style={styled.card}>{props.children}</Card>
}
export default Background
