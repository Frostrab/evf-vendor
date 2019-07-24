import React from 'react'
import { Form, Icon, Input, Button } from 'antd'

const styled = {
  form: {
    maxWidth: '300px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
}
const Login = props => {
  const { getFieldDecorator } = props.form
  function handleSubmit(e) {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  return (
    <React.Fragment style={styled.content}>
      <Form onSubmit={handleSubmit} className="login-form" style={styled.form}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  )
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login)

export default WrappedNormalLoginForm
