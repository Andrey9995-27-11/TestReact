import { Response, InBasket } from 'interface'
import { BasketEvent } from 'store'

export interface DefaultItemProps {
  inBasket?: InBasket
  result: Response
  btnEvent?: string
  basketHandler?: BasketEvent
}
