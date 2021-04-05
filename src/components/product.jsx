import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";

import "./css/product.css";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product">
        <img
          src={"/images/products/" + this.props.data.image}
          className="image"
        ></img>
        <div className="labels">
          <label className="description">
            <strong>{this.props.data.title}</strong>
          </label>
          <label className="total">
            Total: ${this.props.data.price}</label>
          <label className="price">Price: ${this.props.data.price}</label>
        </div>
        <QuantityPicker></QuantityPicker>
      </div>
    );
  }
}

export default Product;
