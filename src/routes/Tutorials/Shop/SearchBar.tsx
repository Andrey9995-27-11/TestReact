import { FC } from 'react'

interface SearchBarProps {
  searchString: string
  inStock: boolean
  onChangeText: Function
  onChangeCheck: Function
  onSubmit: Function
}
export const SearchBar: FC<SearchBarProps> = ({
  searchString,
  inStock,
  onChangeText,
  onChangeCheck,
  onSubmit,
}) => {
  function onChangeFunction(event: any) {
    const type = event.currentTarget.getAttribute('name')
    let value
    switch (type) {
      case 'searchString': {
        event.preventDefault()
        value = event.target.value
        onChangeText(value)
        break
      }
      case 'inStock': {
        value = event.target.checked
        onChangeCheck(value)
        break
      }
    }
  }
  function onSubmitHandler(e: any) {
    e.preventDefault()
    onSubmit()
  }
  return (
    <div className="search-container">
      <input
        name="searchString"
        type="text"
        value={searchString}
        onChange={onChangeFunction}
        placeholder="Search..."
      />
      <label style={{ display: 'block' }}>
        <input
          name="inStock"
          type="checkbox"
          onChange={onChangeFunction}
          checked={inStock}
        />
        {'  '} inStock = {inStock ? 'true' : 'false'}
      </label>
      <input
        type="submit"
        value="Найти"
        onClick={onSubmitHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  )
}
