import { Background, Card, CardBody, CardTitle } from '@react-quote/ui'
import * as React from 'react'
import '../assets/fonts.css'
import { GlobalStyle } from '../GlobalStyle'
import styled, { ThemeProvider } from '../styled-components'
import QuoteContainer from './QuoteContainer'

export const theme = {
  boxShadow: '0px 0px 43px -10px black',
  primary: '#007bff',
  success: '#28a745',
  white: '#fefefe'
}

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

class App extends React.Component {
  public render () {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Background>
            <AppStyle>
              <Card>
                <CardBody>
                  <CardTitle center>Quote of the Day</CardTitle>
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
