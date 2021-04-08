import { makeAutoObservable } from 'mobx'
import { Response } from 'interface'
import { formatResult } from 'functions'

interface SearchResponse {
  results: Array<Response>
  filter: string
}

interface InitParams {
  results: Array<Response>
  filter: string
  lazyBtn: boolean
  notFound: boolean
  isSearching: boolean
}

export class ListStore {
  public defaultUrl = 'https://itunes.apple.com/search?'
  public limit = 20
  public initParams: InitParams = {
    results: [],
    filter: '',
    lazyBtn: false,
    notFound: false,
    isSearching: false,
  }

  constructor() {
    makeAutoObservable(this)
  }

  public get results() {
    return this.initParams.results
  }
  public get count(): number {
    return this.initParams.results.length
  }
  public get filter() {
    return this.initParams.filter
  }
  public get lazyBtn() {
    return this.initParams.lazyBtn
  }
  public get notFound() {
    return this.initParams.notFound
  }
  public get isSearching() {
    return this.initParams.isSearching
  }

  public Search = async (filter: string) => {
    let isSearching = true
    let lazyBtn = false
    let notFound = false
    let data: SearchResponse | undefined

    Object.assign(this.initParams, {
      isSearching,
      lazyBtn,
      notFound,
      filter,
    })

    const response = await fetch(
      this.defaultUrl + filter + `&limit=${this.limit}`,
    )
    if (response.ok) data = await response.json()

    notFound = !data?.results.length
    lazyBtn = !!data && data.results.length > this.limit - 1
    isSearching = false

    Object.assign(this.initParams, {
      results: !!data?.results.length
        ? data.results.map((element) => formatResult(element))
        : [],
      isSearching,
      lazyBtn,
      notFound,
    })
  }

  public Lazy: () => void = async () => {
    let isSearching = true
    let lazyBtn = false
    let data: SearchResponse | undefined

    Object.assign(this.initParams, {
      isSearching,
      lazyBtn,
    })

    const response = await fetch(
      this.defaultUrl +
        `&offset=${this.count + 1}` +
        this.filter +
        `&limit=${this.limit}`,
    )
    if (response.ok) data = await response.json()
    isSearching = false
    lazyBtn = !!data && data.results.length > this.limit - 1

    Object.assign(this.initParams, {
      results: !!data?.results.length
        ? this.results.concat(
            data.results.map((element) => formatResult(element)),
          )
        : this.initParams.results,
      isSearching,
      lazyBtn,
    })
  }
}

export const listStore = new ListStore()
