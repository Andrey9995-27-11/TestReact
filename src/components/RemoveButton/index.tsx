import { InBasket } from 'interface'
import { FC, useContext } from 'react'

import Checkbox from '@material-ui/core/Checkbox'

import './styles.sass'

import { CallbacksContext } from 'common/context'

type RemoveButtonProps = {
  id: number
  toRemove?: InBasket
}

export const RemoveButton: FC<RemoveButtonProps> = ({ id, toRemove }) => {
  const callbacks = useContext(CallbacksContext)

  const IS_CHECKED = toRemove?.includes(id)

  const toggleClass = (event: any): void => {
    event.preventDefault()
    id && callbacks.setToRemove && callbacks.setToRemove(id)
  }

  return (
    <Checkbox
      checked={IS_CHECKED}
      onClick={toggleClass}
      inputProps={{
        'aria-label': 'secondary checkbox',
      }}
    ></Checkbox>
  )
}
