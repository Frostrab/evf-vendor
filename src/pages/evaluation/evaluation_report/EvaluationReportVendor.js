import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  WrappedNomalForm,
} from '../../../components'
const EvaluationReportVendor = () => {
  const [data, setData] = useState([
    {
      title: 'ต้นปี',
      description: 'ประเมิน ต้นปี',
    },
    {
      title: 'กลางปี',
      description: 'ประเมิน กลางปี',
    },
  ])
  const [visible, setVisible] = useState(false)
  const handleOpenDrawer = (a, data) => {
    setVisible(a)
  }
  return (
    <React.Fragment>
      <Paper title={'Template แบบประเมิน'}>
        <Button
          onClick={e => {
            handleOpenDrawer(true)
          }}
          type={'add'}
        >
          เพิ่ม
        </Button>
        <ListData
          header={'ชื่อ Template'}
          data={data}
          width={'650px'}
          size={'small'}
          bordered={true}
          icon={'layout'}
          openDrawer={handleOpenDrawer}
          view
          edit
          copy
        />
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

export default EvaluationReportVendor
