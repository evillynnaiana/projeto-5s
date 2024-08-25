"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarPessoa = adicionarPessoa;
exports.obterPessoas = obterPessoas;
exports.buscarPessoaPorNome = buscarPessoaPorNome;
exports.autenticar = autenticar;
const Pessoa_1 = require("../model/Pessoa");
const pessoas = [];
function adicionarPessoa(nomeCompleto, funcao, tipoUsuario, senha) {
    const novaPessoa = new Pessoa_1.Pessoa(nomeCompleto, funcao, tipoUsuario, senha);
    pessoas.push(novaPessoa);
    console.log('Pessoa adicionada:', novaPessoa);
}
function obterPessoas() {
    return pessoas;
}
function buscarPessoaPorNome(nomeCompleto) {
    return pessoas.find((pessoa) => pessoa.getNome() === nomeCompleto);
}
function autenticar(nomeCompleto, senha) {
    const pessoa = buscarPessoaPorNome(nomeCompleto);
    return pessoa ? pessoa.verificarSenha(senha) : false;
}
