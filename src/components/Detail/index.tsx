import { FC } from 'react'
import { Button } from 'components/Button'
import { Response, InBasket } from 'interface'
import { BasketEvent } from 'store'

import './styles.sass'

interface DetailProps {
  result?: Response
  inBasket?: InBasket
  basketHandler?: BasketEvent
}

export const Detail: FC<DetailProps> = ({
  result,
  inBasket,
  basketHandler,
}) => {
  const buttonTemplate = (id?: number) => {
    let defaultProps
    if (id && !inBasket?.includes(id)) {
      defaultProps = {
        value: 'Добавить в корзину',
        onClick: (event: any) => {
          event.preventDefault()
          id && basketHandler && basketHandler([id])
        },
      }
    } else {
      defaultProps = {
        value: 'Товар в корзине',
      }
    }
    return <Button {...defaultProps} />
  }
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
                  title={result?.NAME}
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
        {buttonTemplate(result?.ID)}
      </div>
    </div>
  )
}
