import { Button } from '@mui/material';
import React from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../Context/cartContext';

const Cart = () => {
  const { cartProduct } = useCart();
  let totalPrice = 0;
  cartProduct.map((item)=>{
    totalPrice=totalPrice+item.price;
})

let discountAmount = totalPrice*0.1

  return (
    <div className="w-screen flex flex-wrap">
      <p className="w-full font-bold text-3xl text-center">Cart items</p>

      <div className="w-1/2 h-screen flex justify-center gap-10 flex-wrap">
        {cartProduct.length === 0 ? (
          <p className='text-4xl w-full text-center mt-10 font-bold'>The cart is empty</p>
        ) : (
          cartProduct.map((item) => <ProductCard item={item} key={item.id} />)
        )}
      </div>

      <div className="w-1/2 h-screen gap-5 flex flex-col items-center mt-10">
        <p className="text-4xl font-semibold">Total items: {cartProduct.length}</p>
        <p className="text-4xl font-semibold">Total Price: Rs. {totalPrice}</p>
        <p className="text-4xl font-semibold text-red-500">Discountable amount: Rs. {-discountAmount}</p>
        <p className="text-4xl font-semibold text-green-500">Payable Amount:Rs {totalPrice-discountAmount}</p>
        <Button variant="contained" color="success">
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default Cart;
