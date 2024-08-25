export default class Cadastro {
    public coletar_valores(): void {
        const formulario_cadastro = document.getElementById('formulario_cadastro') as HTMLFormElement;

        const pessoa = {
            usuario: '',
            funcao: '',
            tipoUsuario: '',
            senha: '',
        };

        formulario_cadastro.addEventListener('submit', function (event) {
            event.preventDefault();

            const usuario = (document.getElementById('usuario') as HTMLInputElement).value;
            const senha = (document.getElementById('senha') as HTMLInputElement).value;

            const funcaoAdmin = (document.getElementById('funcao_admin') as HTMLInputElement).checked;
            const funcaoAuditor = (document.getElementById('funcao_auditor') as HTMLInputElement).checked;

            let funcao = '';
            if (funcaoAdmin) {
                funcao = 'Administrador';
            } else if (funcaoAuditor) {
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
