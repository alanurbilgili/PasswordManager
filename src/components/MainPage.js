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
      <div className='home-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          MANAGE PASSWORDS <i class="fas fa-lock"></i>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ABOUT US <i class="fas fa-laugh"></i>
        </Button>
      </div>
    </div>
  );
}

export default MainPage;