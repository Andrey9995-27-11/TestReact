import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware , createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import App from './components/App';
// import initialState from './js/additional';

import './css/index.sass';

const store = createStore(reducer, {}, applyMiddleware(thunk));

const stateLog = () => console.log(store.getState());

store.subscribe(stateLog);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);