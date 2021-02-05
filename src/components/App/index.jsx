import React from 'react';
import { connect } from 'react-redux';
import { Route , Switch } from 'react-router-dom';

/* routes */
import ListPage from '../../routes/ListPage';
import BasketPage from '../../routes/BasketPage';
import DetailPage from '../../routes/DetailPage';
import Page404 from '../../routes/Page404';

/* components */
import Header from '../Header';
import Footer from '../Footer';

import { THEME_TOGGLE } from '../../js/additional';

/* styles */
import './styles.sass';

const mapStateToProps = state => ({ 
  theme : state.theme ,
  count : state.basket.results.length ,
});

const mapDispatchToProps = dispatch => ({ 
  themeToggler : () => dispatch({type: THEME_TOGGLE})
});

const App = (props) => {

  return (
      <div className={ 'body ' + props.theme }>
        <Header count={ props.count } themeToggler={ props.themeToggler }/>
        <main className="main">
          <div className="container">
            <Switch>
              <Route path="/" exact component={ ListPage } />
              <Route path="/basket" exact component={ BasketPage } />
              <Route path="/detail/:id" exact component={ DetailPage } />
              <Route component={ Page404 } />
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);