import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
const Loadable = require('react-loadable')

const App = Loadable({
  loader: () => import('./components/App'),
  loading: () => <div />
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
