import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
// tslint:disable-next-line
const Loadable = require('react-loadable')

const App = Loadable({
  loader: () => import('./components/App'),
  loading: () => <div />
})

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.register()
