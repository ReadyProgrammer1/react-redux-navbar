import React, { Component } from 'react'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false,
  }

  handleFilterChange = (e) => {
    this.setState({
      filterText: e.target.value
    })
  }

  handleStockChange = (e) => {
    this.setState({
      inStockOnly: e.target.checked
    })
  }

  render() {
    const { filterText, inStockOnly } = this.state
    return (
      <div style={{marginLeft: '100px', marginTop: '50px'}}>
        <h1>Upgraded Search</h1>
        <SearchBar
          value={filterText}
          inStockOnly={inStockOnly}
          onHandleFilterChange={this.handleFilterChange}
          onHandleStockChange={this.handleStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    )
  }
}

export default FilterableProductTable