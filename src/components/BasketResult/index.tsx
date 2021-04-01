import { FC } from 'react'

import './styles.sass'

type BasketResult = {
  toRemove?: Array<number>
  summ?: string
  removeHandler?: Function
}

const BasketResult: FC<BasketResult> = ({ toRemove, summ, removeHandler }) => {
  const onClickHandlerDelete = (e: any): void => {
    e.preventDefault()
    removeHandler && removeHandler()
  }
  return (
    <div className="basket-bottom">
      <div className="basket-bottom__summ">{summ}$</div>
      {toRemove?.length ? (
        <div className="btn" onClick={onClickHandlerDelete}>
          Удалить
        </div>
      ) : (
        false
      )}
    </div>
  )
}

export default BasketResult
