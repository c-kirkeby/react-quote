import React, { Component } from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import '../assets/fonts.css'
import Facebook from 'react-feather/dist/icons/facebook'
import Twitter from 'react-feather/dist/icons/twitter'
import '../globalStyles'
import { Card, CardTitle, CardBody } from './Card'
import Button from './Button'
import ButtonList from './ButtonList'
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
  justify-content: space-around;
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
                <Quote />
                <ButtonList>
                  <Button 
                    type="button"
                    large
                    primary
                  >
                    New
                  </Button>
                  <Button 
                    type="button" 
                  >
                    <Facebook />
                  </Button>
                  <Button
                    type="button"
                  >
                    <Twitter />
                  </Button>
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
