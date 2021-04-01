import { FC } from 'react'
import { Route, Switch } from 'react-router-dom'

/* routes */
import ListPage from 'routes/ListPage'
import BasketPage from 'routes/BasketPage'
import DetailPage from 'routes/DetailPage'
import Page404 from 'routes/Page404'

/* components */
import Header from '../Header'
import Footer from '../Footer'

/* styles */
import './styles.sass'

import { themeStore } from 'store/ThemeStore'
import { observer } from 'mobx-react-lite'

const App = observer(() => {
  return (
    <div className={'body ' + themeStore.value}>
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
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  )
})

export default App
