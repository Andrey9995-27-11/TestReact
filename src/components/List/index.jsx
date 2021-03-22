import React from 'react'

import Item from '../Item'
import Preloader from '../Preloader'

import { BASKET_ADD, BASKET_REMOVE } from '../../js/additional'

import './styles.sass'

const locMessage = {
  basketempty: 'Ваша корзина пуста',
  notfound: 'По вашему запросу ничего не найдено',
  searchempty: 'Введите поисковый запрос',
  _currentState: false,
  get currentState() {
    return this._currentState
  },
  set currentState(value) {
    this._currentState = value
  },
}

const List = (props) => {
  const BASKET_EVENT = props.inBasket !== undefined ? BASKET_ADD : BASKET_REMOVE

  if (!props.isSearching) {
    if (props.list.length < 1 && BASKET_EVENT === BASKET_REMOVE) {
      locMessage.currentState = locMessage.basketempty
    } else if (props.list.length < 1 && props.notFound) {
      locMessage.currentState = locMessage.notfound
    } else if (props.list.length < 1) {
      locMessage.currentState = locMessage.searchempty
    }
  }
  if (locMessage.currentState) {
    return <div className="list-wrapper">{locMessage.currentState}</div>
  }

  const getBtnEvent = (id) =>
    BASKET_EVENT === BASKET_ADD
      ? props.inBasket.indexOf(id) < 0
        ? BASKET_EVENT
        : false
      : BASKET_EVENT

  const mapItems = props.list.map((element) => (
    <Item
      key={element.ID}
      toRemoveHandler={props.toRemoveHandler}
      basketChange={props.basketChange}
      toRemove={props.toRemove}
      basketEvent={getBtnEvent(element.ID)}
      result={element}
    />
  ))

  return (
    <div className="list-wrapper">
      <ul className="list">{mapItems}</ul>
      {props.isSearching && <Preloader />}
    </div>
  )
}

export default List
