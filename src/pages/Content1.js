import React from 'react'
import {
  Paper,
  TableTemplate,
  Button,
  ModalTemplate,
  TableInbox,
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

  const openPreview = selected => {
    setOpenModal(true)
    setViewSelect(selected)
  }
  const handleModalClose = () => {
    setOpenModal(false)
  }
  return (
    <React.Fragment>
      <ModalTemplate
        title={viewSelect}
        visible={openModal}
        handleClose={handleModalClose}
        width={'80%'}
      >
        <TableInbox />
      </ModalTemplate>
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
            <div>
              {' '}
              <Button type="submit" />
            </div>
            <div
              style={{
                width: 400,
                height: 400,
                backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => openPreview('ผู้ชายทั้งหมด')}
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
                width: 300,
                height: 300,
                backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => openPreview('ผู้ขาย ที่ได้คะแนนดี')}
            >
              <div>
                <div style={{ fontSize: 80, color: 'brow' }}>20</div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}
                >
                  ดี
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
                width: 300,
                height: 300,
                backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => openPreview('ผู้ขาย ที่ได้คะแนนปานกลาง')}
            >
              <div>
                <div style={{ fontSize: 80, color: 'blue' }}>20</div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}
                >
                  ปานกลาง
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
                width: 300,
                height: 300,
                backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => openPreview('ผู้ขาย ที่ได้คะแนนควรปรับปรุง')}
            >
              <div>
                <div style={{ fontSize: 80, color: 'red' }}>20</div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}
                >
                  ปรับปรุง
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
}
export default MasterList
