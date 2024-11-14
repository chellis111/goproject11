// Image.js
import React from "react";
import product from "./ProductCard";

const Image = () => {
  return <img src={product.imageUrl} alt={product.name} />;
};

export default Image;
