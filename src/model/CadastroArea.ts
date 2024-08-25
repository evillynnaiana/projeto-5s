class CadastroArea {
    private nomeDaArea: string;
    private salaId: number;
    private pessoaResponsavel: string;

    constructor(nomeDaArea: string, salaId: number, pessoaResponsavel: string) {
        this.nomeDaArea = nomeDaArea;
        this.salaId = salaId;
        this.pessoaResponsavel = pessoaResponsavel;
    }

    public getNomeSala(): string {
        return `${this.nomeDaArea} - Sala ID: ${this.salaId}`;
    }

    public editarSala(novoNomeDaArea: string, novaSalaId: number): void {
        this.nomeDaArea = novoNomeDaArea;
        this.salaId = novaSalaId;
    }

    public excluirSala(): void {
        this.nomeDaArea = '';
        this.salaId = 0;
        this.pessoaResponsavel = '';
    }
}
