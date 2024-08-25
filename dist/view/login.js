"use strict";
var _a;
class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    validate() {
        // Exemplo simples de validação
        return this.username === 'admin' && this.password === 'password';
    }
}
(_a = document.getElementById('loginForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const login = new Login(usernameInput, passwordInput);
    const errorMessage = document.getElementById('errorMessage');
    if (login.validate()) {
        alert('Login successful!');
        // Aqui você pode redirecionar para outra página, por exemplo
    }
    else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});
