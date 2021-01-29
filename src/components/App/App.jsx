import React from 'react';
import { BrowserRouter , Route , Router} from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Basket from '../Basket/Basket.jsx';
import ListPage from '../ListPage/ListPage.jsx';
import './App.sass';

const App = (props) => {

  let state = (() => {
    let storeState = props.store.getState();
    return {
      listPage: storeState.listPage,
      basketPage: storeState.basketPage,
      detailPage: storeState.detailPage,
    }
  })();

  return (
    <BrowserRouter>
      <Header count={state.basketPage.results.length} callbacks={ props.callbacks } dispatch={ props.store.dispatch }/>
      <div className="main">
        <div className="container">
          <Route path="/basket" render={() => <Basket state={ state.basketPage } callbacks={ props.callbacks } dispatch={ props.store.dispatch } />} />
          <Route exact path="/" render={() => <ListPage state={ state.listPage } callbacks={ props.callbacks } dispatch={ props.store.dispatch } />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;