// Name.js
import React, { Component } from "react";
import product from "./ProductCard";

class Name extends Component {
  render() {
    return <h1>{product.name}</h1>;
  }
}

export default Name;
