import { BASKET_ADD, BASKET_REMOVE, SEARCH } from './additional';

const asyncSearch = (query) => {
    return (dispatch) => {
        fetch('https://itunes.apple.com/search?'+query)
            .then(res => res.json())
            .then(res => {
                if (res.results !== undefined) {
                    res.results.map((result) => {
                        result.ID = result.trackId || result.collectionId; 
                        result.NAME = result.trackName || result.collectionName;
                        result.PRICE = result.trackPrice || result.collectionPrice;
                    });
                    setTimeout(() => {
                        dispatch({ type: SEARCH , value: res })
                    }, 1000);
                }
            });
    }
}

const basketChange = (item , type) => {
    if (item === undefined) return false;
    switch (type) {
        case BASKET_ADD:
        case BASKET_REMOVE:
            return dispatch => {
                setTimeout(() => {
                    dispatch({ type: type , value: item })
                }, 100);
            }
        default:
            return false;
    }
}

export { asyncSearch , basketChange };