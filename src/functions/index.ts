import { Response, Media } from '../interface'
export const objFilter = (obj: Media, callback: (key: string) => boolean) => {
  const newObj: Media = {}
  for (const key in obj) {
    if (callback(key)) newObj[key] = obj[key]
  }
  return newObj
}
export const objMapToArray = (obj: Media, callback: Function) => {
  const newArr = []
  for (const key in obj) {
    newArr.push(callback(key, obj[key]))
  }
  return newArr
}

export function formatResult(element: Response) {
  return {
    ...element,
    ID: element.trackId ?? element.collectionId,
    NAME: element.trackName ?? element.collectionName,
    PRICE: element.trackPrice ?? element.collectionPrice ?? element.price ?? 0,
  }
}
