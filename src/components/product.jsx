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
          <span>
            <label className="prodName"><strong>{this.props.data.title}</strong></label>
          </span>
          <hr className="priceTotalHR"></hr>
          <div className="priceTotalCont">
            <span>
              <label className="priceLabel">Price:</label> <label className="price"> ${this.props.data.price}</label>
            </span>
            <span>
              <label className="totalLabel">Total:</label> <label className="total">${this.props.data.price}</label>
            </span>
          </div>
        </div>
        <hr className="addHR"></hr>
        <QuantityPicker onValueChange={this.handleQuantityChange}></QuantityPicker>
        <button onClick={this.handleAddToCart} className="btn btn-md btn-dark  active addToCart">Add</button>
      </div>
    );
  }

  handleQuantityChange = () => {
    console.log("Quantity Changed");
  };

  handleAddToCart = () => {
    console.log("Add 2 cart");
  };
}

export default Product;
