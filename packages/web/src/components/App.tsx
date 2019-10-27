import { Application, Background, Card, CardBody, CardTitle, theme, ThemeProvider } from '@react-quote/ui'
import * as React from 'react'
import '../assets/fonts.css'
import { GlobalStyle } from '../GlobalStyle'
import QuoteContainer from './QuoteContainer'

class App extends React.Component {
  public render () {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Background>
            <Application>
              <Card>
                <CardBody>
                  <CardTitle center>Quote of the Day</CardTitle>
                  <QuoteContainer />
                </CardBody>
              </Card>
            </Application>
          </Background>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App
