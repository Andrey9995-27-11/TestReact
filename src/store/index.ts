import { listStore } from './ListStore'
import { basketStore } from './BasketStore'

export class RootStore {
  public listStore
  public basketStore

  constructor() {
    this.listStore = listStore
    this.basketStore = basketStore
  }
}

export const rootStore = new RootStore()

export * from './DetailStore'
export * from './ListStore'
export * from './BasketStore'
export * from './ThemeStore'
