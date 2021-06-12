import React from 'react';
import '../App.css';
import './Main.css';

//add data keeping functions

export default class GetPasswords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: true,
            app: '',
            username: sessionStorage.getItem("user"),
            password: ''
        };
        this.onClick = this.onClick.bind(this);

    }
    onClick() {
        const { app, username, password } = this.state;
        const user = { username, password };
        alert(localStorage.getItem(app));
    }

    render() {
        return (
            <div className='passwords-container'>
                <video src='/home-video/world.mp4' autoPlay loop muted />
                <h1>GET A PASSWORD</h1>
                <p>Please enter your information below.</p>
                <form className="form-inline" id="passwordForm">
                    <div className="add-password">
                        <input
                            type="text"
                            placeholder="Enter Site Name Ex: Twitter"
                            id="appField"
                            value={this.state.app}
                            onChange={e => this.setState({ app: e.target.value })}
                        />
                        <a href="/Passwords-Page">Enter A New Password</a>
                        <button type="submit" onClick={this.onClick}>Get Password</button>
                        <input
                            type="text"
                            placeholder="Your password will be shown here"
                            id="passwordField"
                            value={this.state.password}
                        />
                    </div>
                </form>
            </div>
        );
    }
}