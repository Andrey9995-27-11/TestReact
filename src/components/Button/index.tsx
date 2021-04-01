import { FC } from 'react'

import { BASKET_ADD, BASKET_DEFAULT, BASKET_REMOVE } from '../../js/additional'

import './styles.sass'
import { basketStore } from 'store/BasketStore'

type Button = {
  basketEvent?: string
  id?: number
  basketHandler?: Function
}

const Button: FC<Button> = ({ basketEvent, id }) => {
  switch (basketEvent) {
    case BASKET_REMOVE: {
      const onClickHandler = (e: any): void => {
        e.preventDefault()
        id && basketStore.removeFromBasket([id])
      }
      return (
        <div className="btn" onClick={(e) => onClickHandler(e)}>
          Удалить из корзины
        </div>
      )
    }
    case BASKET_ADD: {
      const onClickHandler = (e: any): void => {
        e.preventDefault()
        id && basketStore.addToBasket([id])
      }
      return (
        <div className="btn" onClick={(e) => onClickHandler(e)}>
          Добавить в корзину
        </div>
      )
    }
    case BASKET_DEFAULT:
    default:
      return <div className="btn  btn--disable">Товар в корзине</div>
  }
}

export default Button
