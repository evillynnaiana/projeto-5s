export default class Pessoa {
    constructor(
        private usuario: string,
        private funcao: string,
        private tipoUsuario: string,
        private senha: string
    ) {}

    public getNome(): string {
        return this.usuario;
    }

    public getFuncao(): string {
        return this.funcao;
    }

    public getTipoUser(): string {
        return this.tipoUsuario;
    }

    public verificarSenha(senha: string): boolean {
        return this.senha === senha;
    }
}