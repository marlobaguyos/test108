import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";

import "./css/product.css";
import { connect } from "react-redux";
import { addProductToCart } from "../store/action/action";

class Product extends Component {
  state = {
    quantity: this.props.data.minimum || 1,
  };

  render() {
    return (
      <div className="productCont">
        <div className="product">
          <img
            src={"/images/products/" + this.props.data.image}
            className="image" alt="available product"
          ></img>
          <div className="labels">
            <span>
              <label className="prodName"><strong>{this.props.data.title}</strong></label>
            </span>
            <hr className="priceTotalHR"></hr>
            <div className="priceTotalCont">
              <span>
                <label className="priceLabel">Price:</label> <label className="price"> ${this.props.data.price.toFixed(2)}</label>
              </span>
              <span>
                <label className="totalLabel">Total:</label> <label className="total">${this.calculateTotal()}</label>
              </span>
            </div>
          </div>
          <div className="container container-button">
            <QuantityPicker
            minimum={this.props.data.minimum || 1}
            onValueChange={this.handleQuantityChange}
            ></QuantityPicker>
            <div className="input-group mb-3 container-button">
              <button onClick={this.handleAddToCart} className="btn btn-md btn-dark active addButton">Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  calculateTotal = () => {
    var total = this.props.data.price * this.state.quantity;
    return total.toFixed(2);
  }

  handleQuantityChange = (qnty) => {
    console.log("Quantity Changed to " + qnty);
    this.setState({quantity:qnty});
  };

  handleAddToCart = () => {
    //dispatch the action
    var prodInCart = {
      product: this.props.data,
      quantity: this.state.quantity
    };
    this.props.addProductToCart(prodInCart);
  };
}

//connect 2 params:
// 1 - what to ready
// 2 - actions to dispatch
export default connect(null, {addProductToCart})(Product);


