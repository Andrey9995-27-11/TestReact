import React from 'react'

import { MEDIA } from '../../js/additional'
import { objFilter, objMapToArray } from '../../js/functions'

import './styles.sass'

const Selecter = (props) => {
  const [mediaType, setMedia] = React.useState({
    value: 'All',
    items: objFilter(MEDIA, (key) => key !== 'All'),
  })
  const [selecter, setSelecter] = React.useState('')

  const CLASS_ACTIVE = 'selecter--active'
  const onSelectClick = () => setSelecter(selecter === '' ? CLASS_ACTIVE : '')

  React.useEffect(() => {
    document.body.addEventListener('click', bodyClickHandler)
    return () => document.body.removeEventListener('click', bodyClickHandler)
  })

  function onOptionClick(e) {
    e.stopPropagation()
    const value = e.target.getAttribute('value')
    setMedia({ value: value, items: objFilter(MEDIA, (key) => key !== value) })
    props.selectValue(MEDIA[value].value)
    onSelectClick()
  }

  function bodyClickHandler(e) {
    if (e.target.closest('.selecter') === null) setSelecter('')
  }

  const mediaTypes = objMapToArray(mediaType.items, (key, element) => (
    <li
      className="selecter__item"
      key={key}
      onClick={onOptionClick}
      value={key}
    >
      {element.name}
    </li>
  ))

  return (
    <div className={'selecter ' + selecter} onClick={onSelectClick}>
      <input
        type="text"
        name="media"
        onChange={(e) => e.preventDefault()}
        value={MEDIA[mediaType.value].value}
      />
      <div className="input">{MEDIA[mediaType.value].name}</div>
      <ul className="selecter__list">{mediaTypes}</ul>
    </div>
  )
}

export default Selecter
