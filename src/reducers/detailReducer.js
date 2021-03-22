import { DETAIL } from '../js/additional'

const initialState = {
  result: {},
}

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL:
      if (action.value === false) {
        return initialState
      }
      return {
        ...state,
        result: action.value.results.map((element) => ({
          ...element,
          ID: element.trackId || element.collectionId,
          NAME: element.trackName || element.collectionName,
          PRICE:
            element.trackPrice || element.collectionPrice || element.price || 0,
        }))[0],
      }
  }
  return state
}

export default detailReducer
