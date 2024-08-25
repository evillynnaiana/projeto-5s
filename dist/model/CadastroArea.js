"use strict";
class CadastroArea {
    constructor(nomeDaArea, salaId, pessoaResponsavel) {
        this.nomeDaArea = nomeDaArea;
        this.salaId = salaId;
        this.pessoaResponsavel = pessoaResponsavel;
    }
    getNomeSala() {
        return `${this.nomeDaArea} - Sala ID: ${this.salaId}`;
    }
    editarSala(novoNomeDaArea, novaSalaId) {
        this.nomeDaArea = novoNomeDaArea;
        this.salaId = novaSalaId;
    }
    excluirSala() {
        this.nomeDaArea = '';
        this.salaId = 0;
        this.pessoaResponsavel = '';
    }
}
