import { FC } from 'react'

import './styles.sass'

import { themeStore } from 'store/ThemeStore'

const ThemeToggler = () => {
  return (
    <div className="theme-toggler" onClick={() => themeStore.themeToggle()}>
      MODE
    </div>
  )
}

export default ThemeToggler
