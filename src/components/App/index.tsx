import { Route, Switch } from 'react-router-dom'

/* routes */
import ListPage from 'routes/ListPage'
import BasketPage from 'routes/BasketPage'
import DetailPage from 'routes/DetailPage'
import Page404 from 'routes/Page404'
import { Game } from 'routes/Tutorials/Tutorial'
import { Quotes } from 'routes/Tutorials/Quotes'
import { FilterableProductTable } from 'routes/Tutorials/Shop'
import { FilterableProductTable2, PRODUCTS } from 'routes/Tutorials/Test'

/* components */
import { Header } from 'components/Header'
import { Body } from 'components/Body'
import { Footer } from 'components/Footer'

/* styles */
import './styles.sass'

export const App = () => {
  return (
    <Body>
      <Header />
      <main className="main">
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <ListPage />
            </Route>
            <Route path="/basket" exact>
              <BasketPage />
            </Route>
            <Route path="/detail/:id">
              <DetailPage />
            </Route>
            <Route path="/tutorial" exact>
              <Game />
            </Route>
            <Route path="/quotes" exact>
              <Quotes />
            </Route>
            <Route path="/shop" exact>
              <FilterableProductTable />
            </Route>
            <Route path="/test" exact>
              <FilterableProductTable2 products={PRODUCTS} />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </Body>
  )
}
