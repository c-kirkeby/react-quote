import styled from 'styled-components'

const Button = styled.button`
  font-family: 'Lato', sans-serif;
  box-sizing: inherit;
<<<<<<< HEAD
  flex-basis: 100px;
  flex-shrink: 1;
  flex-wrap: wrap;
=======
  flex: ${props => props.large ? '2' : '1'};
>>>>>>> responsive_buttons
  border: 2px solid ${props => props.theme.primary};
  background: ${props => props.primary ? props.theme.primary : props.theme.white};
  color: ${props => props.primary ? props.theme.white : props.theme.primary};
  font-size: 1.25rem;
<<<<<<< HEAD
=======
  margin:  0.25rem;
>>>>>>> responsive_buttons
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