import React, { useState } from 'react'
import {
  DrawerTemplate,
  Paper,
  ListData,
  Button,
  TableVendorFillter,
} from '../../components'
import { Select, Col, Row, Input } from 'antd'

const { Option } = Select
const VendorFilter = () => {
  const [data, setData] = useState([
    {
      title: 'leaderplanet',
      description: 'งานบริการ',
    },
    {
      title: 'leaderplanet',
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
            borderColor: 'black',
            borderWidth: '2px',
            padding: 10,
            marginBottom: 7,
          }}
        >
          <div style={{ marginRight: 10 }}>
            <label style={{ marginRight: 10 }}>เลือกปีที่ต้องการ</label>
            <Select style={{ width: 120 }} placeholder="เลือกปีที่ต้องการ">
              <Option value="jack">2562</Option>
              <Option value="lucy">2561</Option>
              <Option value="Yiminghe">2560</Option>
            </Select>
          </div>
          <div>
            <label style={{ marginRight: 10 }}>เลือกครั้งที่ต้องการการ</label>
            <Select
              style={{ width: 120 }}
              placeholder="เลือกครั้งที่ต้องการการ"
            >
              <Option value="jack">ครั้งที่ 1</Option>
              <Option value="lucy">ครั้งที่ 2</Option>
            </Select>
          </div>
        </div>
        <Button
          onClick={e => {
            handleOpenDrawer(true)
          }}
          type={'add'}
        >
          เพิ่ม
        </Button>
        <ListData
          header={'คัดเลือกผู้ขาย(Vendor Fillter)'}
          data={data}
          width={'650px'}
          size={'small'}
          bordered={true}
          icon={'line-chart'}
          openDrawer={handleOpenDrawer}
          view
          edit
        />
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
                  <label>ประเภทผู้ขาย :</label>
                </div>
              </Col>
              <Col
                className="gutter-row"
                span={16}
                style={{ textAlign: 'left' }}
              >
                <div className="gutter-box">
                  <Select defaultValue="lucy" style={{ width: 300 }}>
                    <Option value="jack">Type 1</Option>
                    <Option value="lucy">Type 2</Option>
                    <Option value="Yiminghe">Type 3</Option>
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
                    <Option value="Yiminghe">Condition C</Option>
                  </Select>
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
