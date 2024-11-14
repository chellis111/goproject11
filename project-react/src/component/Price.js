// Price.js
import React from "react";
import product from "./ProductCard";

const Price = () => {
  return <p>${product.price.toFixed(2)}</p>;
  {
    /* Format the price to 2 decimal places */
  }
};

export default Price;
