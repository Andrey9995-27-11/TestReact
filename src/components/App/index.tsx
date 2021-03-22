import { Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

/* routes */
import ListPage from '../../routes/ListPage'
import BasketPage from '../../routes/BasketPage'
import DetailPage from '../../routes/DetailPage'
import Page404 from '../../routes/Page404'

/* components */
import Header from '../Header'
import Footer from '../Footer'

/* styles */
import './styles.sass'

const App = observer((props) => {
  return (
    <div className="body">
      {/* <div className={'body ' + theme.theme}>
      <Header count={theme.count} themeToggler={theme.themeToggler} /> */}
      <main className="main">
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListPage} />
            <Route path="/basket" exact component={BasketPage} />
            <Route path="/detail/:id" exact component={DetailPage} />
            <Route component={Page404} />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  )
})

export default App
