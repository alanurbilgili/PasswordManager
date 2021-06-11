import './Main.css';
const $ = require('jQuery');

export const login = (username, password) => {
    if (localStorage.getItem(username) == password) {
        sessionStorage.setItem("currentUser", username);

        window.location.href = "/Passwords-Page";
    }
}

export const register = (username, password) => {
    localStorage.setItem(username, password);
    window.location.href = "/Login";
}

export const generate = () => {
    var characters = '0123456789!@#$%^&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charLength = characters.length;
    var result = '';

    for (let i = 1; i <= 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLength));
    }

    return result;
}

export const setAppPassword = (App, Username, Password) => {
    $.ajax({
        type: "POST",
        url: "/Passwords-Page",
        data: JSON.stringify({
            app: App,
            username: Username,
            password: Password
        }), complete: function (data) {
            $("content").html(data);
        }
    })
}

export const getAppPassword = (app, password) => {
    $.ajax({
        type: "GET",
        url: "/users",
        datatype: "json",
        success: function (data) {

        }, error: function (){
            alert("Couldn't find the json file.")
        }
    })
}