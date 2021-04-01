import { FC } from 'react'

import './styles.sass'

type RemoveButton = {
  id?: number
}

const RemoveButton: FC<RemoveButton> = ({ id }) => {
  const CHECKED_CLASS = 'btn-remove--checked'

  const toggleClass = (e: any): void => {}

  return <div className={'btn-remove '} onClick={toggleClass}></div>
}

export default RemoveButton
