import React from 'react'
import './styles.sass'

import { ThemeProvider } from 'common/context'
import { observer } from 'mobx-react'

const ThemeToggler = observer(() => {
  const { themeToggle } = React.useContext(ThemeProvider)
  return (
    <div className="theme-toggler" onClick={themeToggle}>
      MODE
    </div>
  )
})

export default ThemeToggler
