import { FC, useContext } from 'react'

import { Item } from 'components/Item'
import { VariantBasketItem } from 'components/Item/variants/basket'
import { Preloader } from 'components/Preloader'

import { InBasket } from 'interface'

import { BASKET_REMOVE } from 'js/additional'

import { DefaultListProps } from '../../props'
import { CallbacksContext } from 'common/context'

export interface VariantBasketProps extends DefaultListProps {
  toRemove?: InBasket
  isSearching?: boolean
}

export const VariantBasket: FC<VariantBasketProps> = ({
  inBasket,
  list,
  toRemove,
  isSearching,
}) => {
  const callbacks = useContext(CallbacksContext)
  let message: string | undefined
  if (!inBasket?.length) message = 'Ваша корзина пуста'
  return message ? (
    <>{message}</>
  ) : (
    <ul className="list">
      {list.map((element) => (
        <Item key={element.ID}>
          <VariantBasketItem
            result={element}
            btnEvent={BASKET_REMOVE}
            basketHandler={callbacks.removeFromBasket}
            {...{ toRemove }}
          />
        </Item>
      ))}
      {isSearching && <Preloader />}
    </ul>
  )
}
