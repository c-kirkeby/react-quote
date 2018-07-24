import styled from 'styled-components'

const Button = styled.button`
  font-family: 'Lato', sans-serif;
  box-sizing: inherit;
  flex: ${props => props.large ? 5 : 1};
  display: block;
  border: 2px solid ${props => props.theme.primary};
  background: ${props => props.primary ? props.theme.primary : props.theme.white};
  color: ${props => props.primary ? props.theme.white : props.theme.primary};
  font-size: 1.25rem;
  margin:  1.25rem;
  padding: 0.50rem 1.25rem;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background: ${props => props.primary ? props.theme.white : props.theme.primary};
    color: ${props => props.primary ? props.theme.primary : props.theme.white};
    transition: 0.2s ease-out;
  }
`

export default Button