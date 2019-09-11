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
      <Paper title={'หลักเกณฑ์(Criteria)'}>
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
          header={'ชื่อ หลักเกณฑ์(Criteria)'}
          data={data}
          width={'800px'}
          size={'small'}
          bordered={true}
          icon={'layout'}
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
                span={8}
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
