import React, { Component } from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Card, { CardTitle, CardBody } from './Card'
import Background from './Background'
import Quote from './Quote'

// CSS reset. Would like to investigate a better way to do this.
injectGlobal`
  html {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    font-size: 10px;
  }
`

const theme = {
  boxShadow: '0px 0px 43px -10px black'
}

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Background>
          <AppStyle>
            <Card>
              <CardTitle>
                Quote of the Day
              </CardTitle>
              <CardBody>
                <Quote />
                {/* "They don't think it be like it is, but it do." — Some wise man */}
              </CardBody>
            </Card>
          </AppStyle>
        </Background>
      </ThemeProvider>
    )
  }
}

export default App
