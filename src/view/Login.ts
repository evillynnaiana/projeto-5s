class Login {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    public validate(): boolean {
        // Exemplo simples de validação
        return this.username === 'admin' && this.password === 'password';
    }
}

document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = (document.getElementById('username') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('password') as HTMLInputElement).value;

    const login = new Login(usernameInput, passwordInput);

    const errorMessage = document.getElementById('errorMessage') as HTMLDivElement;

    if (login.validate()) {
        alert('Login successful!');
        // Aqui você pode redirecionar para outra página, por exemplo
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});
