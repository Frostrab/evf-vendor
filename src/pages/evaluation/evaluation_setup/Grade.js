import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  WrappedGradeForm,
} from '../../../components'
const Grade = () => {
  const [data, setData] = useState([
    {
      title: '5 ระดับ',
      description: '5 ระดับคะแนน',
    },
    {
      title: '3 ระดับ',
      description: '3 ระดับคะแนน',
    },
  ])
  const [visible, setVisible] = useState(false)
  const handleOpenDrawer = (a, data) => {
    setVisible(a)
  }
  return (
    <React.Fragment>
      <Paper title={'เกณฑ์การประเมิน (Grade) '}>
        <Button
          onClick={e => {
            handleOpenDrawer(true)
          }}
          type={'add'}
        >
          เพิ่ม
        </Button>
        <ListData
          header={'ชื่อ เกณฑ์การประเมิน (Grade)'}
          data={data}
          width={'650px'}
          size={'small'}
          bordered={true}
          icon={'line-chart'}
          openDrawer={handleOpenDrawer}
          view
          edit
        />
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
