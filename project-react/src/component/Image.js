// Image.js
import React, { Component } from "react";
import product from "./ProductCard";

class Image extends Component {
  render() {
    return <img src={product.imageUrl} alt={product.name} />;
  }
}

export default Image;
