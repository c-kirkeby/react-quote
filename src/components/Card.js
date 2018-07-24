import React from 'react'
import styled from 'styled-components'

export const Card = styled.div`
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