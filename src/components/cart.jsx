import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  state = {};
  
  render() {
    return (
      <div>
        <h1>Your Cart</h1>
      </div>
    );
  }
}

var mapStateToProps =(state) => {

};

export default connect(mapStateToProps,null)(Cart);
