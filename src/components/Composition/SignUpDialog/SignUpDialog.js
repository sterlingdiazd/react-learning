import React, { Component } from "react";
import Dialog from "../Dialog/Dialog";

class SignUpDialog extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = { login: '' }
  }

  handleChange(event) {
    this.setState({ login: event.target.value })
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`)
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program" message="How we refer to you?" >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}

export default SignUpDialog;
