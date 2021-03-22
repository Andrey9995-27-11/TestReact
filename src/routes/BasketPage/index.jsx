import React from 'react'

import List from '../../components/List'
import BasketResult from '../../components/BasketResult'
import { basketChange, removeBasketHandler } from '../../js/functions'

import './styles.sass'

const Route = (props) => {
  React.useEffect(
    () => () => {
      props.removeBasketHandler(false)
    },
    [],
  )
  return (
    <section className="basket-page">
      <List
        list={props.list}
        toRemoveHandler={props.removeBasketHandler}
        toRemove={props.toremove}
        basketChange={props.basketChange}
      />
      <BasketResult
        summ={props.summ}
        toRemove={props.toremove}
        basketChange={props.basketChange}
      />
    </section>
  )
}

export default Route
