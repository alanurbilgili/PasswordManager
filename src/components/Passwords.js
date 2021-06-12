import React from 'react';
import '../App.css';
import './Main.css';
import axios from "axios";
//add data keeping functions

function PasswordsPage() {  //Write onclick events here
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
          placeholder="Enter Username"
          id="usernameField"
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



export default PasswordsPage;