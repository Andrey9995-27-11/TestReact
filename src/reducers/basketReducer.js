import { BASKET_ADD, BASKET_REMOVE , BASKET_REMOVE_MULTI , TO_REMOVE } from '../js/additional';

const initialState = {
    results : [],
    toremove : [],
    summ : 0,
};

const basketReducer = ( state = initialState, action ) => {
    let summ = 0;
    switch (action.type) {
        case BASKET_ADD:
        {
            let resultBasket = state.results.concat(action.value);
            resultBasket.forEach(el=>summ+=el.PRICE)
            return {
                ...state,
                results : resultBasket,
                summ : summ,
            };
        }
        case BASKET_REMOVE:
        {
            debugger
            let results = state.results.filter(element => element.ID !== action.value );
            results.forEach(element => summ += element.PRICE );
            return {
                ...state,
                results : results,
                summ : summ,
                toremove : state.toremove.filter(id => id !== action.value )
            };
        }
        case BASKET_REMOVE_MULTI:
        {
            debugger
            let results = state.results.filter(element => action.value.indexOf(element.ID) < 0);
            results.forEach(element => summ += element.PRICE );
            return {
                ...state,
                results : results,
                summ : summ,
                toremove : state.toremove.filter(id => action.value.indexOf(id) < 0 )
            };
        }
        case TO_REMOVE:
        {
            if (action.value === false) {
                return {
                    ...state,
                    toremove : []
                }
            } else if (state.toremove.indexOf(action.value) < 0) {
                return {
                    ...state,
                    toremove : state.toremove.concat(action.value)
                }
            } else if (state.toremove.length) {
                return {
                    ...state,
                    toremove : state.toremove.filter(element => element !== action.value)
                }
            }
            return state;
        }
    }
    return state;
}

export default basketReducer;