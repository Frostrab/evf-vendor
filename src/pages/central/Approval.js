import React from 'react'
import { Paper } from '../../components'
// import Paper from '../../components/Paper'
import { TableForm } from '../../components/table/table'
import Button from '../../components/button/button'
import Drawer from '../../components/Drawer'
import Select from '../../components/select'
const Approval = () => {
  const [visible, setVisible] = React.useState(false)
  const [selected, setSelected] = React.useState('detail')
  const [dataSelect] = React.useState([
    { id: 1, name: 'หนึ่ง' },
    { id: 2, name: 'สอง' },
  ])
  const handleOpenDrawer = (a, data) => {
    if (data === undefined) {
      setSelected('detail')
    } else {
      setSelected(data)
    }
    setVisible(a)
  }
  const [data, setData] = React.useState([
    {
      CompCode: '1',
      Org: 'Mike',
      Approve: '10 Downing Street',
    },
    {
      CompCode: '2',
      Org: 'John',
      Approve: '10 Downing Street',
    },
  ])
  const [columns, setColumns] = React.useState([
    {
      title: 'CompCode',
      dataIndex: 'CompCode',
      width: '30%',
      key: 'CompCode',
    },
    {
      title: 'Org',
      dataIndex: 'Org',
      key: 'Org',
      width: '20%',
    },
    {
      title: 'Approve',
      dataIndex: 'Approve',
      key: 'Approve',
      width: '20%',
    },
    {
      title: '',
      dataIndex: '',
      key: '',
      width: '20%',
      render: (text, record) => {
        return (
          <span>
            <Button
              onClick={e => handleOpenDrawer(true, record)}
              width="60px"
              height="50px"
              type="view"
            >
              View
            </Button>
            <Button
              onClick={e => handleOpenDrawer(true, record)}
              width="60px"
              height="50px"
              type="edit"
            >
              Edit
            </Button>
            <Button
              onClick={e => handleOpenDrawer(true, record)}
              width="60px"
              height="50px"
              type="delete"
            >
              Delete
            </Button>
          </span>
        )
      },
    },
  ])
  return (
    <React.Fragment>
      <Paper title="Approval">
        <Button
          onClick={e => handleOpenDrawer(true)}
          type="add"
          marginBottom="5px"
        >
          Add
        </Button>
        <Drawer
          title={selected === 'detail' ? selected : selected.CompCode}
          visible={visible}
          handleOpenDrawer={handleOpenDrawer}
        >
          <div>
            Company<label>*</label>
            <Select dataSelect={dataSelect} width={120} />
          </div>
        </Drawer>
        <TableForm columns={columns} dataSource={data} />
      </Paper>
    </React.Fragment>
  )
}

export default Approval
