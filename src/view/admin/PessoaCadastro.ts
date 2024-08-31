import PessoaControl from '../../control/PessoaControl.js';

export default class PessoaCadastro {
    private pessoaControl: PessoaControl;

    constructor(pessoaControl: PessoaControl) {
        this.pessoaControl = pessoaControl;
        this.inicializarCadastro();
    }

    private coletarValores(): { usuario: string, senha: string, funcao: string, tipoUsuario: string } {
        const usuario = (document.getElementById('usuario') as HTMLInputElement).value;
        const senha = (document.getElementById('senha') as HTMLInputElement).value;
        const funcaoAdmin = (document.getElementById('funcao_admin') as HTMLInputElement).checked;
        const funcaoAuditor = (document.getElementById('funcao_auditor') as HTMLInputElement).checked;

        const funcao = funcaoAdmin ? 'Administrador' : (funcaoAuditor ? 'Auditor' : '');
        const tipoUsuario = funcao === 'Administrador' ? 'admin' : 'user';

        return { usuario, senha, funcao, tipoUsuario };
    }

    private inicializarCadastro(): void {
        const form = document.getElementById('formulario_cadastro') as HTMLFormElement;
        form.addEventListener('submit', this.criarPessoa.bind(this));
    }

    private criarPessoa(event: Event): void {
        event.preventDefault();
        
        const { usuario, senha, funcao, tipoUsuario } = this.coletarValores();
        this.pessoaControl.criarPessoa(usuario, funcao, tipoUsuario, senha);
        this.limparFormulario();
        this.exibirMensagemSucesso();
    }

    private limparFormulario(): void {
        (document.getElementById('formulario_cadastro') as HTMLFormElement).reset();
    }

    private exibirMensagemSucesso(): void {
        console.log('Pessoa cadastrada com sucesso!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const pessoaControl = PessoaControl.inicializar();
    new PessoaCadastro(pessoaControl);
});
