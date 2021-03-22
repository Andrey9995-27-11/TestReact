import React from 'react'

const ButtonLazy = (props) => {
  const lazyLoad = (e) => {
    e.preventDefault()
    props.toggleIsSearching()
    props.lazyEvent({ query: props.filter, count: props.count })
  }
  return (
    <div className="btn" onClick={lazyLoad}>
      Ещё
    </div>
  )
}

export default ButtonLazy
