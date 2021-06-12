import React from 'react';
import '../App.css';
import './Main.css';

//add data keeping functions

export default class Passwords extends React.Component {
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
        localStorage.setItem(app, password);
    }

    render() {
        return (
            <div className='passwords-container'>
                <video src='/home-video/world.mp4' autoPlay loop muted />
                <h1>ENTER A NEW PASSWORD</h1>
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
                        <input
                            type="text"
                            placeholder="Enter Password"
                            id="passwordField"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <a href="/get-passwords">Get A Password</a>
                        <button type="submit" onClick={this.onClick}>Enter Password</button>
                    </div>
                </form>
            </div>
        );
    }
}

/*function PasswordsPage() {  //Write onclick events here
  return (
    <div className='passwords-container'>
      <video src='/home-video/world.mp4' autoPlay loop muted />
      <h1>ORGANIZE YOUR PASSWORDS</h1>
      <p>Enter your information below.</p>
      <form className="form-inline" id="passwordForm">
      <div className="add-password">
        <input
          type="text"
          placeholder="Enter Site Name Ex: Twitter"
          id="appField"
        />
        <input
          type="text"
          placeholder="Enter Password"
          id="passwordField"
        />
        <button type="submit">Add Password</button>
      </div>
      </form>
    </div>
  );
}

export default PasswordsPage;*/