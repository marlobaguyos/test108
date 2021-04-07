import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <label class="navbar-brand" href="/">
            Lapu Lapu
          </label>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/catalog">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            
              <Link class="form-inline my-2 my-lg-0" to="/cart">
                <label class="btn btn-secondary btn-md">
                  View Cart:&ensp;  
                  <span className="badge badge-dark cart-badge">{this.props.cart.length}</span>
                </label>
              </Link>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state
  };
};
//read: pass a fn that maps the state to props
export default connect(mapStateToProps, null)(NavBar);
