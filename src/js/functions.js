import { BASKET_ADD, BASKET_REMOVE, BASKET_REMOVE_MULTI, SEARCH, DETAIL, TO_REMOVE , LAZY , TOGGLE_IS_SEARCHING } from './additional';

const asyncSearch = (type, query = { count: false }, limit = 21) => {
    let queryLimit = '&limit='+limit;
    let queryOffset = query.count !== false ? '&offset='+query.count : '';
    switch (type) {
        case SEARCH:
        case LAZY:
        return (dispatch) => {

            fetch('https://itunes.apple.com/search?'+queryOffset+query.query+queryLimit)
                .then(res => res.json())
                .then(res => {
                    if (res.results !== undefined) {
                        setTimeout(() => {
                            res.filter = query.query;
                            dispatch({ type: type , value: res })
                        }, 2000);
                    }
                });
        }
    }

}

const detailRequest = (query) => {
    if (query === false) {
        return dispatch => dispatch({ type: DETAIL , value: false })
    }
    return (dispatch) => {
        fetch('https://itunes.apple.com/lookup?'+query)
            .then(res => res.json())
            .then(res => {
                if (res.results !== undefined) {
                    dispatch({ type: DETAIL , value: res })
                }
            });
    }
}

const basketChange = (item , type) => {
    if (item === undefined) return false;
    switch (type) {
        case BASKET_ADD:
        case BASKET_REMOVE:
        case BASKET_REMOVE_MULTI:
            return (dispatch) => {
                setTimeout(() => {
                    dispatch({ type: type , value: item })
                }, 100);
            }
        default:
            return false;
    }
}

const removeBasketHandler = (item) => (dispatch) => dispatch({ type: TO_REMOVE , value: item })
    

const objFilter = (obj, callback) => {
    let newObj = {};
    for (let key in obj) if (callback(key, obj[key])) newObj[key] = obj[key];
    return newObj;
}

const objMapToArray = (obj, callback) => {
    let newArr = [];
    for (let key in obj) newArr.push(callback(key, obj[key]));
    return newArr;
}

export { asyncSearch , basketChange , removeBasketHandler, detailRequest , objFilter , objMapToArray };