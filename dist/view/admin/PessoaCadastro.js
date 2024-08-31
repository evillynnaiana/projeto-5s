import PessoaControl from '../../control/PessoaControl.js';
export default class PessoaCadastro {
    constructor(pessoaControl) {
        this.pessoaControl = pessoaControl;
        this.inicializarCadastro();
    }
    coletarValores() {
        const usuario = document.getElementById('usuario').value;
        const senha = document.getElementById('senha').value;
        const funcaoAdmin = document.getElementById('funcao_admin').checked;
        const funcaoAuditor = document.getElementById('funcao_auditor').checked;
        const funcao = funcaoAdmin ? 'Administrador' : (funcaoAuditor ? 'Auditor' : '');
        const tipoUsuario = funcao === 'Administrador' ? 'admin' : 'user';
        return { usuario, senha, funcao, tipoUsuario };
    }
    inicializarCadastro() {
        const form = document.getElementById('formulario_cadastro');
        form.addEventListener('submit', this.criarPessoa.bind(this));
    }
    criarPessoa(event) {
        event.preventDefault();
        const { usuario, senha, funcao, tipoUsuario } = this.coletarValores();
        this.pessoaControl.criarPessoa(usuario, funcao, tipoUsuario, senha);
        this.limparFormulario();
        this.exibirMensagemSucesso();
    }
    limparFormulario() {
        document.getElementById('formulario_cadastro').reset();
    }
    exibirMensagemSucesso() {
        console.log('Pessoa cadastrada com sucesso!');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const pessoaControl = PessoaControl.inicializar();
    new PessoaCadastro(pessoaControl);
});
