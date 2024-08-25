"use strict";
class GerenciamentoDeAuditorias {
    constructor(idAuditoria, data) {
        this.idAuditoria = idAuditoria;
        this.data = data;
    }
    pesquisa(id) {
        return this.idAuditoria === id;
    }
}
