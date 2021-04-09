import React, { Component } from "react";
import { connect } from "react-redux";
import ProductInCart from "./productInCart";
import "./css/cart.css";

class Cart extends Component {
  state = {};

  render() {
    return (
      <div className="cart">
        <div>
          <div className="carth1">
          <h1>Your</h1>
            <img src="/images/icons/cart.svg" altwidth="50" height="45" alt="picture of a"></img>
          </div>

          <div className="contCart">
            <div className="hey">
              {this.props.cart.map((item) => (
                <ProductInCart key={item.product.id} data={item}></ProductInCart>
              ))}
              kladfalsdkfjasd
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var mapStateToProps =(state) => {
  return {
    cart: state,
  };
};

export default connect(mapStateToProps,null)(Cart);
