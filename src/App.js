import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import Newproduct from "./components/NewProduct"
import Products from "./components/Products"

import { addProduct, fetchProducts } from "./store/actions/ProductAction"

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    const { addProduct, products } = this.props
    return (
      <div className="container">
        <h1 className="text-center">Ürün Ekleme Uygulaması</h1>
        <hr />
        <Newproduct addProduct={addProduct} />
        <br /> <hr /> <br />
        <Products products={products} />

      </div>
    );
  }
}
const mapStateToProps = ({ products }) => {
  return {
    products
  };
};

const mapDispatchToProps = {
  addProduct, fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);




