import { GlobalStyle } from '../GlobalStyle'
import * as React from 'react'
import styled, { ThemeProvider } from '../styled-components'
import '../assets/fonts.css'
import Background from './Background'
import { Card, CardBody, CardTitle } from './Card'
import QuoteContainer from './QuoteContainer'

export const theme = {
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

class App extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
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
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App
