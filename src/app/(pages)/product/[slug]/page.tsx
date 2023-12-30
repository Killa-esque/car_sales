import React, { useState, useEffect } from 'react';
import { Product } from '@/app/type/ContentfulType';
import { getProduct } from '@/lib/productApi';

type Props = { params: { slug: string } };

const ProductDetailPage = async ({ params }: Props) => {
  const { slug } = params;

  const product: string = await getProduct(slug);

  console.log(product)

  return (
    <div>ProductDetailPage</div>
  );   
};

export default ProductDetailPage;
