import React from 'react'

import Button from '../Button'
import { BASKET_ADD } from '../../js/additional'

import './styles.sass'

const Detail = (props) => {
  const getBtnEvent = (id) =>
    props.inBasket.indexOf(id) < 0 ? BASKET_ADD : false

  console.log(props.result.previewUrl)

  const previewUrl = (function () {
    if (props.result.previewUrl !== undefined) {
      return (
        <div className="detail__tr">
          <div className="detail__th  detail__th--main">Превью</div>
          <div className="detail__th">
            <div
              className={
                'detail__preview  ' +
                (props.result.previewUrl.match(/(audio)/) ? 'audio' : 'video')
              }
            >
              <iframe
                allow="encrypted-media *"
                frameBorder="0"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src={props.result.previewUrl}
              ></iframe>
            </div>
          </div>
        </div>
      )
    }
    return null
  })()

  const longDescription = (function () {
    if (props.result.longDescription !== undefined) {
      return (
        <div className="detail__tr">
          <div className="detail__th  detail__th--main">Описание</div>
          <div className="detail__th">{props.result.longDescription}</div>
        </div>
      )
    }
    return null
  })()

  return (
    <div
      className={'detail  detail--' + props.result.wrapperType}
      item-id={props.result.ID}
    >
      <div className="detail__inner">
        <div className="detail__img-wrapper">
          <img
            className="detail__img"
            alt={props.result.NAME}
            src={props.result.artworkUrl100}
          />
        </div>
        <div className="detail__tr">
          <div className="detail__th  detail__th--main">Название</div>
          <div className="detail__th">{props.result.NAME}</div>
        </div>
        {longDescription}
        {previewUrl}
        <div className="detail__tr">
          <div className="detail__th  detail__th--main">Цена</div>
          <div className="detail__th">{props.result.PRICE + '$'}</div>
        </div>
        <Button
          basketChange={props.basketChange}
          basketEvent={getBtnEvent(props.result.ID)}
          result={props.result}
        />
      </div>
    </div>
  )
}

export default Detail
