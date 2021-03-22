import React from 'react'

import Selecter from '../Selecter'

import './styles.sass'

const Search = (props) => {
  const [term, setTerm] = React.useState({ value: '', type: '' })
  const onChangeHandler = (e) => setTerm({ ...term, value: e.target.value })

  const setSelectValue = (value) => {
    setTerm({ ...term, type: '&media=' + value })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (term.value === '') return false
    let query = '&term=' + term.value + term.type
    props.toggleIsSearching()
    props.asyncSearch({ query: query })
  }

  return (
    <form className="search" onSubmit={onSubmitHandler}>
      <div className="search__field">
        <input
          type="text"
          name="term"
          onChange={onChangeHandler}
          className="input"
          value={term.value}
        />
      </div>
      <div className="search__field">
        <Selecter selectValue={setSelectValue} />
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
