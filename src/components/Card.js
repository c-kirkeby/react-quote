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
  border: 0;
  box-shadow: 0 10px 40px 0 rgba(80,4,80,0.07), 0 2px 9px 0 rgba(60,50,90,0.06);
  background: #fefefe;
  display: flex;
`