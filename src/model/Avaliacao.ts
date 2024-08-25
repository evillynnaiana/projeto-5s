class Avaliacao {
    private nota: number;
    private comentario: string;
    private auditor: string;
    private media: number;

    constructor(nota: number, comentario: string, auditor: string) {
        this.nota = nota;
        this.comentario = comentario;
        this.auditor = auditor;
        this.media = this.calcularMedia();
    }

    public editarNota(novaNota: number): void {
        this.nota = novaNota;
        this.media = this.calcularMedia();
    }

    public editarComentario(novoComentario: string): void {
        this.comentario = novoComentario;
    }

    public excluirNota(): void {
        this.nota = 0;
        this.media = this.calcularMedia();
    }

    public excluirComentario(): void {
        this.comentario = '';
    }

    public getMedia(): number {
        return this.media;
    }

    private calcularMedia(): number {
        return this.nota;
    }
}
