"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
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
exports.Pessoa = Pessoa;
