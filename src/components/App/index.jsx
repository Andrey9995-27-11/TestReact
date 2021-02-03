import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

/* routes */
import ListPage from '../../routes/ListPage';
import BasketPage from '../../routes/BasketPage';
import DetailPage from '../../routes/DetailPage';
import Page404 from '../../routes/Page404';

/* components */
import Header from '../Header';

/* styles */
import './styles.sass';

const history = createBrowserHistory();

const App = () => {

  return (
    <Router>
      <Header />
      <div className="main">
        <div className="container">
          <Switch>
            <Route path="/" exact component={ ListPage } />
            <Route path="/basket/" exact component={ BasketPage } />
            <Route path="/detail/" exact component={ DetailPage } />
            <Route component={ Page404 } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;