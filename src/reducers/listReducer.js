import { SEARCH , LAZY  } from '../js/additional';

const initialState = {
    filter : '',
    results : [],
    lazy : false,
};

const listReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SEARCH:
        {
            let lazy = state.lazy;
            if (action.value.results.length < 21)
                lazy = false;
            else {
                action.value.results.splice(20, action.value.results.length - 20);
                lazy = true;
            }
            return {
                ...state,
                filter : action.value.filter,
                results : action.value.results.map( element => ({
                        ...element, 
                        ID : element.trackId || element.collectionId,
                        NAME : element.trackName || element.collectionName,
                        PRICE : element.trackPrice || element.collectionPrice || element.price || 0
                    })),
                lazy : lazy
            };
        }
        case LAZY:
        {
            let lazy = state.lazy;
            if (action.value.results.length < 21)
                lazy = false;
            else {
                action.value.results.splice(20, action.value.results.length - 20);
                lazy = true;
            }
            let results = [...state.results];
            action.value.results.forEach(element => {
                results.push(element);
            });
            return {
                ...state,
                filter : action.value.filter,
                results : results.map( element => ({
                        ...element, 
                        ID : element.trackId || element.collectionId,
                        NAME : element.trackName || element.collectionName,
                        PRICE : element.trackPrice || element.collectionPrice || element.price
                    }))
            };
        }
    }
    return state;
}

export default listReducer;