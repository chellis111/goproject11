// Price.js
import React, { Component } from "react";
import product from "./ProductCard";

class Price extends Component {
  render() {
    return (
      <p>${product.price.toFixed(2)}</p>
      // Format the price to 2 decimal places
    );
  }
}

export default Price;
