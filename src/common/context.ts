import { createContext } from 'react'
import { BasketEvent } from 'store/BasketStore'
import { themeStore } from 'store'

export interface BasketCallbackProvider {
  addToBasket?: BasketEvent
  removeFromBasket?: BasketEvent
  removeInToRemove?: () => void
  setToRemove?: (id: number) => void
  lazy?: () => void
}

export const CallbacksContext = createContext<BasketCallbackProvider>({})

export const ThemeProvider = createContext<typeof themeStore>(themeStore)
