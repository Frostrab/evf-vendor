import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  EditableTableCriteria,
} from '../../../components'
import { Row, Col, Input } from 'antd'
const Criteria = () => {
  const [data, setData] = useState([
    {
      title: 'หลักเกณฑ์สำหรับกลางปี',
      description: 'หลักเกณฑ์สำหรับกลางปี',
    },
    {
      title: 'หลักเกณฑ์สำหรับปลายปี',
      description: 'หลักเกณฑ์สำหรับปลายปี',
    },
  ])
  const [visible, setVisible] = useState(false)
  const handleOpenDrawer = (a, data) => {
    setVisible(a)
  }
  return (
    <React.Fragment>
      <Paper title={'หลักเกณฑ์การประเมิน(Criteria)'}>
        <Button
          onClick={e => {
            handleOpenDrawer(true)
          }}
          type={'add'}
        >
          เพิ่ม
        </Button>
        <ListData
          header={'ชื่อ หลักเกณฑ์การประเมิน(Criteria)'}
          data={data}
          width={'650px'}
          size={'small'}
          bordered={true}
          icon={'layout'}
          openDrawer={handleOpenDrawer}
          view
          edit
        />
        <DrawerTemplate
          title={'รายละเอียด'}
          visible={visible}
          width={'50%'}
          handleOpenDrawer={handleOpenDrawer}
        >
          <div style={{ color: '#000000', marginBottom: 50 }}>
            {' '}
            <Row gutter={24}>
              <Col
                className="gutter-row"
                span={8}
                style={{ textAlign: 'right' }}
              >
                <div className="gutter-box">
                  <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>
                    *
                  </i>
                  <label>ชื่อหลักเกณฑ์ :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={16}
                style={{ textAlign: 'right' }}
              >
                <div className="gutter-box">
                  <Input />
                </div>
              </Col>
            </Row>
          </div>
          <EditableTableCriteria />
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}

export default Criteria
