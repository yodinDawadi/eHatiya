import React from "react";
import farsi from "../assets/farsi.jpg";
import { Button } from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <div className="w-1/4 h-1/2 flex flex-col rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <img className="rounded-t-lg" src={item.image} alt="sabji image" />
      <div className="w-full p-10 flex flex-col gap-2">
        <p className="text-4xl capitalize">{item.title}</p>
        <p className="text-xl">{item.description}</p>
        <Button variant="contained" color="success">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
