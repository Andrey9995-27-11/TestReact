import { THEME_TOGGLE, THEME } from '../js/additional'

const initialState = 'light'

function themeHandler(theme, toggle = true) {
  const defaults = {
    light: 'night',
    night: 'light',
  }
  return toggle ? defaults[theme] : theme
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_TOGGLE:
      return themeHandler(state)
    case THEME:
      return themeHandler(action.value, false)
  }
  return state
}

export default themeReducer
