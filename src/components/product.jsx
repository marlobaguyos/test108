import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";

import "./css/product.css";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product">
        <img src="https://picsum.photos/200/300" className="image"></img>
        <label>Product Description</label>
        <label>$ Total</label>
        <label>$ Price</label>
        <QuantityPicker></QuantityPicker>
      </div>
    );
  }
}

export default Product;
