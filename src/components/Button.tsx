import styled from '../styled-components'
import * as React from 'react'

export interface ButtonProps {
  readonly large?: boolean,
  readonly primary?: boolean
}

const Button = styled('button')<ButtonProps>`
  font-family: 'Lato', sans-serif;
  box-sizing: inherit;
  flex: ${props => props.large ? '2' : '1'};
  border: 2px solid ${props => props.theme.primary};
  background: ${props => props.primary ? props.theme.primary : props.theme.white};
  color: ${props => props.primary ? props.theme.white : props.theme.primary};
  font-size: 1.25rem;
  margin:  0.25rem;
  padding: 0.50rem 1.25rem;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background: ${props => props.primary ? props.theme.white : props.theme.primary};
    color: ${props => props.primary ? props.theme.primary : props.theme.white};
    transition: 0.2s ease-out;
  }
  :disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export default Button
