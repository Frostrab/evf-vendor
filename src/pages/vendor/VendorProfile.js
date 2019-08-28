import React from 'react'
import { Paper } from '../../components/Paper'
import { Card, Icon, Avatar, Input } from 'antd'
import { TableForm } from '../../components'
import Select from '../../components/select'
const { Meta } = Card
const VendorProfile = () => {
  const [dataSelect] = React.useState([
    { id: 1, name: 'หนึ่ง' },
    { id: 2, name: 'สอง' },
  ])
  return (
    <React.Fragment>
      <Paper title={'ข้อมูลผู้ขาย'} />;
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: '500px', marginRight: '10px' }}>
          <Paper>
            <Card
              style={{ width: '100%' }}
              actions={[<Icon type="edit" key="edit" />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Leaderplanet"
                description={
                  <span>
                    <div style={{ display: 'flex' }}>
                      <label style={{ marginRight: 10 }}>
                        <b>Email</b>
                      </label>
                      <Input
                        value={'admin@leaderplanet.co.th'}
                        style={{ width: '200px' }}
                        readOnly={true}
                      />
                    </div>
                    <div style={{ display: 'flex' }}>
                      <label style={{ marginRight: 25 }}>
                        <b>Tel</b>
                      </label>
                      <Input
                        value={'0800000000'}
                        style={{ width: '200px' }}
                        readOnly={true}
                      />
                    </div>
                  </span>
                }
              />
            </Card>
            ,
          </Paper>
        </div>
        <div style={{ width: '500px' }}>
          <Paper>graph</Paper>
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <Paper>
          <span
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: 10,
            }}
          >
            <Select dataSelect={dataSelect} width={120} />
          </span>
          <TableForm />
        </Paper>
      </div>
    </React.Fragment>
  )
}

export default VendorProfile
