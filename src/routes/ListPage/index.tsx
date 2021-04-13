import { Observer } from 'mobx-react-lite'
import { List } from 'components/List'
import { VariantList } from 'components/List/variants/list'
import { Search } from 'components/Search'
import { basketStore, listStore } from 'store'
import { CallbacksContext } from 'common/context'

import './styles.sass'

const Route = () => {
  const { addToBasket } = basketStore
  const lazy = listStore.Lazy
  return (
    <CallbacksContext.Provider value={{ addToBasket, lazy }}>
      <Observer>
        {() => (
          <section className="list-page">
            <Search />
            <List>
              <VariantList
                inBasket={basketStore.inBasket}
                results={listStore.results}
                lazy={listStore.lazyBtn}
                isSearching={listStore.isSearching}
                notFound={listStore.notFound}
              />
            </List>
          </section>
        )}
      </Observer>
    </CallbacksContext.Provider>
  )
}

export default Route
