import { notification } from 'antd'

const Notification = (title, message, type) => {
  //type = "warning" || "succress" || "error"
  notification[type || 'error']({
    message: title || 'ข้อความ',
    description: message || 'ทดสอบ',
    onClick: () => {
      console.log('Notification Clicked!')
    },
    duration: 2,
  })
}

export default Notification
