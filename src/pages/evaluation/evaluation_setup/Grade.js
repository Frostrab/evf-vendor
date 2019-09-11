import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  WrappedGradeForm,
  TableChange,
} from '../../../components'
const Grade = () => {
  const [data, setData] = useState([
    {
      name: '5 ระดับ',
      description: '5 ระดับคะแนน',
    },
    {
      name: '3 ระดับ',
      description: '3 ระดับคะแนน',
    },
  ])
  const [columns] = useState([
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
    },
    {
      title: '',
      key: 'action',
      width: '30%',
      render: (text, record) => (
        <span>
          <Button onClick={() => handleOpenDrawer(true)} type="view">
            แสดง
          </Button>
          <Button onClick={() => handleOpenDrawer(true)} type="edit">
            แก้ไข
          </Button>
        </span>
      ),
    },
  ])
  const [visible, setVisible] = useState(false)
  const handleOpenDrawer = (a, data) => {
    setVisible(a)
  }
  return (
    <React.Fragment>
      <Paper title={'ชื่อเกณฑ์การประเมิน'}>
        <span style={{ marginLeft: '20%' }}>
          <Button
            width="100px"
            height="40px"
            onClick={e => {
              handleOpenDrawer(true)
            }}
            type={'submit'}
          >
            เพิ่ม
          </Button>
        </span>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 1000, justifyContent: 'center' }}>
            <TableChange columns={columns} data={data} />
          </div>
        </div>
        {/* <ListData
          header={'ชื่อ เกณฑ์การประเมิน (Grade)'}
          data={data}
          width={'800px'}
          size={'small'}
          bordered={true}
          icon={'line-chart'}
          openDrawer={handleOpenDrawer}
          view
          edit
        /> */}
        <br />
        <br />
        <DrawerTemplate
          title={'เพิ่ม เกณฑ์การประเมิน'}
          visible={visible}
          width={'50%'}
          handleOpenDrawer={handleOpenDrawer}
        >
          <WrappedGradeForm handleDrawerClose={() => setVisible(false)} />
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}

export default Grade
