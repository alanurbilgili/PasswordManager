import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';

//add data keeping functions here

function PasswordsPage() {  //Write onclick events here
  return (
    <div className='passwords-container'>
      <video src='/home-video/world.mp4' autoPlay loop muted />
      <h1>ORGANIZE YOU PASSWORDS</h1>
      <p>Enter your information below.</p>
      <div className="add">
      <div className="add-password">
        <input
          type="text"
          placeholder="Enter Site Name Ex: Twitter"
        />
        <input
          type="text"
          placeholder="Enter Username"
        />
        <input
          type="text"
          placeholder="Enter Password"
        />
        <button> Add Password</button>
      </div>
      </div>
    </div>
  );
}

export default PasswordsPage;