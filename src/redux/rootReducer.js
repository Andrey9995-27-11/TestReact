import { BASKET_ADD, BASKET_REMOVE, SEARCH } from '../js/additional';

function rootReducer(state, action) {
    switch (action.type) {
        case SEARCH:
            state.listPage = action.value;
            return state;
        case BASKET_ADD:
            state.basketPage.results.forEach(element => { if (element.ID === action.value.ID) return state });
            state.basketPage.results.push(action.value);
            return state;
        case BASKET_REMOVE:
            state.basketPage.results.map(element => { if (element.ID === action.value.ID) element.remove() });
            return state;
    }
    return state;
}

export default rootReducer;