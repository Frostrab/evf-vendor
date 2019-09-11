import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  EditableTablePeriod,
  TableChange,
} from '../../../components'
import { Select, Row, Col, Input } from 'antd'

const { Option } = Select
const Period = () => {
  const [data, setData] = useState([
    {
      name: 'ปี 2562',
      description: 'ระยะเวลาการประเมินผล',
    },
    {
      name: 'ปี 2561',
      description: 'ระยะเวลาการประเมินผล',
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
      <Paper title={'ระยะเวลาการประเมิน'}>
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
          header={'ชื่อ รอบการประเมิน(Period)'}
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
                  <label>ปี :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={16}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Select defaultValue="2562" style={{ width: 120 }}>
                    <Option value="2562">2562</Option>
                    <Option value="2561">2561</Option>
                    <Option value="2560">2560</Option>
                  </Select>
                </div>
              </Col>
            </Row>
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
                  <label>ชื่อรอบการประเมิน :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Input />
                </div>
              </Col>
            </Row>
          </div>
          <EditableTablePeriod />
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}

export default Period
