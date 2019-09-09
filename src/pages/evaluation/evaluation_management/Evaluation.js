import React, { useState } from 'react'
import {
  Paper,
  Button,
  EveForm,
  ModalTemplate,
  TableEve,
} from '../../../components'
import { Tabs } from 'antd'

const { TabPane } = Tabs
function callback(key) {
  console.log(key)
}
const Evaluation = () => {
  const [viewSelect, setViewSelect] = useState()
  const [openModal, setOpenModal] = useState(false)
  const [visible, setVisible] = useState(false)
  const handleOpenDrawer = (a, data) => {
    setVisible(a)
  }
  const openPreview = selected => {
    setOpenModal(true)
    setViewSelect(selected)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }
  return (
    <React.Fragment>
      <ModalTemplate
        title={viewSelect}
        visible={openModal}
        handleClose={handleModalClose}
        width={'80%'}
      >
        <EveForm />
      </ModalTemplate>
      <Paper title={'ประเมินผู้ขาย'}>
        <Tabs onChange={callback} type="card">
          <TabPane tab="รายการ การประเมิน" key="1">
            <div style={{ padding: 50 }}>
              <TableEve openPreview={openPreview} />
            </div>
          </TabPane>
          <TabPane tab="รายการ การประเมินทั้งหมด" key="2">
            <div style={{ padding: 50 }}>
              <TableEve />
            </div>
          </TabPane>
        </Tabs>
        ,
      </Paper>
    </React.Fragment>
  )
}

export default Evaluation
