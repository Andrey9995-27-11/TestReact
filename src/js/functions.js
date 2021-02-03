import { BASKET_ADD, BASKET_REMOVE, BASKET_REMOVE_MULTI, SEARCH, TO_REMOVE } from './additional';

const asyncSearch = (query) => {
    return (dispatch) => {
        fetch('https://itunes.apple.com/search?'+query)
            .then(res => res.json())
            .then(res => {
                if (res.results !== undefined) {
                    setTimeout(() => {
                        res.filter = query;
                        dispatch({ type: SEARCH , value: res })
                    }, 500);
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

export { asyncSearch , basketChange , removeBasketHandler, objFilter , objMapToArray };