import React from 'react'
import { Selecter } from '../Selecter'

import './styles.sass'

import { listStore } from 'store/ListStore'
import { Button } from 'components/Button'

export const Search = () => {
  const [type, setType] = React.useState('')
  const [value, setValue] = React.useState('')

  function onChangeHandler(e: any) {
    e.preventDefault()
    setValue(e.target.value)
  }

  function onSubmitHandler(e: any) {
    e.preventDefault()
    if (!value) return
    const filter = '&term=' + value + (type ? '&media=' + type : '')
    listStore.Search(filter)
  }

  return (
    <form className="search">
      <div className="search__field">
        <input
          type="text"
          name="term"
          onChange={onChangeHandler}
          className="input"
          value={value}
        />
      </div>
      <div className="search__field">
        <Selecter defaultType={type} onChange={setType} />
      </div>
      <div className="search__field">
        <Button value="Найти" onClick={onSubmitHandler}></Button>
      </div>
    </form>
  )
}
