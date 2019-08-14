import React from 'react'
import Styled from 'styled-components'

const ButtonCustom = Styled.button`
  cursor: pointer;
  font-size: 16px;
  border-radius: 3px;
  background: ${props => (props.type === 'approve' ? 'green' : 'red')};
  color: ${props => (props.type ? 'white' : 'black')};
  border: 1px solid black;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: green;
    color: white;
  }
`
const Button = props => (
  <ButtonCustom type={props.type}>{props.children}</ButtonCustom>
)
export default Button
