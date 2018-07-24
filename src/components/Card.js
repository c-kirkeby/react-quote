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

export const ButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Card = styled.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  min-width: 250px;
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

export const CardBody = styled.div`
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
`