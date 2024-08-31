import PessoaDatacenter from '../db/PessoaDatacenter.js';
import Pessoa from '../model/Pessoa.js';
export default class PessoaControl {
    constructor(datacenter) {
        this.datacenter = datacenter;
    }
    static inicializar() {
        const datacenter = new PessoaDatacenter();
        return new PessoaControl(datacenter);
    }
    criarPessoa(usuario, funcao, tipoUsuario, senha) {
        const novaPessoa = new Pessoa(usuario, funcao, tipoUsuario, senha);
        this.datacenter.adicionar(novaPessoa);
    }
    atualizarPessoa(usuario, novosDados) {
        return this.datacenter.atualizar(usuario, novosDados);
    }
    removerPessoa(usuario) {
        return this.datacenter.remover(usuario);
    }
    obterPessoa(usuario) {
        return this.datacenter.buscarPorChave(usuario);
    }
    listarPessoas() {
        return this.datacenter.obterTodos();
    }
    autenticarPessoa(usuario, senha) {
        const pessoa = this.obterPessoa(usuario);
        if (pessoa && pessoa.verificarSenha(senha)) {
            return true;
        }
        return false;
    }
}
