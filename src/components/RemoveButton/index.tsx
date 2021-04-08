import { InBasket } from 'interface'
import { FC, useContext } from 'react'

import './styles.sass'

import { CallbacksContext } from 'common/context'

type RemoveButtonProps = {
  id: number
  toRemove?: InBasket
}

export const RemoveButton: FC<RemoveButtonProps> = ({ id, toRemove }) => {
  const callbacks = useContext(CallbacksContext)

  const CHECKED_CLASS = 'btn-remove--checked'
  const IS_CHECKED = toRemove?.includes(id)

  const toggleClass = (event: any): void => {
    event.preventDefault()
    id && callbacks.setToRemove && callbacks.setToRemove(id)
  }

  return (
    <div
      className={'btn-remove ' + (IS_CHECKED && CHECKED_CLASS)}
      onClick={toggleClass}
    ></div>
  )
}
