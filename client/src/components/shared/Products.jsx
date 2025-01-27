import React from 'react'
import ProductCard from '../ProductCard'

const Products = () => {
  return (
<div className='w-screen flex flex-col gap-20 mt-20'>
<p className='text-5xl font-bold w-screen text-center'>Products Catelouge</p>
<div className='flex flex-wrap gap-20 justify-center items-center '>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
</div>
    
  )
}

export default Products