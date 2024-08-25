var _a;
var Login = /** @class */ (function () {
    function Login(username, password) {
        this.username = username;
        this.password = password;
    }
    Login.prototype.validate = function () {
        // Exemplo simples de validação
        return this.username === 'admin' && this.password === 'password';
    };
    return Login;
}());
(_a = document.getElementById('loginForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;
    var login = new Login(usernameInput, passwordInput);
    var errorMessage = document.getElementById('errorMessage');
    if (login.validate()) {
        alert('Login successful!');
        // Aqui você pode redirecionar para outra página, por exemplo
    }
    else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});
