import React from 'react'
import styled from 'styled-components'

export default props => {
  return (
    <CardStyle>
      {props.children}
    </CardStyle>
  )
}

const CardStyle = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 250px;
  box-shadow: ${props => props.theme.boxShadow};
  background: #fefefe;
  border-radius: 4px;
`

export const CardTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
`

export const CardBody = styled.p`
  font-size: 1rem;
`