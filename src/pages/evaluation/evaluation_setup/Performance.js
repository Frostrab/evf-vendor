import React, { useState } from 'react'
import { Paper, Button, DrawerTemplate, TableChange } from '../../../components'
import { Form, Input, Col, Row } from 'antd'
const Performance = props => {
  const { getFieldDecorator } = props.form
  const [formLayout, setTypeDisplay] = useState('')
  const [DrawerWidth, setDrawerWidth] = useState(0)
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
      width: '35%',
    },
    {
      title: 'ชื่อตัวชีวัดภาษาอังกฤษ',
      dataIndex: 'KPIEN',
      key: 'age',
      width: '35%',
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
  React.useEffect(() => {
    if (window.innerWidth > 480) {
      setTypeDisplay('horizontal')
      setDrawerWidth('60%')
    } else {
      setTypeDisplay('Vertical')
      setDrawerWidth('90%')
    }
  }, [setDrawerWidth])
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 6 },
          wrapperCol: { span: 14 },
        }
      : null
  const handleOpenDrawer = (a, data) => {
    setVisible(a)
  }
  return (
    <React.Fragment>
      <Paper title={'ตัวชี้วัด'}>
        <span style={{ marginLeft: '10%' }}>
          <Button
            width="140px"
            height="40px"
            onClick={e => {
              handleOpenDrawer(true)
            }}
            type={'submit'}
          >
            เพิ่มตัวชี้วัด
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
          width={DrawerWidth}
          handleOpenDrawer={handleOpenDrawer}
        >
          <div style={{ color: '#000000', marginBottom: 5 }}>
            {' '}
            <Form layout={formLayout}>
              <Form.Item
                label="ชื่อตัวชี้วัดภาษาไทย"
                {...formItemLayout}
                style={{ marginBottom: 10 }}
              >
                {getFieldDecorator('gradeTH', {
                  rules: [
                    {
                      type: 'text',
                      message: 'กรุณากรอก ชื่อตัวชี้วัดภาษาไทย!',
                    },
                    {
                      required: true,
                      message: 'กรุณากรอก ชื่อตัวชี้วัดภาษาไทย!',
                    },
                  ],
                })(<Input placeholder="กรุณากรอก ชื่อตัวชี้วัดภาษาไทย" />)}
              </Form.Item>
              <Form.Item
                label="ชื่อย่อตัวชี้วัดภาษาไทย"
                {...formItemLayout}
                style={{ marginBottom: 10 }}
              >
                {getFieldDecorator('gradeTH', {
                  rules: [
                    {
                      type: 'text',
                      message: 'กรุณากรอก ชื่อย่อตัวชี้วัดภาษาไทย!',
                    },
                    {
                      required: true,
                      message: 'กรุณากรอก ชื่อย่อตัวชี้วัดภาษาไทย!',
                    },
                  ],
                })(<Input placeholder="กรุณากรอก ชื่อย่อตัวชี้วัดภาษาไทย" />)}
              </Form.Item>{' '}
              <Form.Item
                label="ชื่อตัวชี้วัดภาษาอังกฤษ"
                {...formItemLayout}
                style={{ marginBottom: 10 }}
              >
                {getFieldDecorator('gradeTH', {
                  rules: [
                    {
                      type: 'text',
                      message: 'กรุณากรอก ชื่อตัวชี้วัดภาษาอังกฤษ!',
                    },
                    {
                      required: true,
                      message: 'กรุณากรอก ชื่อตัวชี้วัดภาษาอังกฤษ!',
                    },
                  ],
                })(<Input placeholder="กรุณากรอก ชื่อตัวชี้วัดภาษาอังกฤษ" />)}
              </Form.Item>{' '}
              <Form.Item
                label="ชื่อย่อตัวชี้วัดภาษาอังกฤษ"
                {...formItemLayout}
                style={{ marginBottom: 10 }}
              >
                {getFieldDecorator('gradeTH', {
                  rules: [
                    {
                      type: 'text',
                      message: 'กรุณากรอก ชื่อย่อตัวชี้วัดภาษาอังกฤษ!',
                    },
                    {
                      required: true,
                      message: 'กรุณากรอก ชื่อย่อตัวชี้วัดภาษาอังกฤษ!',
                    },
                  ],
                })(
                  <Input placeholder="กรุณากรอก ชื่อย่อตัวชี้วัดภาษาอังกฤษ" />
                )}
              </Form.Item>
            </Form>
          </div>
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}
const WrappedPerformanceForm = Form.create({ name: 'performance' })(Performance)
export default WrappedPerformanceForm
