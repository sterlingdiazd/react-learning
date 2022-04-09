import React, { Component } from "react";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";

class ProductTable extends Component {



  render() {

    const rows = []
    let lastCategory = null
    const filterText = this.props.filterText
    const inStockOnly = this.props.inStockOnly

    this.props.products.forEach((product) => {

      if (product.name.indexOf(filterText) === -1) {
        return
      }

      if (inStockOnly && !product.stocked) {
        return
      }

      if (product.category != lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        )
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      )
      lastCategory = product.category

    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>

        </table>
      </div>
    );
  }
}

export default ProductTable;
