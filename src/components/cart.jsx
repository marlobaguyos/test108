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
            <h1>Organika</h1>
          </div>

          <div className="contCart">
            <div className="hoy">
              fasdfasdfasd
            </div>

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
