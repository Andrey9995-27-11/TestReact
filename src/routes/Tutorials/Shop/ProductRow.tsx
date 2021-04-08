import { FC } from 'react'

interface ProductRowProps {
  name: string
  price?: string
  stocked?: boolean
}

export const ProductRow: FC<ProductRowProps> = ({ name, price, stocked }) => {
  return (
    <>
      <div className={!stocked ? 'red' : ''}>{name}</div>
      <div>{price}</div>
    </>
  )
}
