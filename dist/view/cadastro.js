"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cadastro {
    coletar_valores() {
        const formulario_cadastro = document.getElementById('formulario_cadastro');
        const pessoa = {
            usuario: '',
            funcao: '',
            tipoUsuario: '',
            senha: '',
        };
        formulario_cadastro.addEventListener('submit', function (event) {
            event.preventDefault();
            const usuario = document.getElementById('usuario').value;
            const senha = document.getElementById('senha').value;
            const funcaoAdmin = document.getElementById('funcao_admin').checked;
            const funcaoAuditor = document.getElementById('funcao_auditor').checked;
            let funcao = '';
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
    }
}
exports.default = Cadastro;
