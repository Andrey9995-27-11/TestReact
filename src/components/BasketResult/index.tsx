import { FC } from 'react'
import { Button } from 'components/Button'

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
  const buttonTemplate = () => {
    let defaultProps = {
      value: 'Удалить',
      onClick: (event: any) => {
        event.preventDefault()
        removeAllHandler && removeAllHandler()
      },
    }
    return <Button {...defaultProps} />
  }
  return (
    <div className="basket-bottom">
      {listLength && <div className="basket-bottom__summ">{summ}$</div>}
      {listLength && !!toRemove?.length && buttonTemplate()}
    </div>
  )
}
