import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  WrappedNomalForm,
} from '../../../components'
const EvaluationTemplate = () => {
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
        <ListData
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
        />
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
