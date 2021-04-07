import React, { Component } from "react";
import Product from "./product";
import ProductService from "../services/productService.js";
import "./css/catalog.css";

class Catalog extends Component {
  state = {
    catalog: []
  };
  render() {
    return (
      <div className="catalog-page">
        <h1>This is our amazing catalog {this.state.catalog.length} products</h1>
        <hr className="catalogHR"></hr>
        <hr className="catalogHR1"></hr>
        <hr className="catalogHR2"></hr>
          <div className="catalogProducts">
            {this.state.catalog.map((p) => (<Product data ={p} ></Product>))}
            </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("Load data now");
    //call the service, get the catalog and put the catalog in the state
    let service = new ProductService();
    var data = service.getProducts();

    this.setState({catalog: data});
  }
}

export default Catalog;
