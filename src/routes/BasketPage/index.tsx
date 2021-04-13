import { useEffect, useState } from 'react'
import { observer, Observer } from 'mobx-react-lite'
import { List } from 'components/List'
import { VariantBasket } from 'components/List/variants/basket'
import { BasketResult } from 'components/BasketResult'
import { basketStore } from 'store'
import { CallbacksContext } from 'common/context'

import './styles.sass'

const Route = observer(() => {
  const [toRemove, setToRemoveHandler] = useState<Array<number>>([])

  const setToRemove = (id: number) => {
    if (toRemove.includes(id)) {
      setToRemoveHandler(toRemove.filter((element) => element !== id))
    } else {
      setToRemoveHandler(toRemove.concat(id))
    }
  }

  const { removeFromBasket } = basketStore

  useEffect(() => {
    basketStore.Search()
    return () => basketStore.destroy()
  }, [!!basketStore.inBasket.length])

  useEffect(() => {
    setToRemoveHandler(
      toRemove.filter((id) => basketStore.inBasket.includes(id)),
    )
  }, [basketStore.inBasket.length])

  return (
    <CallbacksContext.Provider value={{ removeFromBasket, setToRemove }}>
      <section className="basket-page">
        <List>
          <VariantBasket
            results={basketStore.results}
            inBasket={basketStore.inBasket}
            isSearching={basketStore.isSearching}
            toRemove={toRemove}
          />
        </List>
        <BasketResult
          summ={basketStore.summ.toFixed(2)}
          toRemove={toRemove}
          listLength={!!basketStore.results.length}
          removeAllHandler={() => {
            removeFromBasket(toRemove)
          }}
        />
      </section>
    </CallbacksContext.Provider>
  )
})

export default Route
