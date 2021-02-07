import { SEARCH , LAZY , TOGGLE_IS_SEARCHING } from '../js/additional';

const initialState = {
    filter : '',
    results : [],
    lazy : false,
    isSearching : false,
    notFound : false,
};

const listReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case TOGGLE_IS_SEARCHING:
        {
            return {
                ...state,
                isSearching : true,
            }
        }
        case SEARCH:
        {
            let notFound = action.value.results.length < 1;
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
                lazy : lazy,
                notFound : notFound,
                isSearching : false,
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
                    })),
                isSearching : false,
            };
        }
    }
    return state;
}

export default listReducer;