import { FC } from 'react'
import ButtonUI from '@material-ui/core/Button'

export interface ButtonProps {
  value: string
  onClick?: (e: any) => void
}

export const Button: FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <ButtonUI variant="contained" onClick={(e) => onClick && onClick(e)}>
      {value}
    </ButtonUI>
  )
}
