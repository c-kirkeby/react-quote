import React, { Component } from 'react'
import Card from './components/Card'
import styled from '../node_modules/styled-components';

class App extends Component {
  render() {
    return (
      <AppStyle>
        <Card>
          Test
        </Card>
      </AppStyle>
    )
  }
}

const AppStyle = styled.div`
  background: #f9faff;
`


export default App;
