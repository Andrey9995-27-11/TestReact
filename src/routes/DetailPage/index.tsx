import React from 'react'
import { useParams } from 'react-router'
import { Observer } from 'mobx-react-lite'
import { Detail } from 'components/Detail'
import { detailStore, basketStore } from 'store'

import './styles.sass'

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
          <Detail
            result={detailStore.result}
            inBasket={basketStore.inBasket}
            basketHandler={basketStore.addToBasket}
          />
        </section>
      )}
    </Observer>
  )
}

export default Route
