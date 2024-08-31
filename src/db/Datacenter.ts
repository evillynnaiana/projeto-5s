export default class Datacenter<T> {
    private dados: T[] = [];
    private storageKey: string;

    constructor(private keySelector: (item: T) => string, storageKey: string) {
        this.storageKey = storageKey;
        this.load();
    }

    public adicionar(item: T): void {
        this.dados.push(item);
        this.save();
    }

    public obterTodos(): T[] {
        return [...this.dados];
    }

    public buscarPorChave(chave: string): T | undefined {
        return this.dados.find((item) => this.keySelector(item) === chave);
    }

    public atualizar(chave: string, novosDados: Partial<T>): boolean {
        const index = this.dados.findIndex((item) => this.keySelector(item) === chave);
        if (index !== -1) {
            this.dados[index] = { ...this.dados[index], ...novosDados };
            this.save();
            return true;
        }
        return false;
    }

    public remover(chave: string): boolean {
        const index = this.dados.findIndex((item) => this.keySelector(item) === chave);
        if (index !== -1) {
            this.dados.splice(index, 1);
            this.save();
            return true;
        }
        return false;
    }

    private load(): void {
        const storedData = localStorage.getItem(this.storageKey);
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            this.dados = parsedData.map((item: any) => this.reconstruct(item));
        }
    }

    protected reconstruct(data: any): T {
        return data as T;
    }

    private save(): void {
        localStorage.setItem(this.storageKey, JSON.stringify(this.dados));
    }
}