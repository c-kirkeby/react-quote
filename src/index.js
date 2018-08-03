import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import registerServiceWorker from './registerServiceWorker'

const App = Loadable({
  loader: () => import('./components/App'),
  loading() {
    return <div></div>
  }
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
