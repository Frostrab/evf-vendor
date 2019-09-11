import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  EditableTablePerformanceGroup,
  TableChange,
} from '../../../components'
import { Select, Input, Col, Row } from 'antd'
const { Option } = Select

const PerformanceGroup = () => {
  const [data, setData] = useState([
    {
      name: 'การจัดทำรายงาน',
      description: 'จัดทำรายงานเอกสาร',
    },
    {
      name: 'การประสานงาน',
      description: 'ประสานงานกับฝ่ายที่เกี่ยวข้อง',
    },
  ])
  const [columns] = useState([
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
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
      <Paper title={'กลุ่มตัวชี้วัด'}>
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 1000, justifyContent: 'center' }}>
            <TableChange columns={columns} data={data} />
          </div>
        </div>
        {/* <ListData
          header={'ชื่อ กลุ่มตัวชี้วัด (Performance Group)'}
          data={data}
          width={'800px'}
          size={'small'}
          bordered={true}
          icon={'layout'}
          openDrawer={handleOpenDrawer}
          view
          edit
          delete
        /> */}
        <br />
        <br />
        <DrawerTemplate
          title={'รายละเอียด'}
          visible={visible}
          width={'50%'}
          handleOpenDrawer={handleOpenDrawer}
        >
          <div style={{ color: '#000000', marginBottom: 5 }}>
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
                  <label>ชื่อกลุ่มตัวชี้วัดภาษาไทย:</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={16}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Input />
                </div>
              </Col>
            </Row>
          </div>
          <div style={{ color: '#000000', marginBottom: 5 }}>
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
                  <label>ชื่อกลุ่มตัวชี้วัดภาษาอังกฤษ :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={16}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Input />
                </div>
              </Col>
            </Row>
          </div>
          <div style={{ color: '#000000', marginBottom: 5 }}>
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
                  <label>SAP Field:</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={16}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Select defaultValue="1" style={{ width: 120 }}>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                  </Select>
                </div>
              </Col>
            </Row>
          </div>
          <EditableTablePerformanceGroup />
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}

export default PerformanceGroup
