import { FC } from 'react'
import { Button } from 'components/Button'

import { BASKET_REMOVE_MULTI } from 'js/additional'

import './styles.sass'

interface BasketResultProps {
  toRemove?: Array<number>
  summ?: string
  listLength?: boolean
  removeAllHandler?: () => void
}

export const BasketResult: FC<BasketResultProps> = ({
  toRemove,
  listLength,
  summ,
  removeAllHandler,
}) => {
  return (
    <div className="basket-bottom">
      {listLength && <div className="basket-bottom__summ">{summ}$</div>}
      {!!toRemove?.length && (
        <Button
          btnEvent={BASKET_REMOVE_MULTI}
          removeAllHandler={removeAllHandler}
        />
      )}
    </div>
  )
}
