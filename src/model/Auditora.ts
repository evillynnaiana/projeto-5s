class GerenciamentoDeAuditorias {
    private idAuditoria: number;
    private data: Date;

    constructor(idAuditoria: number, data: Date) {
        this.idAuditoria = idAuditoria;
        this.data = data;
    }

    public pesquisa(id: number): boolean {
        return this.idAuditoria === id;
    }
}
