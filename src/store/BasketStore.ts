import { makeAutoObservable } from 'mobx'
import { Response, InBasket } from 'interface'
import { formatResult } from 'functions'

interface BasketResponse {
  results: Array<Response>
}

interface InitParams {
  results: Array<Response>
  isSearching: boolean
  inBasket: InBasket
  toRemove: InBasket
}

export type BasketEvent = (items: InBasket) => void

export class BasketStore {
  public defaultUrl = 'https://itunes.apple.com/lookup?id='
  public initParams: InitParams = {
    results: [],
    isSearching: false,
    inBasket: [],
    toRemove: [],
  }

  constructor() {
    makeAutoObservable(this)
  }

  public get results() {
    return this.initParams.results
  }

  public get inBasket() {
    return this.initParams.inBasket
  }

  public get summ(): number {
    let summ: number = 0
    this.initParams.results.forEach((element) => {
      summ += element.PRICE || 0
    })
    return summ
  }
  public get count(): number {
    return this.inBasket.length
  }

  get toRemove(): InBasket {
    return this.initParams.toRemove
  }

  public get isSearching() {
    return this.initParams.isSearching
  }

  public addToBasket: BasketEvent = (items) => {
    Object.assign(this.initParams, {
      inBasket: this.initParams.inBasket.concat(items),
    })
  }

  public removeFromBasket: BasketEvent = (items) => {
    const inBasket = this.inBasket.filter((item) => !items.includes(item))
    Object.assign(this.initParams, {
      inBasket,
      results: this.results.filter(
        (element) => element.ID && inBasket.includes(element.ID),
      ),
      toRemove: this.toRemove.filter((ID) => inBasket.includes(ID)),
    })
  }

  public removeInToRemove = () => {
    this.removeFromBasket(this.toRemove)
  }

  public setToRemove = (id: number) => {
    if (this.toRemove.includes(id)) {
      Object.assign(this.initParams, {
        toRemove: this.toRemove.filter((element) => element !== id),
      })
    } else {
      Object.assign(this.initParams, {
        toRemove: this.toRemove.concat(id),
      })
    }
  }

  public async Search() {
    let data: BasketResponse | undefined
    let isSearching = true

    Object.assign(this.initParams, {
      isSearching,
    })

    if (this.count) {
      const response = await fetch(this.defaultUrl + this.inBasket.join(','))
      if (response.ok) data = await response.json()
    }
    isSearching = false

    Object.assign(this.initParams, {
      results: !!data?.results.length
        ? data.results.map((element) => formatResult(element))
        : [],
      isSearching,
    })
  }

  public destroy(): void {
    Object.assign(this.initParams, {
      results: [],
      toRemove: [],
    })
  }
}

export const basketStore = new BasketStore()
