import React from 'react'

import './styles.sass'

const themeToggler = (props) => {
  return (
    <div className="theme-toggler" onClick={props.themeToggler}>
      MODE
    </div>
  )
}

export default themeToggler
