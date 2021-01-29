import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware , createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './redux/rootReducer';
import App from './components/App/App.jsx'
// import reportWebVitals from './js/reportWebVitals';
import { initialState } from './js/additional';
import { asyncSearch , basketChange } from './js/functions';

import './css/index.sass';

const rootEl = document.getElementById('root');
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const stateLog = () => console.log(store.getState());

const renderHandler = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App store={store} callbacks={{ asyncSearch: asyncSearch , basketChange: basketChange}} />
        </Provider>,
        rootEl
    );
}

window.reRender = renderHandler;

store.subscribe(() => { renderHandler(); stateLog() });

renderHandler();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();