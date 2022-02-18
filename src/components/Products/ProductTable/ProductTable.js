import React, { Component } from "react";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";

class ProductTable extends Component {



  render() {

    const rows = []
    let lastCategory = null

    this.props.products.forEach((product) => {
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
