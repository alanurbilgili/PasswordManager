import React from 'react';
import '../App.css';
import './Main.css';

export default class SignUp extends React.Component {
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
        localStorage.setItem(username, password);
    }

    render() {
        return (
            <div className='passwords-container'>
                <video src='/home-video/world.mp4' autoPlay loop muted />
                <h1>SIGN UP</h1>
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
                        <a href="/login">Already registered?</a>
                        <button type="submit" onClick={this.onClick}>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}