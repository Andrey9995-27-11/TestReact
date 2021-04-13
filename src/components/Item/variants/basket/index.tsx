import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RemoveButton } from 'components/RemoveButton'
import { InBasket } from 'interface'
import { DefaultItemProps } from '../../props'

interface VariantBasketProps extends DefaultItemProps {
  toRemove?: InBasket
}

export const VariantBasketItem: FC<VariantBasketProps> = ({
  result,
  toRemove,
  Button,
}) => {
  return (
    <li className={'list-item  list-item--' + result.wrapperType}>
      <Link to={`/detail/${result.ID}`} className="list-item__inner">
        {result.ID && (
          <div className="btn-remove">
            <RemoveButton id={result.ID} {...{ toRemove }} />{' '}
          </div>
        )}
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
