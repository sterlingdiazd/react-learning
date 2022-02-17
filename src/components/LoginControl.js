import React, { Components } from "react";
import { Component } from "react/cjs/react.production.min";
import Greeting from "./Greeting";
import MailBox from "./MailBox";

class LoginControl extends Component {
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = { isLoggedIn: false }
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false })
    }
    render() {

        const isLoggedIn = this.state.isLoggedIn
        const messages = ['React', 'React Interview', 'React Job Offer']

        return (

            <div>

                <div>
                    {isLoggedIn ?
                        <LogoutButton onClick={this.handleLogoutClick} /> :
                        <LoginButton onClick={this.handleLoginClick} />}
                </div>

                <Greeting isLoggedIn={isLoggedIn} />
                <MailBox unreadMessages={messages} />
            </div>


        )
    }


}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}

export default LoginControl