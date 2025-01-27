import React from 'react'
import farsi from '../assets/farsi.jpg'
import { Button } from '@mui/material'

const ProductCard = () => {
  return (
    <div className='w-1/4 h-1/2 flex flex-col rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <img className='rounded-t-lg' src={farsi} alt="sabji image" />
        <div className='w-full p-10 flex flex-col gap-2'>
            <p className='text-4xl capitalize'>Title</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente magnam mollitia laboriosam! Veritatis, sapiente. Mollitia assumenda fuga voluptatum error maxime aspernatur reiciendis facilis alias quasi ab, dolores numquam molestiae. Eos laborum corrupti iusto culpa recusandae voluptates perspiciatis amet itaque, ullam quam? Dolor dolorem exercitationem deserunt distinctio adipisci laudantium atque libero.</p>
        <Button variant='contained' color='success'>Add to cart</Button>
        </div>
    </div>
  )
}

export default ProductCard