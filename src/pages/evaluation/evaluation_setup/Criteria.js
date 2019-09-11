import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  EditableTableCriteria,
  TableChange,
} from '../../../components'
import { Row, Col, Input } from 'antd'
const Criteria = () => {
  const [data, setData] = useState([
    {
      name: 'หลักเกณฑ์สำหรับกลางปี',
      description: 'หลักเกณฑ์สำหรับกลางปี',
    },
    {
      name: 'หลักเกณฑ์สำหรับปลายปี',
      description: 'หลักเกณฑ์สำหรับปลายปี',
    },
  ])
  const [columns] = useState([
    {
      title: 'ชื่อหลักเกณฑ์',
      dataIndex: 'name',
      key: 'name',
      // width: '30%',
    },
    {
      title: '',
      key: 'action',
      width: '20%',
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
      <Paper title={'หลักเกณฑ์'}>
        <span style={{ marginLeft: '10%' }}>
          <Button
            width="150px"
            height="40px"
            onClick={e => {
              handleOpenDrawer(true)
            }}
            type={'submit'}
          >
            เพิ่มหลักเกณฑ์
          </Button>
        </span>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 1000, justifyContent: 'center' }}>
            <TableChange columns={columns} data={data} />
          </div>
        </div>
        {/* <ListData
          header={'ชื่อ หลักเกณฑ์(Criteria)'}
          data={data}
          width={'800px'}
          size={'small'}
          bordered={true}
          icon={'layout'}
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
