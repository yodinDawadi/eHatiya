import React from "react";
import ProductCard from "../ProductCard";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div className="w-screen p-10 flex flex-col mt-10 gap-10">
    <p className="text-4xl text-center w-screen font-bold">Product Catelouge</p>
      <div className="flex flex-wrap gap-20 justify-center items-center ">
        {products.map((item,key) => (
          <ProductCard item={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Products;
