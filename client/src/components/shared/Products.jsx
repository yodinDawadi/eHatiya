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
    <>
      <div className="flex flex-wrap gap-20 justify-center items-center ">
        {products.map((item,key) => (
          <ProductCard item={item} key={key} />
        ))}
      </div>
    </>
  );
};

export default Products;
