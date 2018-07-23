import React from 'react'
import styled from 'styled-components'

export default props => {
  return (
    <Card>
      {props.children}
    </Card>
  )
}

export const CardButton = styled.button`
  font-family: 'Lato', sans-serif;
  box-sizing: inherit;
  flex: 1;
  display: block;
  border: 2px solid ${props => props.theme.primary};
  background: ${props => props.primary ? props.theme.primary : props.theme.white};
  color: ${props => props.primary ? props.theme.white : props.theme.primary};
  font-size: ${props => props.large ? '1.25rem' : '1rem'};
  margin:  ${props => props.large ? '1.25rem' : '1rem'};
  padding: ${props => props.large ? '0.50rem 1.25rem' : '0.25rem 1rem'};
  border-radius: 3px;
`

export const ButtonList = styled.div`
  display: flex;
  justify-content: space-between;
`

const Card = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  min-width: 400px;
  max-width: 500px;
  min-height: 100px;
  box-shadow: ${props => props.theme.boxShadow};
  background: #fefefe;
  border-radius: 4px;
`

export const CardTitle = styled.h2`
  font-family: 'Raleway', sans-serif;
  text-align: ${props => props.center ? 'center' : 'justify'};
  font-size: 2rem;
`

export const CardBody = styled.p`
  font-size: 1rem;
  font-family: 'Lato';
`