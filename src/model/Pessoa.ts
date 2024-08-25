export class Pessoa {
    private usuario: string;
    private funcao: string;
    private tipoUsuario: string;
    private senha: string;

    constructor(usuario: string, funcao: string, tipoUsuario: string, senha: string) {
        this.usuario = usuario;
        this.funcao = funcao;
        this.tipoUsuario = tipoUsuario;
        this.senha = senha;
    }

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
