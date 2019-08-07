import React from 'react'
import Styled from 'styled-components'
const Title = Styled.h2`
    font-size: ${props => props.size}
    padding: 10px
`
const TitleTab = Styled.div`
    background-color:#27b6ba
`
const BodyCard = Styled.div`
    background-color: ${props => props.color || '#FFFFFF'}
    width: ${props => props.width || '100%'}
    height: '100vh',
`
const Card = props => (
  <div>
    {props.title ? (
      <TitleTab>
        <Title size="30px">{props.title}</Title>
      </TitleTab>
    ) : (
      false
    )}
    <BodyCard color={props.color}>{props.children}</BodyCard>
  </div>
)
export default Card
