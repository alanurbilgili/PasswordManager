import React from 'react';
import '../App.css';
import './Main.css';
import { Button } from './Button';
import * as Logic from '../Logic';

//add data keeping functions

export default class GetPasswords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        };
        this.onClick = this.onClick.bind(this);

    }
    onClick() {
        var pword = Logic.generate();
        alert("Your new password is " + pword);
    }

    render() {
        return (
            <div className='home-container'>
                <video src='/home-video/world.mp4' autoPlay loop muted />
                <h1>GENERATE A PASSWORD</h1>
                <div className='home-btns'>


                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={this.onClick}
                    >
                        Generate Password
                    </Button>
                </div>
            </div>
        );
    }
}