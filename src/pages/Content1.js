import React from 'react'
import { Paper, TableTemplate, Button, PopoverIcon } from '../components'
import Styled from 'styled-components'
import { Divider } from 'antd'

const Title = Styled.h2`
    font-size: ${props => props.size}
    padding: 10px
    color: ${props => props.color || '#000000'}
`
const TitleTab = Styled.div`
    background-color:#fff
    border-radius: 10px;
    border: 1px solid  #27b6ba
    margin-bottom: 3px
`
const MasterList = () => (
  <React.Fragment>
    <TitleTab>
      <Title size="30px">Inbox</Title>
    </TitleTab>
    <div>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}
        >
          <div>
            {' '}
            <Button type="submit" />
          </div>
          <div
            style={{
              width: 250,
              height: 250,
              backgroundColor: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <div>
              <div style={{ fontSize: 100, color: 'brow' }}>60</div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                งานทั้งหมด
              </div>
            </div>
          </div>
          <div>
            <Button type="reject" />
          </div>
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
      <div style={{ textAlign: 'center', marginRight: 10 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 3,
            padding: 5,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'black',
          }}
        >
          <div>
            {' '}
            <Button type="submit" />
          </div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundColor: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: 80, color: 'brow' }}>20</div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                ปานกลาง
              </div>
            </div>
          </div>
          <div>
            <Button type="reject" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginRight: 10 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 3,
            padding: 5,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'black',
          }}
        >
          <div>
            {' '}
            <Button type="submit" />
          </div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundColor: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: 80, color: 'blue' }}>20</div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                ดี
              </div>
            </div>
          </div>
          <div>
            {' '}
            <Button type="reject" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 3,
            padding: 5,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'black',
          }}
        >
          <div>
            {' '}
            <Button type="submit" />
          </div>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundColor: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: 80, color: 'red' }}>20</div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                แย่
              </div>
            </div>
          </div>
          <div>
            {' '}
            <Button type="reject" />
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)
export default MasterList
