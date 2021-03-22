import React from 'react'

import './styles.sass'

const CHECKED_CLASS = 'btn-remove--checked'

const RemoveButton = (props) => {
  if (props.visible === false) return false

  const REMOVE_CLASS =
    props.toRemove !== undefined && props.toRemove.indexOf(props.id) > -1
      ? CHECKED_CLASS
      : ''

  const toggleClass = (e) => {
    e.preventDefault()
    props.toRemoveHandler(props.id)
  }

  return (
    <div className={'btn-remove ' + REMOVE_CLASS} onClick={toggleClass}></div>
  )
}

export default RemoveButton
