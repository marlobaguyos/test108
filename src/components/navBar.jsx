import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

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
            <span class="form-inline my-2 my-lg-0">
              <a
                href="/cart"
                class="btn btn-secondary btn-md active"
                role="button"
                aria-pressed="true"
              >
                View Cart: {this.props.cart.length}
              </a>
            </span>
          </div>
        </nav>

        {/* <nav className="navbar navbar-dark bg-dark fixed-top  navbar-expand-lg">
                    <div className="container-fluid">
                        <label className="navbar-brand" href="/">Lapu Lapu</label>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/catalog">Catalog</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            View Cart: {this.props.cart.length}
                        </div>
                    </div>
                </nav> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};
//read: pass a fn that maps the state to props
export default connect(mapStateToProps, null)(NavBar);
