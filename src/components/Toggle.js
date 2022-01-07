import React, { Component } from "react";

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }

        this.handleClick = this.handleClick.bind(this)
    }


    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'On' : 'Off'}
            </button>
        )
    }
}

export default Toggle;