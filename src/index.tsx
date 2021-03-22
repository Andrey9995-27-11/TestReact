import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createBrowserHistory } from 'history'

import App from './components/App'

import './css/index.sass'

/* store */
import RootStore from './store'

const rootStore = new RootStore()

console.log(rootStore.themeStore)

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
