import { makeAutoObservable } from 'mobx'

import { Response, InBasket } from 'interface'

import { formatResult } from 'functions'

export class BasketStore {
  public initParams: {
    results: Array<Response>
    inBasket: InBasket
  } = {
    results: [],
    inBasket: [],
  }
  public get results() {
    return this.initParams.results
  }
  public set results(value: Array<Response>) {
    this.initParams.results = value
  }
  public get inBasket() {
    return this.initParams.inBasket
  }
  public set inBasket(value: InBasket) {
    this.initParams.inBasket = value
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

  constructor() {
    makeAutoObservable(this)
  }

  public addToBasket(items?: InBasket): void {
    if (!items) return
    items.forEach((item) => {
      this.inBasket.push(item)
    })
  }

  public removeFromBasket(items?: InBasket): void {
    if (!items) return
    this.inBasket = this.inBasket.filter((item) => !items.includes(item))
  }
  public getResults({ results }: { results: Array<Response> }): void {
    this.results = results.map((element) => formatResult(element))
  }

  public responseBasketItems(): void {
    const results: Array<Response> = [
      { trackId: undefined, trackName: 'name', trackPrice: 100 },
      { trackId: 1, trackName: 'name', trackPrice: 100 },
      { trackId: 2, trackName: 'name', trackPrice: 100 },
    ]
    if (this.inBasket) {
      fetch('https://itunes.apple.com/lookup?id=' + this.inBasket.join(','))
        .then((res) => res.json())
        .then((res) => {
          if (res.results) {
            this.getResults(res)
          }
        })
    }
  }
  public destroy(): void {
    this.results = []
  }
}

export const basketStore = new BasketStore()
