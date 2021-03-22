import DetailStore from './DetailStore'
import BasketStore from './BasketStore'
import ListStore from './ListStore'
import ThemeStore from './ThemeStore'

class RootStore {
  public listStore
  public detailStore
  public basketStore
  public themeStore

  constructor() {
    this.listStore = new ListStore(this)
    this.detailStore = new DetailStore(this)
    this.basketStore = new BasketStore(this)
    this.themeStore = new ThemeStore(this)
  }
}

export default RootStore
