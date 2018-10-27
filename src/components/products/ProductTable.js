import React from 'react'

import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable(props) {
  const filterText = props.filterText
  const inStockOnly = props.inStockOnly

  const rows = []
  let lastCategory = null

  function filterItems(query) {
    return props.products.map((product) => {
        if (product.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          if (inStockOnly && !product.stocked) {
            return
          }
          if (product.category !== lastCategory) {
            rows.push(
              <ProductCategoryRow
                category={product.category}
                key={product.category} />
            )
          }
          rows.push(
            <ProductRow
              product={product}
              key={product.name}
            />
          )
          lastCategory = product.category
        }
    })
  }

  filterItems(filterText)

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )

}

export default ProductTable