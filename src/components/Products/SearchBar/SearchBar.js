import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchProductBox">
        <form>
          <input className="inputWidth" type="text" placeholder="Search..." />
          <p>
            <input className="inputWidth" type="checkbox" />
            {' '}
            Only show products in stock
          </p>

        </form>
      </div>
    );
  }
}

export default SearchBar;
