import { FC } from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/Button'
import RemoveButton from 'components/RemoveButton'

import { Response, InBasket } from 'interface'

import './styles.sass'

type Item = {
  type?: 'list' | 'basket'
  basketEvent?: string
  result: Response
  basketHandler?: Function
  toRemove?: InBasket
  setToRemove?: Function
}

const Item: FC<Item> = ({ type, basketEvent, result }) => {
  return (
    <li
      className={'list-item  list-item--' + result.wrapperType}
      item-id={result.ID}
    >
      <Link to={`/detail/${result.ID}`} className="list-item__inner">
        {type === 'basket' && <RemoveButton id={result.ID} />}

        <div className="list-item__img-wrapper">
          <img
            className="list-item__img"
            alt={result.NAME}
            src={result.artworkUrl100}
          />
        </div>
        <div className="list-item__content">
          <div className="list-item__title">{result.NAME}</div>
          <div className="list-item__desc">{result.PRICE + '$'}</div>
        </div>
        <Button basketEvent={basketEvent} id={result?.ID} />
      </Link>
    </li>
  )
}

export default Item
