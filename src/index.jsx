import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware , createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import reducer from './reducers';
import App from './components/App';

import './css/index.sass';

const store = createStore(reducer, {}, applyMiddleware(thunk));

const stateLog = () => console.log(store.getState());

store.subscribe(stateLog);

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);