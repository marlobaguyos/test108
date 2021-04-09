import React, { Component } from 'react';
import "./css/productInCart.css";


class ProductInCart extends Component {
  render() { 
    return (
    
    <div class="grid-container">

      <div class="grid-item">
        <img 
          className="image"
          src={"/images/products/" + this.props.data.product.image}
          alt="Product"
        ></img>
      </div>

      <div class="grid-item">
        <p><strong>{this.props.data.product.title}</strong></p>
        <p>{this.props.data.product.category}</p>
      </div>
      
      <div class="grid-item">
        <p>Category: {this.props.data.product.category}</p>
        <p>Price: {this.props.data.product.price}</p>
        <p>Current Stock: {this.props.data.product.stock}</p>
      </div>

      <div class="grid-item">
        <p>Quantity: {this.props.data.quantity}</p>
      </div>

    </div>
    );
  }
}

export default ProductInCart;