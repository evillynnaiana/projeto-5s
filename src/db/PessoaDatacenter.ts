import Datacenter from './Datacenter.js';
import Pessoa from '../model/Pessoa.js';

export default class PessoaDatacenter extends Datacenter<Pessoa> {
    constructor() {
        super((p) => p.getNome(), 'pessoasData');
    }

    protected reconstruct(data: any): Pessoa {
        return new Pessoa(data.usuario, data.funcao, data.tipoUsuario, data.senha);
    }
}