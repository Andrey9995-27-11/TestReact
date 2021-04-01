import React from 'react'
import { Observer, observer } from 'mobx-react'

import List from 'components/List'
import Search from 'components/Search'

import './styles.sass'

import { basketStore } from 'store/BasketStore'
import { listStore } from 'store/ListStore'

const Route = () => {
  return (
    <Observer>
      {() => (
        <section className="list-page">
          <Search />
          <List
            type={'list'}
            inBasket={basketStore.inBasket}
            list={listStore.results}
            lazy={listStore.lazy}
            isSearching={listStore.isSearching}
          />
        </section>
      )}
    </Observer>
  )
}

export default Route
