import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'

import { Response, ResponseFormatted } from '../interface'

class BasketStore {
  public result = {} as ResponseFormatted
  public rootStore
  constructor(rootStore: any) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }
  public show(value: { results: Array<Response> }) {
    this.result = value.results.map((element) => ({
      ...element,
      ID: element.trackId || element.collectionId,
      NAME: element.trackName || element.collectionName,
      PRICE:
        element.trackPrice || element.collectionPrice || element.price || 0,
    }))[0]
  }
  public destroy() {
    this.result = {} as ResponseFormatted
  }
}

export default BasketStore
