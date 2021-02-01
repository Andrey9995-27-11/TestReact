import { BASKET_ADD, BASKET_REMOVE, SEARCH } from './additional';

const asyncSearch = (query) => {
    return (dispatch) => {
        fetch('https://itunes.apple.com/search?'+query)
            .then(res => res.json())
            .then(res => {
                if (res.results !== undefined) {
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
            return (dispatch) => {
                setTimeout(() => {
                    dispatch({ type: type , value: item })
                }, 100);
            }
        default:
            return false;
    }
}

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

export { asyncSearch , basketChange , objFilter , objMapToArray };