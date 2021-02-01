import { BASKET_ADD, BASKET_REMOVE, SEARCH , TO_REMOVE } from '../js/additional';

function rootReducer(state, action) {
    // debugger
    switch (action.type) {
        case SEARCH:
            action.value.results.forEach(element => {
                element.ID = element.trackId || element.collectionId; 
                element.NAME = element.trackName || element.collectionName;
                element.PRICE = element.trackPrice || element.collectionPrice || element.price;
            });
            state.listPage = action.value;
            return state;
        case BASKET_ADD:
            state.basketPage.items = [];
            state.basketPage.summ = 0;
            if (Array.isArray(action.value)) {
                action.value.forEach(actionValue => {
                    let isset = state.basketPage.items.indexOf(actionValue.ID) > -1;
                    if (!isset) {
                        state.basketPage.results.push(actionValue);
                    }
                })
            } else {
                let isset = state.basketPage.items.indexOf(action.value.ID) > -1;
                if (!isset) {
                    state.basketPage.results.push(action.value);
                }
            }
            state.basketPage.results.forEach(element => { state.basketPage.items.push(element.ID); state.basketPage.summ += element.PRICE });
            return state;
        case BASKET_REMOVE:
            state.basketPage.items = [];
            state.basketPage.summ = 0;
            if (Array.isArray(action.value)) {
                state.basketPage.results = state.basketPage.results.filter(element => action.value.indexOf(element.ID) < 0);
            } else {
                state.basketPage.results = state.basketPage.results.filter(element => element.ID !== action.value.ID);
            }
            state.basketPage.results.forEach(element => { state.basketPage.items.push(element.ID); state.basketPage.summ += element.PRICE });
            state.basketPage.toremove = state.basketPage.toremove.filter(id => action.value.indexOf(id) < 0 );
            return state;
        case TO_REMOVE:
            if (action.value === false) {
                state.basketPage.toremove = [];
            } else if (state.basketPage.toremove.indexOf(action.value) < 0) {
                state.basketPage.toremove.push(action.value);
            } else if (state.basketPage.toremove.length) {
                state.basketPage.toremove = state.basketPage.toremove.filter(element => element !== action.value);
            }
            return state;
    }
    return state;
}

export default rootReducer;