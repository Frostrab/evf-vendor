import React from 'react'
import Paper from '../components/Card'
import Table from '../components/table'
import Button from '../components/button/button'
import Styled from 'styled-components'
import PopoverIcon from '../components/popover/'
import { Input, Card, Row, Col } from 'antd'

const Title = Styled.h2`
    font-size: ${props => props.size}
    padding: 10px
    color: ${props => props.color || '#000000'}
`
const TitleTab = Styled.div`
    background-color:#fff
    border-radius: 10px;
    border: 1px solid  #27b6ba
    margin-bottom: 3px
`
const MasterList = () => (
  <React.Fragment>
    <TitleTab>
      <Title size="30px">ประเมินผลการปฏิบัติงานผู้รับจ้าง</Title>
    </TitleTab>
    <div style={{ display: 'flex', height: 250 }}>
      <div
        style={{
          backgroundColor: '#fff',
          marginBottom: 30,
          marginTop: 30,
          marginLeft: '2.5%',
          marginRight: '5%',
          width: '45%',
          borderRadius: '10px',
          border: '1px solid  #fff',
        }}
      >
        <div style={{ padding: '50px' }}>
          <span style={{ display: 'flex', fontSize: 16 }}>
            <div
              style={{ display: 'flex', alignItems: 'center', width: '100px' }}
            >
              ชื่อ Vendor <i style={{ color: 'red' }}>*</i>
            </div>
            <div style={{ marginLeft: 10 }}>
              <Input value="ทดสอบ" readOnly />
            </div>
          </span>
          <span style={{ display: 'flex', fontSize: 16 }}>
            <div
              style={{ display: 'flex', alignItems: 'center', width: '100px' }}
            >
              รอบการประเมิน
            </div>
            <div style={{ marginLeft: 10 }}>
              <Input value="ทดสอบ" readOnly />
            </div>
          </span>
          <span style={{ display: 'flex', fontSize: 16 }}>
            <div
              style={{ display: 'flex', alignItems: 'center', width: '100px' }}
            >
              เริ่มต้น-สิ้นสุด
            </div>
            <div style={{ marginLeft: 10 }}>
              <Input value="ทดสอบ" readOnly />
            </div>
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#456',
          marginBottom: 30,
          marginTop: 30,
          width: '45%',
          padding: '30px',
          borderRadius: '10px',
          border: '1px solid  #fff',
        }}
      >
        <Row gutter={16} style={{ display: 'flex', justifyContent: 'center' }}>
          <Col span={9}>
            <Card
              style={{ fontSize: 20, height: 130 }}
              bodyStyle={{ padding: '25px' }}
            >
              <div />
              <div>คะแนนรวม</div>
              <div style={{ fontSize: 50, color: '#3f8600' }}>0</div>
              <p />
            </Card>
          </Col>
          <Col span={9}>
            <Card style={{ height: 130 }} bodyStyle={{ padding: '0px' }}>
              <span style={{ float: 'right', fontSize: 20 }}>
                <PopoverIcon />
              </span>
              <div style={{ padding: '25px' }}>
                <div style={{ fontSize: 20 }}>เกรด</div>
                <div
                  style={{
                    fontSize: 50,
                    color: '#cf1322',
                    textAlign: 'center',
                  }}
                >
                  C
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
    <Paper>
      <Table />
      <span style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="approve">Submit</Button>
      </span>
    </Paper>
  </React.Fragment>
)
export default MasterList
