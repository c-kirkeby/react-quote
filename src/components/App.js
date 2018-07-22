import React, { Component } from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import Card, { CardTitle, CardBody, CardButton, ButtonList } from './Card'
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
              <CardTitle center>
                Quote of the Day
              </CardTitle>
              <CardBody>
                <Quote />
                <ButtonList>
                  <div></div>
                  <CardButton 
                    type="button" 
                    success
                    large
                  >
                    New
                  </CardButton>
                  <CardButton 
                    type="button"
                    primary 
                    large
                  >
                    Tweet
                  </CardButton>
                </ButtonList>
              </CardBody>
            </Card>
          </AppStyle>
        </Background>
      </ThemeProvider>
    )
  }
}

export default App
