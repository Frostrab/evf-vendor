import React from 'react'
import Styled from 'styled-components'
const Title = Styled.h2`
    font-size: ${props => props.size}
    padding: 10px
    color: ${props => props.color || '#000000'}
`
const TitleTab = Styled.div`
    background-color:#27b6ba
    border-radius: 10px;

`
const BodyCard = Styled.div`
    background-color: ${props => props.color || '#FFFFFF'}
    width: ${props => props.width || '100%'}
    height: '100vh';
    border: 1px solid ${props => props.color || '#000000'}
    padding: 10px;
    border-radius: 6px;
    
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