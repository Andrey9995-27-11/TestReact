import { FC } from 'react'

import { listStore } from 'store/ListStore'

const ButtonLazy = () => {
  const lazyLoad = (e: any): void => {
    e.preventDefault()
    listStore.asyncSearch({ type: 'lazy' })
  }
  return (
    <div className="btn" onClick={lazyLoad}>
      Ещё
    </div>
  )
}

export default ButtonLazy
