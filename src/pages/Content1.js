import React from 'react'
import {
  Paper,
  TableTemplate,
  Button,
  ModalTemplate,
  TableInbox,
  DrawerTemplate,
} from '../components'
import Styled from 'styled-components'

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

const MasterList = () => {
  const [viewSelect, setViewSelect] = React.useState()
  const [openModal, setOpenModal] = React.useState(false)
  const [title, setTitle] = React.useState()
  const [visible, setVisible] = React.useState(false)
  const handleOpenDrawer = (a, data) => {
    setVisible(a)
  }
  const openPreview = selected => {
    setOpenModal(true)
    setViewSelect(selected)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }
  return (
    <React.Fragment>
      <DrawerTemplate
        title={'รายละเอียด'}
        visible={visible}
        width={'80%'}
        handleOpenDrawer={handleOpenDrawer}
      >
        <TableInbox />
      </DrawerTemplate>
      <TitleTab>
        <Title size="30px">Inbox</Title>
      </TitleTab>
      <div>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 3,
            }}
          >
            <div style={{ marginRight: -20, marginTop: 15 }}>
              {' '}
              <Button type="submit" />
            </div>
            <div
              style={{
                width: 400,
                height: 400,
                backgroundColor: '#fff',
                borderRadius: '50%',
                borderColor: 'brow',
                borderWidth: 8,
                borderStyle: 'solid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={e => {
                handleOpenDrawer(true)
              }}
            >
              <div>
                <div style={{ fontSize: 100, color: 'brow' }}>60</div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}
                >
                  งานทั้งหมด
                </div>
              </div>
            </div>
            <div style={{ marginLeft: -20, marginTop: 15 }}>
              <Button type="reject" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: 30,
        }}
      >
        <div style={{ textAlign: 'center', marginRight: 50 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 3,
              padding: 5,
            }}
          >
            <div style={{ marginRight: -20, marginTop: 15 }}>
              {' '}
              <Button type="submit" />
            </div>
            <div
              style={{
                width: 300,
                height: 300,
                backgroundColor: '#fff',
                borderRadius: '50%',
                borderColor: '#52c41a',
                borderWidth: 10,
                borderStyle: 'solid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={e => {
                handleOpenDrawer(true)
              }}
            >
              <div>
                <div style={{ fontSize: 80, color: '#092b00' }}>
                  <b> 20</b>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '30px',
                    color: '#52c41a',
                  }}
                >
                  สูงกว่ามาตรฐาน
                </div>
              </div>
            </div>
            <div style={{ marginLeft: -20, marginTop: 15 }}>
              <Button type="reject" />
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginRight: 50 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 3,
              padding: 5,
            }}
          >
            <div style={{ marginRight: -20, marginTop: 15 }}>
              {' '}
              <Button type="submit" />
            </div>
            <div
              style={{
                width: 300,
                height: 300,
                backgroundColor: '#fff',
                borderRadius: '50%',
                borderWidth: 10,
                borderStyle: 'solid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                borderColor: '#fadb14',
              }}
              onClick={e => {
                handleOpenDrawer(true)
              }}
            >
              <div>
                <div style={{ fontSize: 80, color: '#614700' }}>
                  <b>20</b>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '30px',
                    color: '#614700',
                  }}
                >
                  มาตรฐาน
                </div>
              </div>
            </div>
            <div style={{ marginLeft: -20, marginTop: 15 }}>
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
            }}
          >
            <div style={{ marginRight: -20, marginTop: 15 }}>
              {' '}
              <Button type="submit" />
            </div>
            <div
              style={{
                width: 300,
                height: 300,
                backgroundColor: '#fff',
                borderRadius: '50%',
                borderWidth: 10,
                borderStyle: 'solid',
                borderColor: '#cf1322',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={e => {
                handleOpenDrawer(true)
              }}
            >
              <div>
                <div style={{ fontSize: 80, color: '#cf1322' }}>
                  <b>20</b>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '30px',
                    color: '#cf1322',
                  }}
                >
                  ต่ำกว่ามาตรฐาน
                </div>
              </div>
            </div>
            <div style={{ marginLeft: -20, marginTop: 15 }}>
              {' '}
              <Button type="reject" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default MasterList
