import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  WrappedNomalForm,
  TableChange,
} from '../../../components'
const EvaluationTemplate = () => {
  const [data, setData] = useState([
    {
      name: 'ต้นปี',
      description: 'ประเมิน ต้นปี',
    },
    {
      name: 'กลางปี',
      description: 'ประเมิน กลางปี',
    },
  ])
  const [columns] = useState([
    {
      title: 'ชื่อ Template',
      dataIndex: 'name',
      key: 'name',
      // width: '30%',
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
          <Button onClick={() => handleOpenDrawer(true)} type="copy">
            คัดลอก
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
      <Paper title={'Template แบบประเมิน'}>
        <span style={{ marginLeft: '10%' }}>
          <Button
            width="150px"
            height="40px"
            onClick={e => {
              handleOpenDrawer(true)
            }}
            type={'submit'}
          >
            เพิ่ม Template
          </Button>
        </span>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 1000, justifyContent: 'center' }}>
            <TableChange columns={columns} data={data} />
          </div>
        </div>
        {/* <ListData
          header={'ชื่อ Template'}
          data={data}
          width={'800px'}
          size={'small'}
          bordered={true}
          icon={'layout'}
          openDrawer={handleOpenDrawer}
          view
          edit
          copy
        /> */}
        <br />
        <br />
        <DrawerTemplate
          title={'รายละเอียด'}
          visible={visible}
          width={'50%'}
          handleOpenDrawer={handleOpenDrawer}
        >
          <WrappedNomalForm handleDrawerClose={() => setVisible(false)} />
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}

export default EvaluationTemplate
