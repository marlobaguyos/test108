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
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/catalog">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
            
              <Link class="form-inline my-2 my-lg-0" to="/cart">
                <label class="btn btn-secondary btn-md active">
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
