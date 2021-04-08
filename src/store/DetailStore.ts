import { formatResult } from 'functions'
import { makeAutoObservable } from 'mobx'

import { Response } from '../interface'

export class DetailStore {
  public result: Response = {}
  constructor() {
    makeAutoObservable(this)
  }
  public detailRequest(id: number): void {
    fetch('https://itunes.apple.com/lookup?id=' + id)
      .then((res) => res.json())
      .then((res) => {
        this.result = formatResult(res.results[0])
      })
  }
  public destroy() {
    this.result = {}
  }
}

export const detailStore = new DetailStore()
