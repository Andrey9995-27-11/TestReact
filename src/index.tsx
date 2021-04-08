import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from 'common/context'
import { App } from 'components/App'

import 'css/index.sass'

import { themeStore } from 'store'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider.Provider value={themeStore}>
        <App />
      </ThemeProvider.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
