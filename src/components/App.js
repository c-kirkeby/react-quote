import React, { Component } from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import '../assets/fonts.css'
import '../globalStyles'
import { Card, CardTitle, CardBody } from './Card'
import Background from './Background'
import Quote from './Quote'
import QuoteContainer from './QuoteContainer'

const theme = {
  success: '#28a745',
  primary: '#007bff',
  white: '#fefefe',
  boxShadow: '0px 0px 43px -10px black'
}

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Background>
          <AppStyle>
            <Card>
              <CardBody>
                <CardTitle center>
                  Quote of the Day
                </CardTitle>
                <QuoteContainer />
              </CardBody>
            </Card>
          </AppStyle>
        </Background>
      </ThemeProvider>
    )
  }
}

export default App
