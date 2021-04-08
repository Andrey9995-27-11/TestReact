import { FC, ReactNode, useContext } from 'react'
import { ThemeProvider } from 'common/context'
import { observer } from 'mobx-react-lite'

interface BodyProps {
  children?: ReactNode
}

export const Body: FC<BodyProps> = observer(({ children }) => {
  const { value } = useContext(ThemeProvider)
  return <div className={'body  ' + value}>{children}</div>
})
