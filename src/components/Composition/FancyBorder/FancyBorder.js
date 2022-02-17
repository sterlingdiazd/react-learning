import React, { Component } from "react";

class FancyBorder extends Component {
  render() {
    return <div className={styles.warning} >
      {this.props.children}
    </ div>
  }
}

export default FancyBorder;
