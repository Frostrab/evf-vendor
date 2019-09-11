import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  TableChange,
} from '../../../components'
import { Input, Col, Row } from 'antd'
const Performance = () => {
  const [data, setData] = useState([
    {
      KPITH:
        'งานออกแบบมีความชัดเจนเหมาะสมต่อการใช้งานและspec ตรงตามความต้องการ',
      KPIEN: '',
    },
    {
      KPITH: ' แผนการดำเนินงานสอดคล้อง และตรงตามความต้องการ',
      KPIEN: '',
    },
  ])
  const [columns] = useState([
    {
      title: 'ชื่อตัวชี้วัดภาษาไทย',
      dataIndex: 'KPITH',
      key: 'name',
      width: '30%',
    },
    {
      title: 'ชื่อตัวชีวัดภาษาอังกฤษ',
      dataIndex: 'KPIEN',
      key: 'age',
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
          <Button onClick={() => handleOpenDrawer(true)} type="delete">
            ลบ
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
      <Paper title={'ตัวชี้วัด'}>
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
          header={'ชื่อ ตัวชี้วัด(Performence)'}
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
                  <label>ชื่อตัวชี้วัดภาษาไทย :</label>
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
                  <label>ชื่อตัวชี้วัดภาษาอังกฤษ:</label>
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
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}

export default Performance
