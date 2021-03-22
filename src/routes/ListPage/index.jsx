import React from 'react'
import { observer, inject } from 'mobx-react'

import List from '../../components/List'
import Search from '../../components/Search'
import ButtonLazy from '../../components/ButtonLazy'
import { basketChange, asyncSearch } from '../../js/functions'
import { LAZY, SEARCH, TOGGLE_IS_SEARCHING } from '../../js/additional'

import './styles.sass'

const Route = ({ listStore, basketStore }) => {
  console.log(listStore, basketStore)
  return (
    <section className="list-page">
      {/* <Search
        asyncSearch={props.asyncSearch}
        toggleIsSearching={props.toggleIsSearching}
      />
      <List
        isSearching={props.isSearching}
        list={props.list}
        inBasket={props.inBasket}
        basketChange={props.basketChange}
        notFound={props.notFound}
      />
      {props.lazy && !props.isSearching && (
        <ButtonLazy
          lazyEvent={props.lazyHandler}
          count={props.list.length}
          filter={props.filter}
          toggleIsSearching={props.toggleIsSearching}
        />
      )} */}
    </section>
  )
}

export default inject(({ listStore, basketStore }) => ({
  listStore,
  basketStore,
}))(observer(Route))
