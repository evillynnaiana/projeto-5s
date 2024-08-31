import PessoaDatacenter from '../db/PessoaDatacenter.js';
import Pessoa from '../model/Pessoa.js';

export default class PessoaControl {
    private datacenter: PessoaDatacenter;

    constructor(datacenter: PessoaDatacenter) {
        this.datacenter = datacenter;
    }

    public static inicializar(): PessoaControl {
        const datacenter = new PessoaDatacenter();
        return new PessoaControl(datacenter);
    }

    public criarPessoa(usuario: string, funcao: string, tipoUsuario: string, senha: string): void {
        const novaPessoa = new Pessoa(usuario, funcao, tipoUsuario, senha);
        this.datacenter.adicionar(novaPessoa);
    }

    public atualizarPessoa(usuario: string, novosDados: Partial<Pessoa>): boolean {
        return this.datacenter.atualizar(usuario, novosDados);
    }

    public removerPessoa(usuario: string): boolean {
        return this.datacenter.remover(usuario);
    }

    public obterPessoa(usuario: string): Pessoa | undefined {
        return this.datacenter.buscarPorChave(usuario);
    }

    public listarPessoas(): Pessoa[] {
        return this.datacenter.obterTodos();
    }

    public autenticarPessoa(usuario: string, senha: string): boolean {
        const pessoa = this.obterPessoa(usuario);
        if (pessoa && pessoa.verificarSenha(senha)) {
            return true;
        }
        return false;
    }
}
