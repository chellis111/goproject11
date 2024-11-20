import React, { Component } from "react";
import product from "./ProductCard";

class Description extends Component {
  render() {
    return <p>{product.description}</p>;
  }
}

export default Description;
