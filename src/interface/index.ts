export interface Response {
  ID?: number
  NAME?: string
  PRICE?: number
  trackId?: number
  collectionId?: number
  trackName?: string
  collectionName?: string
  trackPrice?: number
  collectionPrice?: number
  price?: number
  wrapperType?: string
  artworkUrl100?: string
  longDescription?: string
  previewUrl?: string
}

export type InBasket = Array<number>

export type Media = {
  [key: string]: { [key: string]: string }
}
