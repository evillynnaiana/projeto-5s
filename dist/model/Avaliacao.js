"use strict";
class Avaliacao {
    constructor(nota, comentario, auditor) {
        this.nota = nota;
        this.comentario = comentario;
        this.auditor = auditor;
        this.media = this.calcularMedia();
    }
    editarNota(novaNota) {
        this.nota = novaNota;
        this.media = this.calcularMedia();
    }
    editarComentario(novoComentario) {
        this.comentario = novoComentario;
    }
    excluirNota() {
        this.nota = 0;
        this.media = this.calcularMedia();
    }
    excluirComentario() {
        this.comentario = '';
    }
    getMedia() {
        return this.media;
    }
    calcularMedia() {
        return this.nota;
    }
}
