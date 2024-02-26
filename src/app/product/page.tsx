import React from 'react'

type Props = {}

const Product = (props: Props) => {
    const data = 100;
    if (data > 10) {
      throw new Error("Error When data > 10")
    }
  return (
    <div>Product</div>
  )
}

export default Product