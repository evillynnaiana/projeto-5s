export default class Pessoa {
    constructor(usuario, funcao, tipoUsuario, senha) {
        this.usuario = usuario;
        this.funcao = funcao;
        this.tipoUsuario = tipoUsuario;
        this.senha = senha;
    }
    getNome() {
        return this.usuario;
    }
    getFuncao() {
        return this.funcao;
    }
    getTipoUser() {
        return this.tipoUsuario;
    }
    verificarSenha(senha) {
        return this.senha === senha;
    }
}
