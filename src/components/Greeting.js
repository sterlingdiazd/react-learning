import React, { Component } from "react";

class Greeting extends Component {

    render() {
        const isLoggedIn = this.props.isLoggedIn
        if (isLoggedIn) {
            return <UserGreeting />
        } else {
            return <GuestGreeting />
        }
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please Sign Up</h1>
}



export default Greeting