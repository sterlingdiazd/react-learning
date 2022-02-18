import React, { Component } from "react";
import FancyBorder from "../FancyBorder/FancyBorder";

class Dialog extends Component {
  render() {

    return <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {this.props.title}
      </h1>
      <p className="Dialog-message">{this.props.message} </p>
      {this.props.children}
    </FancyBorder>

  }
}

export default Dialog;
