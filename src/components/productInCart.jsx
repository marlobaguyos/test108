import React, { Component } from 'react';

class ProductInCart extends Component {
  render() { 
    return (
      <div className="productCart">
        <h3>I'm a product</h3>
        {this.props.data}
      
      </div>
    );
  }
}

export default ProductInCart;