import React from 'react'

const ProductSingle = (props) => {
  const{id,title,
    price,
    image
           } = props.product
  return (
    <>
    <div>
      <img src={image} alt="" />
    </div>
    <div>
      <h3>{title}</h3>
      <h3>{price}</h3>
    </div>
    
  
    </>
  
  )
}

export default ProductSingle