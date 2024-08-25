"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(usuario, funcao, tipoUsuario, senha) {
        this.usuario = usuario;
        this.funcao = funcao;
        this.tipoUsuario = tipoUsuario;
        this.senha = senha;
    }
    Pessoa.prototype.getNome = function () {
        return this.usuario;
    };
    Pessoa.prototype.getFuncao = function () {
        return this.funcao;
    };
    Pessoa.prototype.getTipoUser = function () {
        return this.tipoUsuario;
    };
    Pessoa.prototype.verificarSenha = function (senha) {
        return this.senha === senha;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
