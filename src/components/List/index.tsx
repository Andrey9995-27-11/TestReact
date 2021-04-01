import { FC } from 'react'

import Item from 'components/Item'
import Preloader from 'components/Preloader'
import ButtonLazy from 'components/ButtonLazy'

import { Response, InBasket } from 'interface'

import './styles.sass'
import { BASKET_ADD, BASKET_REMOVE, BASKET_DEFAULT } from 'js/additional'

export const messages: { [key: string]: string } = {
  basketempty: 'Ваша корзина пуста',
  notfound: 'По вашему запросу ничего не найдено',
  searchempty: 'Введите поисковый запрос',
}

interface List {
  type?: 'list' | 'basket'
  inBasket?: InBasket
  isSearching?: boolean
  list: Array<Response>
  notFound?: boolean
  lazy?: boolean
  basketHandler?: Function
  toRemove?: InBasket
  setToRemove?: Function
}

const List: FC<List> = ({
  type = 'list',
  inBasket,
  isSearching,
  list,
  notFound,
  lazy,
  basketHandler,
  toRemove,
  setToRemove,
}) => {
  let message: string | undefined
  let template
  switch (type) {
    case 'basket': {
      if (!inBasket?.length) message = messages.basketempty
      if (message) {
        template = <div className="list-wrapper">{message}</div>
      } else {
        const mapItems = list.map((element) => (
          <Item
            key={element.ID}
            result={element}
            basketEvent={BASKET_REMOVE}
            basketHandler={basketHandler}
            toRemove={toRemove}
            setToRemove={setToRemove}
          />
        ))
        template = (
          <div className="list-wrapper">
            <ul className="list">{mapItems}</ul>
          </div>
        )
      }
      break
    }
    case 'list':
    default: {
      if (notFound) message = messages.notfound
      else if (!list.length && !isSearching) message = messages.searchempty
      if (message) {
        template = <div className="list-wrapper">{message}</div>
      } else {
        const basketEvent = (id?: number): string =>
          id && !inBasket?.includes(id) ? BASKET_ADD : BASKET_DEFAULT
        const mapItems = list.map((element) => (
          <Item
            key={element.ID}
            result={element}
            basketEvent={basketEvent(element.ID)}
            basketHandler={basketHandler}
          />
        ))
        template = (
          <div className="list-wrapper">
            <ul className="list">{mapItems}</ul>
            {lazy && !isSearching && <ButtonLazy />}
            {isSearching && <Preloader />}
          </div>
        )
      }
      break
    }
  }

  return template
}

export default List
