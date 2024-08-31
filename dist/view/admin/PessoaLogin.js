import PessoaControl from '../../control/PessoaControl.js';
export default class PessoaLogin {
    constructor(pessoaControl) {
        this.pessoaControl = pessoaControl;
        this.inicializarLogin();
    }
    coletarValores() {
        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;
        return { usuario, senha };
    }
    inicializarLogin() {
        const form = document.querySelector('form');
        form.addEventListener('submit', this.realizarLogin.bind(this));
    }
    realizarLogin(event) {
        event.preventDefault();
        const { usuario, senha } = this.coletarValores();
        const logado = this.pessoaControl.autenticarPessoa(usuario, senha);
        if (logado) {
            this.redirecionarPaginaPrincipal();
        }
        else {
            this.exibirMensagemErro();
        }
    }
    redirecionarPaginaPrincipal() {
        console.log('Login bem-sucedido! Redirecionando...');
        window.location.href = '/index.html';
    }
    exibirMensagemErro() {
        console.log('Usuário ou senha inválidos!');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const pessoaControl = PessoaControl.inicializar();
    new PessoaLogin(pessoaControl);
});
