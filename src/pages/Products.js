import React, { Component } from 'react'
import FilterableProductTable from '../components/products/FilterableProductTable'
import data from '../data/products.json'

class Products extends Component {
  render() {
    return (
      <FilterableProductTable products={data.products} />
    )
  }
}

export default Products
