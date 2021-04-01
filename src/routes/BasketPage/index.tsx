import React from 'react'

import List from 'components/List'
import BasketResult from 'components/BasketResult'

import './styles.sass'
import { Observer } from 'mobx-react-lite'

import { basketStore } from 'store/BasketStore'

const Route = () => {
  const [toRemove, setToRemove] = React.useState([])
  React.useEffect(() => {
    basketStore.responseBasketItems()
    return () => basketStore.destroy()
  })
  return (
    <Observer>
      {() => (
        <section className="basket-page">
          <List
            type={'basket'}
            list={basketStore.results}
            inBasket={basketStore.inBasket}
            setToRemove={setToRemove}
            toRemove={toRemove}
          />
          <BasketResult
            toRemove={toRemove}
            summ={basketStore.summ.toFixed(2)}
          />
        </section>
      )}
    </Observer>
  )
}

export default Route
