import React from 'react'
import { Paper, TableTemplate, Button, PopoverIcon } from '../../components'
import Styled from 'styled-components'
import TableForm from '../table/index'
import { Input, Card, Row, Col } from 'antd'
import { Switch, Icon, Select } from 'antd'

const { Option } = Select

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
export const EveForm = () => (
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
          <span style={{ display: 'flex', fontSize: 16, marginTop: 5 }}>
            <div
              style={{ display: 'flex', alignItems: 'center', width: '100px' }}
            >
              ผู้ขาย <i style={{ color: 'red' }}>*</i>
            </div>
            <div style={{ marginLeft: 10, marginRight: 10 }}>
              <Input value="leaderplanet" readOnly />
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', width: '100px' }}
            >
              ประเภทงาน
            </div>
            <div style={{ marginLeft: 10 }}>
              <Select style={{ width: 100 }} mode="tags">
                <Option value="jack">งานโยธา</Option>
                <Option value="lucy">งานก่อสร้าง</Option>
                <Option value="Yiminghe">อื่นๆ</Option>
              </Select>
            </div>
          </span>
          <span style={{ display: 'flex', fontSize: 16, marginTop: 5 }}>
            <div
              style={{ display: 'flex', alignItems: 'center', width: '100px' }}
            >
              รอบการประเมิน
            </div>
            <div style={{ marginLeft: 10 }}>
              <Input value="รอบการประเมิน กลางปี" readOnly />
            </div>
          </span>
          <span style={{ display: 'flex', fontSize: 16, marginTop: 5 }}>
            <div
              style={{ display: 'flex', alignItems: 'center', width: '100px' }}
            >
              เริ่มต้น-สิ้นสุด
            </div>
            <div style={{ marginLeft: 10 }}>
              <Input value="1/1/2019 - 15/2/2019" readOnly />
            </div>
          </span>
          <span style={{ display: 'flex', fontSize: 16, marginTop: 5 }}>
            <div
              style={{ display: 'flex', alignItems: 'center', width: '100px' }}
            >
              ภาษา (Language)
            </div>
            <div style={{ marginLeft: 10 }}>
              <Switch checkedChildren="EN" unCheckedChildren="TH" />
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
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
    <Paper>
      <TableForm />
      <span style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="approve">Submit</Button>
      </span>
    </Paper>
  </React.Fragment>
)
