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
  const [mediaSize, setMediaSize] = useState('')
  const [visible, setVisible] = useState(false)

  React.useEffect(() => {
    if (window.innerWidth > 1024) {
      setMediaSize('pc')
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      setMediaSize('tablat')
    } else if (window.innerWidth >= 480 && window.innerWidth <= 768) {
      setMediaSize('medium')
    } else {
      setMediaSize('mobile')
    }
  }, [])
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
        title={' '}
        visible={openModal}
        handleClose={handleModalClose}
        width={mediaSize === 'pc' || 'tablat' ? '90%' : '99%'}
      >
        <EveForm mediaSize={mediaSize} />
      </ModalTemplate>
      <Paper title={'ประเมินผู้ขาย'}>
        <Tabs onChange={callback} type="card">
          <TabPane tab="รายการการประเมิน" key="1">
            <div style={{ padding: 50 }}>
              <TableEve openPreview={openPreview} />
            </div>
          </TabPane>
          <TabPane tab="รายการการประเมินทั้งหมด" key="2">
            <div style={{ padding: 50 }}>
              <TableEve />
            </div>
          </TabPane>
        </Tabs>
      </Paper>
    </React.Fragment>
  )
}

export default Evaluation
