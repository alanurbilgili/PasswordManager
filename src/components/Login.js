import React from 'react';
import '../App.css';
import './Main.css';
//add data keeping functions

function LoginPage() {  //Write onclick events here
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
                    />
                    <input
                        type="text"
                        placeholder="Enter Password"
                        id="passwordField"
                    />
                    <a href="/sign-up">Not registered?</a>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

const element = document.getElementById("passwordForm");

if (element) {
    element.addEventListener("submit", loginUser);
}

function loginUser() {
    if (localStorage.getItem(document.getElementById("usernameField").value) ==
    document.getElementById("passwordField").value) {
        sessionStorage.setItem("user", document.getElementById("usernameField").value);
        window.location.href = "/Passwords-Page";
        alert("Login successful");
    } else {
        alert("Login failed");
    }
}

export default LoginPage;