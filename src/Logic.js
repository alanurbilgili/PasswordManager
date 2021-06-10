import './Main.css';

export const login = (username, password) => {
    if (localStorage.getItem(username) == password) {
        sessionStorage.setItem("currentUser", username);

        window.location.href = "/Passwords";
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