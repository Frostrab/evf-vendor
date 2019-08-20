import React from 'react'
import Styled from 'styled-components'
import { Icon } from 'antd'
const ButtonCustom = Styled.button`
  cursor: pointer;
  font-size: 16px;
  border-radius: 3px;
  background: #ffffff
  &:hover{
    border-color:black
  }
  ${props => {
    if (props.type === 'approve') {
      return `
      &:hover {
        background-color: #52c41a;
        color: white;
      }
      border-color:#52c41a
      color: #52c41a
    `
    } else if (props.type === 'reject') {
      return `
      &:hover {
        background-color: #fa541c;
        color: white;
        border-color:black
      }
      border-color: #fa541c
      color: #fa541c
    `
    } else if (props.type === 'preview') {
      return `
      &:hover {
        background-color: #13c2c2;
        color: white;
        border-color:black
      }
      border-color: #13c2c2
      color: #13c2c2
    `
    } else if (props.type === 'view') {
      return `
      &:hover {
        background-color: #13c2c2;
        color: white;
        border-color:black
      }
      border-color:#13c2c2
      color: #13c2c2
    `
    } else if (props.type === 'edit') {
      return `
      &:hover {
        background-color: #fa8c16;
        color: white;
      }
      border-color:#fa8c16
      color: #fa8c16
    `
    } else if (props.type === 'delete') {
      return `
      &:hover {
        background-color: #f5222d;
        color: white;
      }
      border-color:#f5222d
      color: #f5222d
  `
    } else {
      return `
      border-color:#000000
      color: #000000`
    }
  }};
  border: 1px solid ;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
`
const _checkForIcon = i => {
  switch (i) {
    case 'approve':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="check-circle" />
        </span>
      )
    case 'reject':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="close-circle" />
        </span>
      )
    case 'preview':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="zoom-in" />
        </span>
      )
    case 'view':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="zoom-in" />
        </span>
      )
    case 'edit':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="edit" />
        </span>
      )
    case 'delete':
      return (
        <span style={{ marginRight: 5 }}>
          <Icon type="delete" />
        </span>
      )
    default:
      return false
  }
}
const Button = props => (
  <ButtonCustom type={props.type} onClick={props.onClick}>
    {_checkForIcon(props.type)}
    {props.children}
  </ButtonCustom>
)
export default Button