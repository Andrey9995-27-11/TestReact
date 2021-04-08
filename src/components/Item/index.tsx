import { FC, ReactNode } from 'react'

import './styles.sass'

export interface ItemProps {
  children?: ReactNode
}

export const Item: FC<ItemProps> = ({ children }) => {
  return <>{children}</>
}
