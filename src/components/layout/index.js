import React, { useState } from 'react'
import { Layout, Spin, Drawer } from 'antd'
import HeaderTab from './Header'
import MenuList from './MenuList'
import LogoTab from './Logo'
import axios from 'axios'
import './style.css'
const { Sider } = Layout
const getMenu = () => axios.get(`/login`)
const Index = props => {
  const [collapsed, setCollapsed] = useState(true)
  const [menu, setMenu] = useState([
    {
      name: 'Inbox',
      displayOnly: false,
      url: '/Inbox',
      icon: 'inbox',
      parent: null,
    },
    {
      name: 'ใบประเมินผู้ขาย',
      displayOnly: false,
      url: '/Evaluation_Group',
      icon: 'file-text',
      parent: [
        {
          name: 'การจัดการ',
          icon: 'file-protect',
          displayOnly: false,
          url: '/Evaluation_Group/Evaluation_MGT_Group',
          parent: [
            {
              name: 'ประเมินผู้ขาย',
              icon: 'file-protect',
              displayOnly: false,
              url: '/Evaluation_Group/Evaluation_MGT_Group/Evaluation',
              parent: null,
            },
            {
              name: 'ภาพรวมประเมินผู้ขาย',
              icon: 'file-protect',
              displayOnly: false,
              url: '/Evaluation_Group/Evaluation_MGT_Group/SummaryEvaluation',
              parent: null,
            },
          ],
        },
        {
          name: 'รายงาน',
          icon: 'file-pdf',
          displayOnly: false,
          url: '/Evaluation_Group/Evaluation_RP_Group',
          parent: [
            {
              name: 'รายงานสรุปผลการประเมิน',
              icon: 'file-pdf',
              displayOnly: false,
              url:
                '/Evaluation_Group/Evaluation_RP_Group/EvaluationReportSummary',
              parent: null,
            },
            {
              name: 'หนังสือผลการประเมินผู้ขาย',
              icon: 'file-pdf',
              displayOnly: false,
              url:
                '/Evaluation_Group/Evaluation_RP_Group/EvaluationReportVendor',
              parent: null,
            },
          ],
        },
        {
          name: 'ติดตั้ง',
          icon: 'download',
          displayOnly: false,
          url: '/Evaluation_Group/Evaluation_Setup_Group',
          parent: [
            {
              name: 'ตัวชี้วัด',
              icon: 'tag',
              displayOnly: false,
              url: '/Evaluation_Group/Evaluation_Setup_Group/Performance',
              parent: null,
            },
            {
              name: 'กลุ่มตัวชี้วัด',
              icon: 'tags',
              displayOnly: false,
              url: '/Evaluation_Group/Evaluation_Setup_Group/PerformanceGroup',
              parent: null,
            },
            {
              name: 'ระยะเวลาประเมิน',
              icon: 'pull-request',
              displayOnly: false,
              url: '/Evaluation_Group/Evaluation_Setup_Group/Period',
              parent: null,
            },
            {
              name: 'เกณฑ์การประเมิน',
              icon: 'dashboard',
              displayOnly: false,
              url: '/Evaluation_Group/Evaluation_Setup_Group/Grade',
              parent: null,
            },
            {
              name: 'ระดับคะแนน',
              icon: 'line-chart',
              displayOnly: false,
              url: '/Evaluation_Group/Evaluation_Setup_Group/LevelPoint',
              parent: null,
            },
            {
              name: 'หลักเกณฑ์',
              icon: 'sliders',
              displayOnly: false,
              url: '/Evaluation_Group/Evaluation_Setup_Group/Criteria',
              parent: null,
            },
            {
              name: 'Template แบบประเมิน',
              icon: 'layout',
              displayOnly: false,
              url:
                '/Evaluation_Group/Evaluation_Setup_Group/EvaluationTemplate',
              parent: null,
            },
          ],
        },
      ],
    },
    {
      name: 'ผู้ขาย',
      icon: 'team',
      displayOnly: false,
      url: '/Vendor_Group',
      parent: [
        {
          name: 'ข้อมูลผู้ขาย',
          icon: 'idcard',
          displayOnly: false,
          url: '/Vendor_Group/VendorProfile',
          parent: null,
        },
        {
          name: 'คัดเลือกผู้ขาย',
          icon: 'solution',
          displayOnly: false,
          url: '/Vendor_Group/VendorFilter',
          parent: null,
        },
      ],
    },
    {
      name: 'ข้อมูลส่วนกลาง',
      icon: 'bank',
      displayOnly: false,
      url: '/CentralSetting',
      parent: [
        {
          name: 'ปฎิทินวันหยุด',
          icon: 'calendar',
          displayOnly: false,
          url: '/CentralSetting/HolidayCalendar',
          parent: null,
        },
        {
          name: 'ตั้งค่าผู้อนุมัติ',
          icon: 'user-add',
          displayOnly: false,
          url: '/CentralSetting/Approval',
          parent: null,
        },
      ],
    },
    {
      name: 'กำหนดสิทธิ์การใช้งาน',
      icon: 'setting',
      displayOnly: false,
      url: '/Authorization',
      parent: [
        {
          name: 'จัดการสิทธิ์การใช้งานระบบ',
          icon: 'security-scan',
          displayOnly: false,
          url: '/Authorization/RoleManagement',
          parent: null,
        },
        {
          name: 'กำหนดสิทธิ์ผู้ใช้งาน',
          icon: 'eye',
          displayOnly: false,
          url: '/Authorization/UserRole',
          parent: null,
        },
        {
          name: 'สิทธิ์ข้ามบริษัท',
          icon: 'tool',
          displayOnly: false,
          url: '/Authorization/AuthorityCompany',
          parent: null,
        },
      ],
    },
  ])
  const [userLogin, setUserLogin] = useState({
    empNo: '001754',
    firstNameTH: 'สัญชัย',
    lastNameTH: 'ต้นพุดซา',
    comCode: '10000001',
    orgId: '10001416',
    positionId: '20000641',
  })
  const [spinLoading, setLoading] = useState(true)
  const [rootKey, setRootKey] = useState([])
  const [showDrawer, setShowDrawer] = useState(false)
  const [systenName] = useState('SPE System')
  React.useEffect(() => {
    // getMenu ().then (res => {
    //   const {menu, employee} = res.data;
    const data = []
    menu.map(item => data.push(item.name))
    if (window.innerWidth > 480) setCollapsed(false)
    if (window.innerWidth < 480) setCollapsed(true)
    setMenu(menu)
    // setUserLogin (employee);
    setLoading(false)
    setRootKey(data)
    // });
  }, [menu])
  const toggle = () => {
    setCollapsed(!collapsed)
    setShowDrawer(true)
  }
  const onClose = () => {
    setShowDrawer(false)
  }

  return (
    <Spin spinning={spinLoading} delay={0}>
      <Layout>
        {window.innerWidth > 480 ? (
          <Sider
            trigger={null}
            collapsible
            collapsedWidth="0"
            collapsed={collapsed}
            width={256}
            // theme={'light'}
            style={{
              backgroundColor: '#F7F7F8',
              height: '100vh',
            }}
          >
            <LogoTab logoText={systenName} />
            <MenuList menu={menu} rootSubmenuKeys={rootKey} />
          </Sider>
        ) : (
          <Drawer
            title={systenName}
            placement={'left'}
            closable={false}
            onClose={onClose}
            visible={showDrawer}
            bodyStyle={{ padding: 0 }}
          >
            <MenuList menu={menu} rootSubmenuKeys={rootKey} />
          </Drawer>
        )}
        <Layout>
          <div style={{ background: '#d9d9d9', minHeight: '100vh' }}>
            <HeaderTab toggle={toggle} user={userLogin} />
            <div style={{ padding: '20px' }}>
              <span style={styleForAnt.content}>{props.children}</span>
            </div>
          </div>
        </Layout>
      </Layout>
    </Spin>
  )
}
export default Index
const styleForAnt = {
  content: {
    minHeight: '80vh',
  },
}
