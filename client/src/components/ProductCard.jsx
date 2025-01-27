import React from "react";
import farsi from "../assets/farsi.jpg";
import { Button } from "@mui/material";
import { useCart } from "../Context/cartContext";

const ProductCard = ({ item }) => {
    const {addToCart}=useCart();
  return (
    <div className="w-1/4 flex flex-col rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] items-center">
      <img className="rounded-t-lg scale-50" height={200} width={200} src={item.image} alt="sabji image" />
      <div className="w-full p-10 flex flex-col gap-2">
        <p className="text-4xl capitalize truncate">{item.title}</p>
        <p className="text-xl truncate">{item.description}</p>
        <Button variant="contained" color="success" onClick={()=> addToCart(item)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
