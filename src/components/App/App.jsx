import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Basket from '../Basket/Basket.jsx';
import ListPage from '../ListPage/ListPage.jsx';
import { BASKET_ADD, BASKET_REMOVE } from '../../js/additional';

import './App.sass';

const App = (props) => {

  let state = (storeState => {
    return {
      listPage: storeState.listPage,
      basketPage: storeState.basketPage,
      detailPage: storeState.detailPage,
    }
  })(props.store.getState());

  return (
    <BrowserRouter>
      <Header count={state.basketPage.results.length} callbacks={ props.callbacks }/>
      <div className="main">
        <div className="container">
          <Route path="/basket" render={() => <Basket state={ state.basketPage } callbacks={ props.callbacks } basketEvent={BASKET_REMOVE} />} />
          <Route exact path="/" render={() => <ListPage state={ state.listPage } toremove={ state.basketPage.toremove } inBasket={ state.basketPage.items } callbacks={ props.callbacks } basketEvent={BASKET_ADD} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;