import React, { Component } from 'react';
import "./css/productInCart.css";


class ProductInCart extends Component {
  render() { 
    return (
      <div className="productInCart">
        <div className="imagesCont">
          <img 
          className="image"
          src={"/images/products/" + this.props.data.product.image}
          alt="Product"
          ></img>
        </div>
        <div>
          <label>{this.props.data.product.title}</label>
          <label>{this.props.data.product.price}</label>
          <label>{this.props.data.product.category}</label>
          <p>{this.props.data.quantity}</p>
        </div>
      </div>
    );
  }
}

export default ProductInCart;