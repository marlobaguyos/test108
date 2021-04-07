import React, { Component } from "react";
import { connect } from "react-redux";
import ProductInCart from "./productInCart";

class Cart extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Your Cart</h1>
        {this.props.cart.map((item) => (
          <ProductInCart key={item.product.id} data={item}></ProductInCart>
        ))}
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
