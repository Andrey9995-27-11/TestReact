import { useEffect } from 'react'
import { observer, Observer } from 'mobx-react-lite'
import { List } from 'components/List'
import { VariantBasket } from 'components/List/variants/basket'
import { BasketResult } from 'components/BasketResult'
import { basketStore } from 'store'
import { CallbacksContext } from 'common/context'

import './styles.sass'

const Route = observer(() => {
  useEffect(() => {
    basketStore.Search()
    return () => basketStore.destroy()
  })
  const { removeFromBasket, setToRemove } = basketStore
  return (
    <CallbacksContext.Provider value={{ removeFromBasket, setToRemove }}>
      <Observer>
        {() => (
          <section className="basket-page">
            <List>
              <VariantBasket
                list={basketStore.results}
                inBasket={basketStore.inBasket}
                isSearching={basketStore.isSearching}
                toRemove={basketStore.toRemove}
              />
            </List>
            <BasketResult
              summ={basketStore.summ.toFixed(2)}
              toRemove={basketStore.toRemove}
              listLength={!!basketStore.results.length}
              removeAllHandler={basketStore.removeInToRemove}
            />
          </section>
        )}
      </Observer>
    </CallbacksContext.Provider>
  )
})

export default Route
