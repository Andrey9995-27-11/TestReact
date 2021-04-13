import { FC } from 'react'
import { Link } from 'react-router-dom'
import { DefaultItemProps } from '../../props'

export const VariantListItem: FC<DefaultItemProps> = ({ result, Button }) => {
  return (
    <li
      className={'list-item  list-item--' + result.wrapperType}
      item-id={result.ID}
    >
      <Link to={`/detail/${result.ID}`} className="list-item__inner">
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
        {Button}
      </Link>
    </li>
  )
}
