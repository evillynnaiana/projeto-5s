export default class Datacenter {
    constructor(keySelector, storageKey) {
        this.keySelector = keySelector;
        this.dados = [];
        this.storageKey = storageKey;
        this.load();
    }
    adicionar(item) {
        this.dados.push(item);
        this.save();
    }
    obterTodos() {
        return [...this.dados];
    }
    buscarPorChave(chave) {
        return this.dados.find((item) => this.keySelector(item) === chave);
    }
    atualizar(chave, novosDados) {
        const index = this.dados.findIndex((item) => this.keySelector(item) === chave);
        if (index !== -1) {
            this.dados[index] = Object.assign(Object.assign({}, this.dados[index]), novosDados);
            this.save();
            return true;
        }
        return false;
    }
    remover(chave) {
        const index = this.dados.findIndex((item) => this.keySelector(item) === chave);
        if (index !== -1) {
            this.dados.splice(index, 1);
            this.save();
            return true;
        }
        return false;
    }
    load() {
        const storedData = localStorage.getItem(this.storageKey);
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            this.dados = parsedData.map((item) => this.reconstruct(item));
        }
    }
    reconstruct(data) {
        return data;
    }
    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.dados));
    }
}
