import React, { useState } from 'react'
import { Paper, Button, DrawerTemplate, TableChange } from '../../../components'
import { Form, Input, Popconfirm, Icon, message, Table } from 'antd'
const Performance = props => {
  const { getFieldDecorator } = props.form
  const [formLayout, setTypeDisplay] = useState('')
  const [DrawerWidth, setDrawerWidth] = useState(0)
  const [responsive, setResponsive] = useState(false)
  const [setMessageVisible] = useState(false)

  const [data] = useState([
    {
      id: 0,
      KPITH:
        'งานออกแบบมีความชัดเจนเหมาะสมต่อการใช้งานและspec ตรงตามความต้องการ',
      ShotTextTH: 'shortText',
      KPIEN: '',
      ShotTextEN: 'shortText',
    },
    {
      id: 1,
      KPITH: ' แผนการดำเนินงานสอดคล้อง และตรงตามความต้องการ',
      ShotTextTH: 'shortText',
      KPIEN: '',
      ShotTextEN: 'shortText',
    },
  ])
  const [columns, setColumns] = useState([
    {
      title: '',
      dataIndex: 'test',
      width: '3%',
    },
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
      width: '27%',
      render: (text, record) => (
        <span>
          <Button
            onClick={() => handleOpenDrawer(true, record, 'display')}
            type="view"
          >
            แสดง
          </Button>
          <Button
            onClick={() => handleOpenDrawer(true, record, 'edit')}
            type="edit"
          >
            แก้ไข
          </Button>
          <Popconfirm
            title={'คุณต้องการลบ ตัวชี้วัด :' + text.KPITH}
            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
            onConfirm={confirm}
            onCancel={cancel}
            okText="ใช่"
            cancelText="ไม่ใช่"
          >
            <Button type="delete">ลบ</Button>
          </Popconfirm>
        </span>
      ),
    },
  ])
  const [visible, setVisible] = useState(false)
  React.useEffect(() => {
    if (window.innerWidth >= 1024) {
      setTypeDisplay('horizontal')
      setDrawerWidth('60%')
      setResponsive(false)
    } else {
      setResponsive(true)
      setTypeDisplay('Vertical')
      setDrawerWidth('90%')
      // const sliceColumns = columns.slice (-2);
      // setColumns (sliceColumns);
    }
  }, [columns, setDrawerWidth])
  const confirm = () => {
    setMessageVisible(false)
    message.success('Next step.')
  }

  const cancel = () => {
    setMessageVisible(false)
    message.error('Click on cancel.')
  }
  const handleOpenDrawer = async (status, data, mode) => {
    await setVisible(status)
  }
  return (
    <React.Fragment>
      <Paper title={'ตัวชี้วัด'}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%' }}>
            <Button
              style={styles.button}
              onClick={e => {
                handleOpenDrawer(true)
              }}
              type={'add'}
            >
              เพิ่มตัวชี้วัด
            </Button>
            <span>
              <TableChange
                columns={columns}
                data={data}
                size={responsive === true ? 'small' : 'medium'}
              />
            </span>
          </div>
        </div>
        <br />
        <br />

        <DrawerTemplate
          title={'รายละเอียด'}
          visible={visible}
          width={DrawerWidth}
          handleOpenDrawer={handleOpenDrawer}
          deleteButton={responsive}
        >
          <div style={{ color: '#000000', marginBottom: 5 }}>
            {' '}
            {/* <Form layout={formLayout}>
              <Form.Item
                label="ชื่อตัวชี้วัดภาษาไทย"
                {...formItemLayout}
                style={{marginBottom: 10}}
              >
                {getFieldDecorator ('gradeTH', {
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
                }) (<Input placeholder="กรุณากรอก ชื่อตัวชี้วัดภาษาไทย" />)}
              </Form.Item>
              <Form.Item
                label="ชื่อย่อตัวชี้วัดภาษาไทย"
                {...formItemLayout}
                style={{marginBottom: 10}}
              >
                {getFieldDecorator ('gradeTH', {
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
                }) (<Input placeholder="กรุณากรอก ชื่อย่อตัวชี้วัดภาษาไทย" />)}
              </Form.Item>{' '}
              <Form.Item
                label="ชื่อตัวชี้วัดภาษาอังกฤษ"
                {...formItemLayout}
                style={{marginBottom: 10}}
              >
                {getFieldDecorator ('gradeTH', {
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
                }) (<Input placeholder="กรุณากรอก ชื่อตัวชี้วัดภาษาอังกฤษ" />)}
              </Form.Item>{' '}
              <Form.Item
                label="ชื่อย่อตัวชี้วัดภาษาอังกฤษ"
                {...formItemLayout}
                style={{marginBottom: 10}}
              >
                {getFieldDecorator ('gradeTH', {
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
                }) (
                  <Input placeholder="กรุณากรอก ชื่อย่อตัวชี้วัดภาษาอังกฤษ" />
                )}
              </Form.Item>
            </Form> */}
          </div>
        </DrawerTemplate>
      </Paper>
    </React.Fragment>
  )
}
const WrappedPerformanceForm = Form.create({ name: 'performance' })(Performance)
export default WrappedPerformanceForm
const styles = {
  button: {
    width: '140px',
    height: '40px',
  },
}
