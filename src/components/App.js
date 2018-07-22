import React, { Component } from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import '../assets/fonts.css'
import '../globalStyles'
import Card, { CardTitle, CardBody, CardButton, ButtonList } from './Card'
import Background from './Background'
import Quote from './Quote'

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
