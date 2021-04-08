import { FC } from 'react'

interface ProductCategoryRowProps {
  name: string
}
export const ProductCategoryRow: FC<ProductCategoryRowProps> = ({ name }) => {
  return <div className="product-category-row">{name}</div>
}
