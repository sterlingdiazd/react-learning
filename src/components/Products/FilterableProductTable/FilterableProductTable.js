import React, { Component } from "react";
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SearchBar";

class FilterableProductTable extends Component {

  constructor(props) {
    super(props);
    this.state = { filterText: '', inStockOnly: false }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this)
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText: filterText })
  }

  handleInStockOnlyChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange}
          inStockOnly={this.state.inStockOnly} onInStockOnlyChange={this.handleInStockOnlyChange} />
        <ProductTable
          filterText={this.state.filterText}
          products={this.props.products}
          inStockOnly={this.state.inStockOnly} />
      </div>
    )
  }
}

export default FilterableProductTable;
