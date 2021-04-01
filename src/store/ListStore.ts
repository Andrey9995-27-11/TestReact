import { makeAutoObservable } from 'mobx'

import { Response } from '../interface'

import { formatResult } from 'functions'

interface SearchValue {
  results: Array<Response>
  filter: string
}

interface InitParams {
  results: Array<Response>
  filter: string
  lazy: boolean
  notFound: boolean
  isSearching: boolean
}

export class ListStore {
  public initParams: InitParams = {
    results: [],
    filter: '',
    lazy: false,
    notFound: false,
    isSearching: false,
  }
  public get results() {
    return this.initParams.results
  }
  public set results(value: Array<Response>) {
    this.initParams.results = value
  }
  public get count(): number {
    return this.initParams.results.length
  }
  public get filter() {
    return this.initParams.filter
  }
  public set filter(value: string) {
    this.initParams.filter = value
  }
  public get lazy() {
    return this.initParams.lazy
  }
  public set lazy(value: boolean) {
    this.initParams.lazy = value
  }
  public get notFound() {
    return this.initParams.notFound
  }
  public set notFound(value: boolean) {
    this.initParams.notFound = value
  }
  public get isSearching() {
    return this.initParams.isSearching
  }
  public set isSearching(value: boolean) {
    this.initParams.isSearching = value
  }
  constructor() {
    makeAutoObservable(this)
  }
  public search(value: SearchValue): void {
    this.notFound = this.lazy = !!value.results.length
    this.filter = value.filter
    this.results = this.results.concat(
      value.results.map((element) => formatResult(element)),
    )
    this.isSearching = false
  }
  public asyncSearch = ({
    filter = this.filter,
    type = 'search',
    count = this.count,
    limit = 20,
  }: {
    filter?: string
    type?: 'search' | 'lazy'
    count?: number
    limit?: number
  }): void => {
    if (type === 'search') this.results = []
    this.isSearching = true
    const defaultUrl = 'https://itunes.apple.com/search?'
    const queryOffset = count ? '&offset=' + count : ''
    const queryLimit = '&limit=' + limit
    fetch(defaultUrl + queryOffset + filter + queryLimit)
      .then((res) => res.json())
      .then((res) => {
        if (res.results) {
          setTimeout(() => {
            this.search({ ...res, filter })
          })
        } else {
          this.isSearching = false
        }
      })
      .catch(() => (this.isSearching = false))
  }
}

export const listStore = new ListStore()
