import { SEARCH } from '../js/additional';

const initialState = {
    filter : '',
    results : [],
};

const listReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                filter : action.value.filter,
                results : action.value.results.map( element => ({
                        ...element, 
                        ID : element.trackId || element.collectionId,
                        NAME : element.trackName || element.collectionName,
                        PRICE : element.trackPrice || element.collectionPrice || element.price
                    }))
            };
    }
    return state;
}

export default listReducer;