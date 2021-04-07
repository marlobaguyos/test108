import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <label className="navbar-brand" href="/">
            Lapu Lapu
          </label>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            
              <Link className="form-inline my-2 my-lg-0" to="/cart">
                <label className="btn btn-secondary btn-md">
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
