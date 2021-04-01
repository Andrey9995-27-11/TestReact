import { FC } from 'react'

import Button from '../Button'
import { BASKET_ADD, BASKET_DEFAULT } from '../../js/additional'

import { Response, InBasket } from 'interface'

import './styles.sass'

interface Detail {
  result?: Response
  inBasket?: InBasket
}

const Detail: FC<Detail> = ({ result, inBasket }) => {
  const getBtnEvent = (id?: number): string =>
    id && inBasket?.includes(id) ? BASKET_ADD : BASKET_DEFAULT
  return (
    <div
      className={'detail  detail--' + result?.wrapperType}
      item-id={result?.ID}
    >
      <div className="detail__inner">
        <div className="detail__img-wrapper">
          <img
            className="detail__img"
            alt={result?.NAME}
            src={result?.artworkUrl100}
          />
        </div>
        <div className="detail__tr">
          <div className="detail__th  detail__th--main">Название</div>
          <div className="detail__th">{result?.NAME}</div>
        </div>
        {result?.longDescription && (
          <div className="detail__tr">
            <div className="detail__th  detail__th--main">Описание</div>
            <div className="detail__th">{result?.longDescription}</div>
          </div>
        )}
        {result?.previewUrl && (
          <div className="detail__tr">
            <div className="detail__th  detail__th--main">Превью</div>
            <div className="detail__th">
              <div
                className={
                  'detail__preview  ' +
                  (result?.previewUrl.match(/(audio)/) ? 'audio' : 'video')
                }
              >
                <iframe
                  allow="encrypted-media *"
                  frameBorder="0"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src={result?.previewUrl}
                ></iframe>
              </div>
            </div>
          </div>
        )}
        <div className="detail__tr">
          <div className="detail__th  detail__th--main">Цена</div>
          <div className="detail__th">{result?.PRICE + '$'}</div>
        </div>
        <Button basketEvent={getBtnEvent(result?.ID)} id={result?.ID} />
      </div>
    </div>
  )
}

export default Detail
