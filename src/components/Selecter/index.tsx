import React, { FC } from 'react'
import { MEDIA } from './data'
import { objFilter, objMapToArray } from 'functions'

import './styles.sass'

interface SelecterProps {
  defaultType: string
  onChange?: Function
}

export const Selecter: FC<SelecterProps> = ({ defaultType, onChange }) => {
  const CLASS_ACTIVE = 'selecter--active'
  const [value, setValue] = React.useState(defaultType)
  const items = objFilter(MEDIA, (key) => key !== value)
  const [selecter, setSelecter] = React.useState('')
  React.useEffect(() => {
    document.body.addEventListener('click', bodyClickHandler)
    return () => document.body.removeEventListener('click', bodyClickHandler)
  })
  function onOptionClick(event: any) {
    event.stopPropagation()
    const value = event.target.getAttribute('value')
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
      onClick={() => setSelecter(selecter === CLASS_ACTIVE ? '' : CLASS_ACTIVE)}
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
