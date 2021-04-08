import { FC } from 'react'
import {
  BASKET_ADD,
  BASKET_DEFAULT,
  BASKET_REMOVE,
  BASKET_REMOVE_MULTI,
  LAZY,
} from 'js/additional'
import { BasketEvent } from 'store'

import './styles.sass'

interface ButtonProps {
  btnEvent?: string
  id?: number
  basketHandler?: BasketEvent
  lazyHandler?: () => void
  removeAllHandler?: () => void
}

export const Button: FC<ButtonProps> = ({
  btnEvent,
  id,
  basketHandler = () => {},
  lazyHandler = () => {},
  removeAllHandler = () => {},
}) => {
  const basketHandlerWrapper = (e: any) => {
    e.preventDefault()
    id && basketHandler([id])
  }
  switch (btnEvent) {
    case BASKET_REMOVE: {
      return (
        <div className="btn" onClick={basketHandlerWrapper}>
          Удалить из корзины
        </div>
      )
    }
    case BASKET_ADD: {
      return (
        <div className="btn" onClick={basketHandlerWrapper}>
          Добавить в корзину
        </div>
      )
    }
    case BASKET_REMOVE_MULTI: {
      return (
        <div className="btn" onClick={removeAllHandler}>
          Удалить
        </div>
      )
    }
    case LAZY: {
      return (
        <div className="btn" onClick={lazyHandler}>
          Ещё
        </div>
      )
    }
    case BASKET_DEFAULT:
    default:
      return <div className="btn  btn--disable">Товар в корзине</div>
  }
}
