import React, { useState } from 'react'
import { getProductData } from '../../data/product-data';
import ProductSingle from './ProductSingle';

const Product = () => {
  const [products, setProducts] = useState(getProductData());
  return (
    <>
    {
      products.map((product,index)=>(
        <ProductSingle
        product={product}
        key={product.index}

        
        >

        </ProductSingle>
      ))
    }
    
    
    
    
    </>
  )
}

export default Product