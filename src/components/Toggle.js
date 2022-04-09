import React, { Component } from "react";
import Greeting from './Greeting';

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }

        this.handleClick = this.handleClick.bind(this)
    }

<<<<<<< HEAD
=======
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
>>>>>>> f541377bd690c227ec019ff35904fba0a86cbe96

    render() {
        return (
            <div>
                <Greeting isLoggedIn={this.state.isToggleOn} />
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'On' : 'Off'}
                </button>
            </div>

        )
    }
}

export default Toggle;