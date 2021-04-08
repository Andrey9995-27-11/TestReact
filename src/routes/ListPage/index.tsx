import { observer } from 'mobx-react-lite'
import { List } from 'components/List'
import { VariantList } from 'components/List/variants/list'
import { Search } from 'components/Search'
import { basketStore, listStore } from 'store'
import { CallbacksContext } from 'common/context'

import './styles.sass'

const Route = observer(() => {
  const { addToBasket } = basketStore
  const { Lazy } = listStore
  return (
    <CallbacksContext.Provider value={{ addToBasket, lazy: Lazy }}>
      <section className="list-page">
        <Search />
        <List>
          <VariantList
            inBasket={basketStore.inBasket}
            list={listStore.results}
            lazy={listStore.lazyBtn}
            isSearching={listStore.isSearching}
            notFound={listStore.notFound}
          />
        </List>
      </section>
    </CallbacksContext.Provider>
  )
})

export default Route
