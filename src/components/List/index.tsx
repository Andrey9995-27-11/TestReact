import { FC, ReactChild } from 'react'

import './styles.sass'

interface ListProps {
  children?: ReactChild
}

export const List: FC<ListProps> = ({ children }) => {
  return <div className="list-wrapper">{children}</div>
}
