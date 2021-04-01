import React from 'react'
import Detail from 'components/Detail'

import './styles.sass'

import { detailStore } from 'store/DetailStore'
import { basketStore } from 'store/BasketStore'
import { useParams } from 'react-router'
import { Observer } from 'mobx-react-lite'

interface RouteParams {
  id: string
}

const Route = () => {
  const id = +useParams<RouteParams>().id
  React.useEffect(() => {
    detailStore.detailRequest(id)
    return () => detailStore.destroy()
  })
  return (
    <Observer>
      {() => (
        <section className="detail-page">
          <Detail result={detailStore.result} inBasket={basketStore.inBasket} />
        </section>
      )}
    </Observer>
  )
}

export default Route
