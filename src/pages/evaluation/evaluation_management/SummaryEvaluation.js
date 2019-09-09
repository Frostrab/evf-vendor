import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  FormSummaryVendor,
} from '../../../components'
import { Select } from 'antd'
const { Option } = Select
const SummaryEvaluation = () => {
  const [data, setData] = useState([
    {
      title: 'leaderplanet',
      description: 'ประเมิน ต้นปี',
    },
    {
      title: 'leaderplanet',
      description: 'ประเมิน กลางปี',
    },
  ])
  const [visible, setVisible] = useState(false)
  const handleOpenDrawer = (a, data) => {
    setVisible(a)
  }
  return (
    <React.Fragment>
      <Paper title={'ภาพรวมประเมินผู้ขาย'}>
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
          <div style={{ marginLeft: 5 }}>
            <Button type="view">ค้นหา</Button>
          </div>
        </div>
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
          header={'ชื่อผู้ขาย'}
          data={data}
          width={'650px'}
          size={'small'}
          bordered={true}
          icon={'layout'}
          openDrawer={handleOpenDrawer}
          view
        />
        <DrawerTemplate
          title={'ชื่อผ้ขาย'}
          visible={visible}
          width={'80%'}
          handleOpenDrawer={handleOpenDrawer}
        >
          <FormSummaryVendor></FormSummaryVendor>
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}

export default SummaryEvaluation
