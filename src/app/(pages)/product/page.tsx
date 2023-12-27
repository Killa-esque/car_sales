import React from 'react'
import { getAllProducts } from '@/app/lib/api'

type Props = {}

const ProductPage = async (props: Props) => {

  const products = await getAllProducts()

  console.log(products);

  return (
    <div>ProductPage {products.length}</div>
  )
}

export default ProductPage
