import { FC, useContext } from 'react'

import { Item } from 'components/Item'
import { VariantListItem } from 'components/Item/variants/list'
import { Button } from 'components/Button'
import { Preloader } from 'components/Preloader'

import { BASKET_ADD, BASKET_DEFAULT, LAZY } from 'js/additional'

import { DefaultListProps } from '../../props'
import { CallbacksContext } from 'common/context'

export interface VariantListProps extends DefaultListProps {
  isSearching?: boolean
  notFound?: boolean
  lazy?: boolean
}

export const VariantList: FC<VariantListProps> = ({
  inBasket,
  isSearching,
  list,
  notFound,
  lazy,
}) => {
  const callbacks = useContext(CallbacksContext)
  const basketEvent = (id?: number): string =>
    id && !inBasket?.includes(id) ? BASKET_ADD : BASKET_DEFAULT
  let message: string | undefined
  if (notFound) message = 'По вашему запросу ничего не найдено'
  else if (!list.length && !isSearching) message = 'Введите поисковый запрос'
  return message ? (
    <>{message}</>
  ) : (
    <>
      <ul className="list">
        {list.map((element) => (
          <Item key={element.ID}>
            <VariantListItem
              result={element}
              btnEvent={basketEvent(element.ID)}
              inBasket={inBasket}
              basketHandler={callbacks.addToBasket}
            />
          </Item>
        ))}
      </ul>
      {lazy && !isSearching && (
        <Button btnEvent={LAZY} lazyHandler={callbacks.lazy} />
      )}
      {isSearching && <Preloader />}
    </>
  )
}
