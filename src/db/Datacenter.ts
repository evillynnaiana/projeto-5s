import { Pessoa } from '../model/Pessoa';

const pessoas: Pessoa[] = [];

export function adicionarPessoa(nomeCompleto: string, funcao: string, tipoUsuario: string, senha: string): void {
    const novaPessoa = new Pessoa(nomeCompleto, funcao, tipoUsuario, senha);
    pessoas.push(novaPessoa);
    console.log('Pessoa adicionada:', novaPessoa);
}

export function obterPessoas(): Pessoa[] {
    return pessoas;
}

export function buscarPessoaPorNome(nomeCompleto: string): Pessoa | undefined {
    return pessoas.find((pessoa) => pessoa.getNome() === nomeCompleto);
}

export function autenticar(nomeCompleto: string, senha: string): boolean {
    const pessoa = buscarPessoaPorNome(nomeCompleto);
    return pessoa ? pessoa.verificarSenha(senha) : false;
}
