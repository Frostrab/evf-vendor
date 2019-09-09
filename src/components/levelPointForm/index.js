import React, { useState } from 'react'
import { Form, Input, Select, Descriptions } from 'antd'
import { Button } from '../../components'

const { Option } = Select

const LevelPointForm = props => {
  const [descList, setDescList] = useState([
    { levelpoint: '5', textTH: 'ดีมาก', textEN: 'Execellent' },
    { levelpoint: '4', textTH: 'ดี', textEN: 'good' },
  ])
  const { getFieldDecorator } = props.form

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  }

  return (
    <React.Fragment>
      <Form {...formItemLayout}>
        <Form.Item label="ชื่อ Level Point">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={<span>ระดับคะแนน</span>}>
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={<span>Text TH</span>}>
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={<span>Text EN</span>}>
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            width="180px"
            height="30px"
            onClick={props.handleDrawerClose}
          >
            เพิ่มระดับคะแนน
          </Button>
        </div>
        <hr />
      </Form>
      {console.log(descList)}
      {descList.map(item => (
        <span>
          <Descriptions title={'ระดับ :' + item.levelpoint}>
            <Descriptions.Item label="Text TH">{item.textTH}</Descriptions.Item>
            <Descriptions.Item label="Text EN">{item.textEN}</Descriptions.Item>
          </Descriptions>
          <hr />
        </span>
      ))}
    </React.Fragment>
  )
}

export const WrappedLevelPointForm = Form.create({ name: 'levelpoint-form' })(
  LevelPointForm
)
