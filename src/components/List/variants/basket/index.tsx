import { FC, useContext } from 'react'

import { Item } from 'components/Item'
import { VariantBasketItem } from 'components/Item/variants/basket'
import { Button } from 'components/Button'
import { Preloader } from 'components/Preloader'

import { InBasket } from 'interface'

import { DefaultListProps } from '../../props'
import { CallbacksContext } from 'common/context'

export interface VariantBasketProps extends DefaultListProps {
  toRemove?: InBasket
  isSearching?: boolean
}

export const VariantBasket: FC<VariantBasketProps> = ({
  inBasket,
  results,
  toRemove,
  isSearching,
}) => {
  const callbacks = useContext(CallbacksContext)
  const buttonTemplate = (id?: number) => {
    let defaultProps = {
      value: 'Удалить из корзины',
      onClick: (event: any) => {
        event.preventDefault()
        id && callbacks.removeFromBasket && callbacks.removeFromBasket([id])
      },
    }
    return <Button {...defaultProps} />
  }
  let message: string | undefined
  if (!inBasket?.length) message = 'Ваша корзина пуста'
  return message ? (
    <>{message}</>
  ) : (
    <ul className="list">
      {results.map((element) => (
        <Item key={element.ID}>
          <VariantBasketItem
            result={element}
            {...{ toRemove }}
            Button={buttonTemplate(element.ID)}
          />
        </Item>
      ))}
      {isSearching && <Preloader />}
    </ul>
  )
}
