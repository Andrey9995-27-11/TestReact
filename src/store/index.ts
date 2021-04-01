import { detailStore } from './DetailStore'
import { listStore } from './ListStore'
import { basketStore } from './BasketStore'
import { themeStore } from './ThemeStore'

class RootStore {
  public listStore
  public detailStore
  public basketStore
  public themeStore

  constructor() {
    this.listStore = listStore
    this.detailStore = detailStore
    this.basketStore = basketStore
    this.themeStore = themeStore
  }
}

const rootStore = new RootStore()

export default rootStore
