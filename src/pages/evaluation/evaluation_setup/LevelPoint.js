import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  WrappedLevelPointForm,
} from '../../../components'

const LevelPoint = () => {
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
      <Paper title={'ระดับคะแนน (LevelPoint)'}>
        <span style={{ marginLeft: '20%' }}>
          <Button
            width="100px"
            height="40px"
            onClick={e => {
              handleOpenDrawer(true)
            }}
            type={'submit'}
          >
            เพิ่มระดับคะแนน
          </Button>
        </span>
        <ListData
          header={'ชื่อ ระดับคะแนน (Levelpoint)'}
          data={data}
          width={'800px'}
          size={'small'}
          bordered={true}
          icon={'line-chart'}
          openDrawer={handleOpenDrawer}
          view
          edit
        />
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
