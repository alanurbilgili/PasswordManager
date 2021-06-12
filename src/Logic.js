export const generate = () => {
    var characters = '0123456789!@#$%^&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charLength = characters.length;
    var result = '';

    for (let i = 1; i <= 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLength));
    }

    return result;
}