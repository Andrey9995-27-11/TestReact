import { FC } from 'react'
import { ResponseData } from './FilterableProductTable'

import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'

interface ProductTableProps {
  data: ResponseData
}

export const ProductTable: FC<ProductTableProps> = ({ data }) => {
  let tempCategory: string = ''
  const FilterData = () =>
    data.map((element) => {
      const { category, name, price, stocked } = element
      if (tempCategory !== category) {
        tempCategory = category
        return (
          <>
            <ProductCategoryRow key={category} name={category} />
            <ProductRow key={name} {...{ name, price, stocked }} />
          </>
        )
      } else {
        return <ProductRow key={name} {...{ name, price, stocked }} />
      }
    })

  return (
    <div className="product-table">
      <div className="">NAME</div>
      <div className="">PRICE</div>
      {FilterData()}
    </div>
  )
}
