import React, { useState } from 'react'
import {
  Paper,
  Button,
  ListData,
  DrawerTemplate,
  FormSummaryVendor,
  TableChange,
  EVACreateForm,
} from '../../../components'
import { Select, Card } from 'antd'
import { Link } from 'react-router-dom'
const { Option } = Select
const SummaryEvaluation = () => {
  const [data, setData] = useState([
    {
      name: 'leaderplanet',
      description: 'ประเมิน ต้นปี',
    },
    {
      name: 'leaderplanet',
      description: 'ประเมิน กลางปี',
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
      width: '20%',
      render: (text, record) => (
        <span>
          <Link to="/spe-sum">
            <Button type="view">แสดง</Button>
          </Link>
          <Button>ส่งอนุมัติ</Button>
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
      <Paper title={'ภาพรวมประเมินผู้ขาย'}>
        <div
          style={{
            padding: 10,
            marginBottom: 7,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', width: 800 }}>
            <div
              style={{
                height: '100%',
                width: 40,
                display: 'flex',
                alignItems: 'center',
                marginRight: '65px',
              }}
            >
              <div>
                <Button type="add" onClick={() => handleOpenDrawer(true)}>
                  สร้างใบประเมิน
                </Button>
              </div>
            </div>
            <div style={{ float: 'right' }}>
              <Card
                style={{
                  width: 800,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div style={{ marginRight: 10 }}>
                  <label style={{ marginRight: 42, width: 100 }}>
                    เลือกปีที่ต้องการ
                  </label>
                  <Select
                    style={{ width: 200 }}
                    placeholder="เลือกปีที่ต้องการ"
                  >
                    <Option value="jack">2562</Option>
                    <Option value="lucy">2561</Option>
                    <Option value="Yiminghe">2560</Option>
                  </Select>
                </div>
                <div>
                  <label style={{ marginRight: 10 }}>
                    เลือกครั้งที่ต้องการการ
                  </label>
                  <Select
                    style={{ width: 200 }}
                    placeholder="เลือกครั้งที่ต้องการการ"
                  >
                    <Option value="jack">ครั้งที่ 1</Option>
                    <Option value="lucy">ครั้งที่ 2</Option>
                  </Select>
                </div>
                <div style={{ marginLeft: 5 }}>
                  <Button type="view">ค้นหา</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
        {/* <span style={{ marginLeft: '20%' }}>
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
        </span> */}
        {/* <ListData
          header={'ชื่อผู้ขาย'}
          data={data}
          width={'650px'}
          size={'small'}
          bordered={true}
          icon={'layout'}
          openDrawer={handleOpenDrawer}
          view
        /> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 1000, justifyContent: 'center' }}>
            <TableChange columns={columns} data={data} />
          </div>
        </div>
        <DrawerTemplate
          title={'สร้างใบประเมิน'}
          visible={visible}
          width={'50%'}
          handleOpenDrawer={handleOpenDrawer}
        >
          <EVACreateForm />
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}

export default SummaryEvaluation
