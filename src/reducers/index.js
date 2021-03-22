import { combineReducers } from 'redux'

import listReducer from './listReducer'
import basketReducer from './basketReducer'
import detailReducer from './detailReducer'
import themeReducer from './ThemeReducer'

export default combineReducers({
  list: listReducer,
  basket: basketReducer,
  detail: detailReducer,
  theme: themeReducer,
})
