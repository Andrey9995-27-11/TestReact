import React from 'react'
import Selecter from '../Selecter'

import './styles.sass'

import { listStore } from 'store/ListStore'

const Search = () => {
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
    listStore.asyncSearch({ filter })
  }

  return (
    <form className="search">
      <div className="search__field">
        <input
          type="text"
          name="term"
          onChange={onChangeHandler}
          className="input"
        />
      </div>
      <div className="search__field">
        <Selecter defaultType={type} onChange={setType} />
      </div>
      <div className="search__field">
        <button className="btn  btn--search" onClick={onSubmitHandler}>
          Найти
        </button>
      </div>
    </form>
  )
}

export default Search
