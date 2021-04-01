import React, { FC } from 'react'

import { MEDIA } from './data'
import { objFilter, objMapToArray } from 'functions'

import './styles.sass'

interface Selecter {
  defaultType: string
  onChange?: Function
}

const Selecter: FC<Selecter> = ({ defaultType = 'All', onChange }) => {
  const CLASS_ACTIVE = 'selecter--active'
  const [value, setValue] = React.useState(defaultType)
  const items = objFilter(MEDIA, (key) => key !== value)
  const [selecter, setSelecter] = React.useState('')
  React.useEffect(() => {
    document.body.addEventListener('click', bodyClickHandler)
    return () => document.body.removeEventListener('click', bodyClickHandler)
  })
  function onOptionClick(e: any) {
    e.stopPropagation()
    const value = e.target.getAttribute('value')
    setValue(value)
    setSelecter('')
    onChange && onChange(value)
  }
  function bodyClickHandler(e: any) {
    !e.target.closest('.selecter') && setSelecter('')
  }
  const mediaTypes = objMapToArray(
    items,
    (
      key: string,
      element: {
        name: string
      },
    ): JSX.Element => (
      <li
        className="selecter__item"
        key={key}
        value={key}
        onClick={onOptionClick}
      >
        {element.name}
      </li>
    ),
  )

  return (
    <div
      className={'selecter ' + selecter}
      onClick={() => setSelecter(CLASS_ACTIVE)}
    >
      <input
        type="text"
        name="media"
        onChange={(e) => e.preventDefault()}
        value={value}
      />
      <div className="input">{MEDIA[value].name}</div>
      <ul className="selecter__list">{mediaTypes}</ul>
    </div>
  )
}

export default Selecter
