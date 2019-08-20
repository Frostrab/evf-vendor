import React from 'react'
import Paper from '../components/Card'
import List from '../components/list'
import Table from '../components/table'
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
]
const MasterList = () => (
  <React.Fragment>
    <Paper title={'Page1'}>
      <List data={data} view edit bordered />
      <Table />
    </Paper>
  </React.Fragment>
)
export default MasterList
