import React from 'react'

function SearchBar(props) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={(e) => props.onHandleFilterChange(e)}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={(e) => props.onHandleStockChange(e)}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  )
}

export default SearchBar