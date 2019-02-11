import * as React from 'react'
import { IThemeInterface } from '../theme'
import styled from '../theme/styled-components'

export interface IButtonProps {
  readonly large?: boolean,
  readonly primary?: boolean
  readonly theme: IThemeInterface
}

const Button = styled('button')<IButtonProps>`
  font-family: 'Lato', sans-serif;
  box-sizing: inherit;
  flex: ${(props: IButtonProps) => props.large ? '2' : '1'};
  border: 2px solid ${(props: IButtonProps) => props.theme.primary};
  background: ${(props: IButtonProps) => props.primary ? props.theme.primary : props.theme.white};
  color: ${(props: IButtonProps) => props.primary ? props.theme.white : props.theme.primary};
  font-size: 1.25rem;
  margin:  0.25rem;
  padding: 0.50rem 1.25rem;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background: ${(props: IButtonProps) => props.primary ? props.theme.white : props.theme.primary};
    color: ${(props: IButtonProps) => props.primary ? props.theme.primary : props.theme.white};
    transition: 0.2s ease-out;
  }
  :disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export default Button
