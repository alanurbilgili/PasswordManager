import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';

function MainPage() {
  return (
    <div className='home-container'>
      <video src='/home-video/world.mp4' autoPlay loop muted />
      <h1>KEEP YOUR DATA SAFE</h1>
      <p>Can't remember your passwords?</p>
        <p> We can help you with that.</p>
      <div className='home-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          MANAGE PASSWORDS <i class="fas fa-lock"></i>
        </Button>
      </div>
    </div>
  );
}

export default MainPage;