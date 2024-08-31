import Datacenter from './Datacenter.js';
import Pessoa from '../model/Pessoa.js';
export default class PessoaDatacenter extends Datacenter {
    constructor() {
        super((p) => p.getNome(), 'pessoasData');
    }
    reconstruct(data) {
        return new Pessoa(data.usuario, data.funcao, data.tipoUsuario, data.senha);
    }
}
