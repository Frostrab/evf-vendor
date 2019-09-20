import React, { useState } from 'react'
import {
  Paper,
  Button,
  DrawerTemplate,
  EditableTablePerformanceGroup,
  TableChange,
} from '../../../components'
import { Select, Input, Col, Row } from 'antd'
const { Option } = Select

const PerformanceGroup = () => {
  const [data, setData] = useState([
    {
      KPIGroupTH: 'การจัดทำรายงาน',
      description: 'จัดทำรายงานเอกสาร',
    },
    {
      KPIGroupTH: 'การประสานงาน',
      description: 'ประสานงานกับฝ่ายที่เกี่ยวข้อง',
    },
  ])
  const [columns] = useState([
    {
      title: 'ชื่อกลุ่มตัวชี้วัดภาษาไทย',
      dataIndex: 'KPIGroupTH',
      key: 'name',
      width: '30%',
    },
    {
      title: 'ชื่อกลุ่มตัวชี้วัดภาษาอังกฤษ',
      dataIndex: 'KPIGroupEN',
      key: 'age',
      width: '30%',
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
        <span style={{ marginLeft: '10%' }}>
          <Button
            width="140px"
            height="40px"
            onClick={e => {
              handleOpenDrawer(true)
            }}
            type={'submit'}
          >
            เพิ่มกลุ่มตัวชี้วัด
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
          width={'80%'}
          handleOpenDrawer={handleOpenDrawer}
        >
          <div style={{ color: '#000000', marginBottom: 5 }}>
            {' '}
            <Row gutter={24}>
              <Col
                className="gutter-row"
                span={5}
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
                span={5}
                style={{ textAlign: 'right' }}
              >
                <div className="gutter-box">
                  <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>
                    *
                  </i>
                  <label>ชื่อย่อกลุ่มตัวชี้วัดภาษาไทย :</label>
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
          <div style={{ color: '#000000', marginBottom: 5, marginTop: 5 }}>
            {' '}
            <Row gutter={24}>
              <Col
                className="gutter-row"
                span={5}
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
                span={5}
                style={{ textAlign: 'right' }}
              >
                <div className="gutter-box">
                  <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>
                    *
                  </i>
                  <label>ชื่อย่อกลุ่มตัวชี้วัดภาษาอังกฤษ :</label>
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
          <EditableTablePerformanceGroup />
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}

export default PerformanceGroup
