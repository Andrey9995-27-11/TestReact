import { FC, useContext } from 'react'

import { Item } from 'components/Item'
import { VariantListItem } from 'components/Item/variants/list'
import { Button } from 'components/Button'
import { Preloader } from 'components/Preloader'

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
  results,
  notFound,
  lazy,
}) => {
  const callbacks = useContext(CallbacksContext)
  const buttonTemplate = (id?: number) => {
    let defaultProps
    if (id && !inBasket?.includes(id)) {
      defaultProps = {
        value: 'Добавить в корзину',
        onClick: (event: any) => {
          event.preventDefault()
          id && callbacks.addToBasket && callbacks.addToBasket([id])
        },
      }
    } else {
      defaultProps = {
        value: 'Товар в корзине',
      }
    }
    return <Button {...defaultProps} />
  }

  let message: string | undefined
  if (notFound) message = 'По вашему запросу ничего не найдено'
  else if (!results.length && !isSearching) message = 'Введите поисковый запрос'
  return message ? (
    <>{message}</>
  ) : (
    <>
      <ul className="list">
        {results.map((element) => (
          <Item key={element.ID}>
            <VariantListItem
              result={element}
              Button={buttonTemplate(element.ID)}
            />
          </Item>
        ))}
      </ul>
      {lazy && !isSearching && (
        <Button
          value="Ещё"
          onClick={(e) => {
            e.preventDefault()
            callbacks.lazy && callbacks.lazy()
          }}
        />
      )}
      {isSearching && <Preloader />}
    </>
  )
}
