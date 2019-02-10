import styled from '../styled-components'

export const Card = styled.div`
  margin: 0px 0.75rem 0px 0.75rem;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 0 1 500px; /* flex-grow: 0, flex-shrink: 1, flex-basis: 500px */
  box-shadow: ${props => props.theme.boxShadow};
  background: #fefefe;
  border-radius: 4px;
`

export const CardTitle = styled('h2')<{ center?: boolean }>`
  font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  text-align: ${props => props.center ? 'center' : 'justify'};
  font-size: 2rem;
`

export const CardBody = styled.div`
  font-size: 1rem;
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`
