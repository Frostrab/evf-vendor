import React from 'react'
import { Card, Icon, Divider, Popover } from 'antd'
const content = (
  <div>
    <p>หมายเหตุ :</p>
  </div>
)
const CardList = list => {
  return (
    <Card
      headStyle={{ padding: 0 }}
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ marginLeft: 30 }}>{list}</div>
          <div>
            <Icon
              type="rollback"
              style={{ marginRight: 3, fontSize: '18px' }}
            />
            <Icon type="delete" style={{ marginRight: 3, fontSize: '18px' }} />
          </div>
        </div>
      }
      style={{ width: 300, marginRight: 10, marginBottom: 10 }}
    >
      <div>
        <p>อัตราส่วนคะแนน</p>
        <div>
          <label>ตัวชี้วัด 1</label>
          <Divider type="vertical" />
          <Icon type="profile" style={{ marginRight: 3, marginLeft: 3 }} />
          <label>32 คะแนน</label>
          <Divider type="vertical" />
          <Popover content={content} title="หมายเหตุ">
            <span style={{ cursor: 'pointer' }}>
              <Icon type="message" />
            </span>
          </Popover>
        </div>
        <div>
          <label>ตัวชี้วัด 2</label>
          <Divider type="vertical" />
          <Icon type="profile" style={{ marginRight: 3, marginLeft: 3 }} />
          <label>32 คะแนน</label>
          <Divider type="vertical" />
          <Icon type="message" />
        </div>
        <div>
          <label>ตัวชี้วัด 3</label>
          <Divider type="vertical" />
          <Icon type="profile" style={{ marginRight: 3, marginLeft: 3 }} />
          <label>32 คะแนน</label>
          <Divider type="vertical" />
          <Icon type="message" />
        </div>
        <div>
          <label>ตัวชี้วัด 4</label>
          <Divider type="vertical" />
          <Icon type="profile" style={{ marginRight: 3, marginLeft: 3 }} />
          <label>32 คะแนน</label>
          <Divider type="vertical" />
          <Icon type="message" />
        </div>
      </div>
    </Card>
  )
}
export const FormSummaryVendor = props => {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: 1000 }}>
          <div>
            <p>ผู้ขาย</p>
            <div style={{ display: 'flex' }}>
              <div
                style={{ width: '100px', textAlign: 'right', marginRight: 3 }}
              >
                <div>ชื่อผู้ขาย :</div>
              </div>
              <Icon type="user" style={{ marginRight: 3, marginLeft: 3 }} />
              <div>
                <label>leaderplanet</label>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{ width: '100px', textAlign: 'right', marginRight: 3 }}
              >
                <div>ประเภทผู้ขาย :</div>
              </div>
              <Icon type="user" style={{ marginRight: 3, marginLeft: 3 }} />
              <div>
                <label>งานบริการ</label>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{ width: '100px', textAlign: 'right', marginRight: 3 }}
              >
                <div>WeightingKey :</div>
              </div>
              <Icon type="user" style={{ marginRight: 3, marginLeft: 3 }} />
              <div>
                <label>A2</label>
              </div>
            </div>
          </div>
        </Card>
        <Card
          style={{ width: 1000 }}
          actions={[<Icon type="edit" key="edit" />]}
        >
          <div>
            <p>คะแนนรวม</p>
            <div style={{ display: 'flex' }}>
              <div
                style={{ width: '100px', textAlign: 'right', marginRight: 3 }}
              >
                <div>ตัวชี้วัด 1</div>
              </div>
              <Divider type="vertical" />

              <div>
                {' '}
                <Icon
                  type="profile"
                  style={{ marginRight: 3, marginLeft: 3 }}
                />
                32 คะแนน
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{ width: '100px', textAlign: 'right', marginRight: 3 }}
              >
                <div>ตัวชี้วัด 2</div>
              </div>
              <Divider type="vertical" />

              <div>
                {' '}
                <Icon
                  type="profile"
                  style={{ marginRight: 3, marginLeft: 3 }}
                />
                32 คะแนน
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{ width: '100px', textAlign: 'right', marginRight: 3 }}
              >
                <div>ตัวชี้วัด 3</div>
              </div>
              <Divider type="vertical" />

              <div>
                {' '}
                <Icon
                  type="profile"
                  style={{ marginRight: 3, marginLeft: 3 }}
                />
                32 คะแนน
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{ width: '100px', textAlign: 'right', marginRight: 3 }}
              >
                <div>ตัวชี้วัด 4</div>
              </div>
              <Divider type="vertical" />

              <div>
                {' '}
                <Icon
                  type="profile"
                  style={{ marginRight: 3, marginLeft: 3 }}
                />
                32 คะแนน
              </div>
            </div>
          </div>
        </Card>
        <Card style={{ width: 1000 }}>
          <div>
            <div
              style={{
                display: 'flex',
                height: '70px',
                justifyContent: 'center',
              }}
            >
              <div
                style={{ width: '100px', textAlign: 'right', marginRight: 3 }}
              >
                <div>คะแนนที่ได้ :</div>
              </div>
              <Divider type="vertical" />

              <div
                style={{
                  width: 40,
                  height: 40,
                  border: '1px solid black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '30px',
                }}
              >
                {' '}
                90{' '}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                height: '70px',
                justifyContent: 'center',
              }}
            >
              <div
                style={{ width: '100px', textAlign: 'right', marginRight: 3 }}
              >
                <div>เกณฑ์การประเมินที่ได้</div>
              </div>
              <Divider type="vertical" />

              <div
                style={{
                  width: 40,
                  height: 40,
                  border: '1px solid black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '30px',
                }}
              >
                {' '}
                A
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 10 }}>
        {CardList('จัดซื้อ')}
        {CardList('นาย ทดสอบ 1')}
        {CardList('นาย ทดสอบ 2')}
        {CardList('นาย ทดสอบ 3')}
        {CardList('นาย ทดสอบ 4')}
        {CardList('นาย ทดสอบ 5')}
        {CardList('นาย ทดสอบ 6')}
        {CardList('นาย ทดสอบ 7')}
        {CardList('นาย ทดสอบ 8')}
        <Card
          headStyle={{ padding: 0 }}
          title={
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ marginLeft: 30 }}>
                <Icon type="warning" />
                {'นายทดสอบ 10'}
              </div>
              <div>
                <Icon
                  type="rollback"
                  style={{ marginRight: 3, fontSize: '18px' }}
                />
                <Icon
                  type="delete"
                  style={{ marginRight: 3, fontSize: '18px' }}
                />
              </div>
            </div>
          }
          style={{
            width: 300,
            marginRight: 10,
            marginBottom: 10,
            borderColor: 'orange',
            borderWidth: '3px',
          }}
        >
          <div>
            <p>อัตราส่วนคะแนน</p>
            <div>
              <label>ตัวชี้วัด 1</label>
              <Divider type="vertical" />
              <Icon type="profile" style={{ marginRight: 3, marginLeft: 3 }} />
              <label>0 คะแนน</label>
              <Divider type="vertical" />
              <Popover content={content} title="หมายเหตุ">
                <span style={{ cursor: 'pointer' }}>
                  <Icon type="message" />
                </span>
              </Popover>
            </div>
            <div>
              <label>ตัวชี้วัด 2</label>
              <Divider type="vertical" />
              <Icon type="profile" style={{ marginRight: 3, marginLeft: 3 }} />
              <label>0 คะแนน</label>
              <Divider type="vertical" />
              <Icon type="message" />
            </div>
            <div>
              <label>ตัวชี้วัด 3</label>
              <Divider type="vertical" />
              <Icon type="profile" style={{ marginRight: 3, marginLeft: 3 }} />
              <label>0 คะแนน</label>
              <Divider type="vertical" />
              <Icon type="message" />
            </div>
            <div>
              <label>ตัวชี้วัด 4</label>
              <Divider type="vertical" />
              <Icon type="profile" style={{ marginRight: 3, marginLeft: 3 }} />
              <label>0 คะแนน</label>
              <Divider type="vertical" />
              <Icon type="message" />
            </div>
          </div>
        </Card>{' '}
      </div>
    </React.Fragment>
  )
}
