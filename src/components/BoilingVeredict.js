import React, { Component } from "react";

class BoilingVeredict extends Component {

    render() {
        if (this.props.celsius) {
            if (this.props.celsius > 100) {
                return <p>The water would boil because is in {this.props.celsius}</p>
            } else {
                return <p>The water would NOT boil because is in {this.props.celsius}</p>
            }
        } else {
            return <p>There is not temperature input yet</p>
        }

    }

}

export default BoilingVeredict