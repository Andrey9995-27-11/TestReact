import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'

import { Response, ResponseFormatted } from '../interface'

type SearchValue = {
  results: Array<Response>
  filter: string
}

class ListStore {
  public filter: string = ''
  public results: Array<ResponseFormatted> = []
  public lazy: boolean = false
  public isSearching: boolean = false
  public notFound: boolean = false
  public rootStore
  constructor(rootStore: any) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }
  public toggleSearch() {
    this.isSearching = !this.isSearching
  }
  public search(value: SearchValue) {
    this.notFound = value.results.length < 1
    if (value.results.length < 21) this.lazy = false
    else {
      value.results.splice(20, value.results.length - 20)
      this.lazy = true
    }
    this.filter = value.filter
    this.results = value.results.map((element) => ({
      ...element,
      ID: element.trackId || element.collectionId,
      NAME: element.trackName || element.collectionName,
      PRICE:
        element.trackPrice || element.collectionPrice || element.price || 0,
    }))
    this.isSearching = false
  }
}

export default ListStore
