import React from 'react';
import '../App.css';
import './Main.css';
import {withRouter} from 'react-router-dom';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: true,
            username: '',
            password: ''
        };
        this.onClick = this.onClick.bind(this);

    }
    onClick() {
        const { username, password } = this.state;
        const user = { username, password };
        if (localStorage.getItem(username) ==
            password) {
            sessionStorage.setItem("user", username);
            //window.location.href = "/Passwords-Page";
            this.props.history.push('/Passwords-Page');
            alert("Login successful");
        } else {
            alert("Login failed");
        }
    }

    render() {
        return (
            <div className='passwords-container'>
                <video src='/home-video/world.mp4' autoPlay loop muted />
                <h1>LOGIN</h1>
                <p>Please enter your information below.</p>
                <form className="form-inline" id="passwordForm">
                    <div className="add-password">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            id="usernameField"
                            value={this.state.username}
                            onChange={e => this.setState({ username: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Enter Password"
                            id="passwordField"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <a href="/sign-up">Not registered?</a>
                        <button type="submit" onClick={this.onClick}>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}