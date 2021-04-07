import React, { Component } from 'react';
import "./css/productInCart.css";


class ProductInCart extends Component {
  render() { 
    return (
      <div className="productInCart">
        <div>
          <img 
          className="image"
          src={"/images/products/" + this.props.data.product.image}
          alt="Product"
          ></img>
          <label>{this.props.data.product.title}</label>
        </div>
        <div>
          <p>{this.props.data.quantity}</p>
        </div>
      </div>
    );
  }
}

export default ProductInCart;