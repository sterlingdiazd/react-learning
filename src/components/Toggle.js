import React, { Component } from 'react';
import Greeting from './Greeting';

class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<div>
				<Greeting isLoggedIn={this.state.isToggleOn} />
				<button onClick={this.handleClick}>
					{this.state.isToggleOn ? 'On' : 'Off'}
				</button>
			</div>
		);
	}
}

export default Toggle;
