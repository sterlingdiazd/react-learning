import React, { Component } from "react";
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SearchBar";

class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    )
  }
}

export default FilterableProductTable;
