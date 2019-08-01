import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
}

const makeField = Component => ({
  input,
  meta,
  children,
  hasFeedback,
  label,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid
  return (
    <FormItem
      {...formItemLayout}
      label={label}
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </FormItem>
  )
}

const AInput = makeField(Input)
const Login = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        label="First Name"
        name="firstName"
        component={AInput}
        placeholder="First Name"
        hasFeedback
      />

      <Field
        label="Last Name"
        name="lastName"
        component={AInput}
        placeholder="Last Name"
      />

      <FormItem {...tailFormItemLayout}>
        <Button
          type="primary"
          disabled={pristine || submitting}
          htmlType="submit"
          style={{ marginRight: '10px' }}
        >
          Submit
        </Button>

        <Button disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </FormItem>
    </Form>
  )
}

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  return errors
}

export default reduxForm({
  form: 'login', // a unique identifier for this form
  validate,
})(Login)
