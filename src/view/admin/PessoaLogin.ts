import PessoaControl from '../../control/PessoaControl.js';

export default class PessoaLogin {
    private pessoaControl: PessoaControl;

    constructor(pessoaControl: PessoaControl) {
        this.pessoaControl = pessoaControl;
        this.inicializarLogin();
    }

    private coletarValores(): { usuario: string, senha: string } {
        const usuario = (document.getElementById('usuario') as HTMLInputElement).value;
        const senha = (document.getElementById('senha') as HTMLInputElement).value;
        return { usuario, senha };
    }

    private inicializarLogin(): void {
        const form = document.querySelector('form') as HTMLFormElement;
        form.addEventListener('submit', this.realizarLogin.bind(this));
    }

    private realizarLogin(event: Event): void {
        event.preventDefault();
        
        const { usuario, senha } = this.coletarValores();
        const logado = this.pessoaControl.autenticarPessoa(usuario, senha);
        
        if (logado) {
            this.redirecionarPaginaPrincipal();
        } else {
            this.exibirMensagemErro();
        }
    }

    private redirecionarPaginaPrincipal(): void {
        console.log('Login bem-sucedido! Redirecionando...');
        window.location.href = '/index.html';
    }

    private exibirMensagemErro(): void {
        console.log('Usuário ou senha inválidos!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const pessoaControl = PessoaControl.inicializar();
    new PessoaLogin(pessoaControl);
});