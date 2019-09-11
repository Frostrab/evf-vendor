import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  WrappedLevelPointForm,
  TableChange,
} from '../../../components'

const LevelPoint = () => {
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
      <Paper title={'ระดับคะแนน'}>
        <span style={{ marginLeft: '20%' }}>
          <Button
            width="200px"
            height="40px"
            onClick={e => {
              handleOpenDrawer(true)
            }}
            type={'submit'}
          >
            เพิ่มระดับคะแนน
          </Button>
        </span>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 1000, justifyContent: 'center' }}>
            <TableChange columns={columns} data={data} />
          </div>
        </div>
        {/* <ListData
          header={'ชื่อ ระดับคะแนน (Levelpoint)'}
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
          title={'รายละเอียด'}
          visible={visible}
          width={'50%'}
          handleOpenDrawer={handleOpenDrawer}
        >
          <WrappedLevelPointForm handleDrawerClose={() => setVisible(false)} />
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}
export default LevelPoint
