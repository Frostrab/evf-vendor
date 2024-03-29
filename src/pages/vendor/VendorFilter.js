import React, { useState } from 'react'
import {
  DrawerTemplate,
  Paper,
  Button,
  TableVendorFillter,
  TableChange,
} from '../../components'
import { Select, Col, Row, Input } from 'antd'

const { Option } = Select
const VendorFilter = () => {
  const [columns] = useState([
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // width: '30%',
    },
    // {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   key: 'age',
    //   width: '20%',
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    //   width: '20%',
    // },
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
  const [data, setData] = useState([
    {
      name: 'leaderplanet',
      description: 'งานบริการ',
    },
    {
      name: 'leaderplanet',
      description: 'งานบริการ',
    },
  ])
  const [visible, setVisible] = useState(false)
  const handleOpenDrawer = (a, data) => {
    setVisible(a)
  }
  return (
    <div>
      <Paper title={'คัดเลือกผู้ขาย(Vendor Fillter)'}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            borderStyle: 'solid',
            borderColor: '#bfbfbf',
            borderWidth: '2px',
            padding: 10,
            marginBottom: 7,
          }}
        >
          <div style={{ marginRight: 10 }}>
            <label style={{ marginRight: 10 }}>เลือกปี</label>
            <Select style={{ width: 120 }} placeholder="เลือกปีที่ต้องการ">
              <Option value="jack">2562</Option>
              <Option value="lucy">2561</Option>
              <Option value="Yiminghe">2560</Option>
            </Select>
          </div>
          <div>
            <label style={{ marginRight: 10 }}>เลือกรอบการประเมิน</label>
            <Select
              style={{ width: 120 }}
              placeholder="เลือกครั้งที่ต้องการการ"
            >
              <Option value="jack">ครั้งที่ 1</Option>
              <Option value="lucy">ครั้งที่ 2</Option>
            </Select>
          </div>
        </div>
        <span style={{ marginLeft: '10%' }}>
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
          header={'คัดเลือกผู้ขาย(Vendor Fillter)'}
          data={data}
          width={'650px'}
          size={'small'}
          bordered={true}
          icon={'line-chart'}
          openDrawer={handleOpenDrawer}
          view
          edit
        /> */}
        <DrawerTemplate
          title={'คัดเลือกผู้ขาย'}
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
                  <label>บริษัท :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={16}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Select defaultValue="lucy" style={{ width: 300 }}>
                    <Option value="jack">Comp1</Option>
                    <Option value="lucy">Comp2</Option>
                    <Option value="Yiminghe">Comp3</Option>
                  </Select>
                </div>
              </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: 5 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ textAlign: 'right' }}
              >
                <div className="gutter-box">
                  <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>
                    *
                  </i>
                  <label>WeightingKey :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={16}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Select defaultValue="lucy" style={{ width: 300 }}>
                    <Option value="jack">A1</Option>
                    <Option value="lucy">A2</Option>
                    <Option value="Yiminghe">A3</Option>
                  </Select>
                </div>
              </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: 5 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ textAlign: 'right' }}
              >
                <div className="gutter-box">
                  <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>
                    *
                  </i>
                  <label>เงื่อนไข :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={16}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Select defaultValue="lucy" style={{ width: 300 }}>
                    <Option value="jack">Condition A</Option>
                    <Option value="lucy">Condition B</Option>
                    <Option value="Yiminghe">อื่นๆ</Option>
                  </Select>
                </div>
              </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: 5 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ textAlign: 'right' }}
              >
                <div className="gutter-box">
                  <i style={{ color: 'red', fontSize: 20, marginRight: 4 }}>
                    *
                  </i>
                  <label>ยอดรับ(บาท) :</label>
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
          <TableVendorFillter />
        </DrawerTemplate>
      </Paper>
    </div>
  )
}

export default VendorFilter
