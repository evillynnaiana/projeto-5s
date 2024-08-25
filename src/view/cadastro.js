"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadastro = /** @class */ (function () {
    function Cadastro() {
    }
    Cadastro.prototype.coletar_valores = function () {
        var formulario_cadastro = document.getElementById('formulario_cadastro');
        var pessoa = {
            usuario: '',
            funcao: '',
            tipoUsuario: '',
            senha: '',
        };
        formulario_cadastro.addEventListener('submit', function (event) {
            event.preventDefault();
            var usuario = document.getElementById('usuario').value;
            var senha = document.getElementById('senha').value;
            var funcaoAdmin = document.getElementById('funcao_admin').checked;
            var funcaoAuditor = document.getElementById('funcao_auditor').checked;
            var funcao = '';
            if (funcaoAdmin) {
                funcao = 'Administrador';
            }
            else if (funcaoAuditor) {
                funcao = 'Auditor';
            }
            pessoa.usuario = usuario;
            pessoa.funcao = funcao;
            pessoa.tipoUsuario = funcaoAdmin ? '1' : '2'; // Exemplo: 1 para Admin, 2 para Auditor
            pessoa.senha = senha;
            console.log(pessoa);
        });
    };
    return Cadastro;
}());
exports.default = Cadastro;
