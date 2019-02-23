class Tarefa {

    constructor(nome, concluido) {
        this._nome = nome;
        this._concluido = false;
    }

    // Metodos

    printTarefa() {
        console.log(`### Tarefa ###`);
        console.log(`Nome.....: ${this._nome}`);
        console.log(`Concluído: ${this._concluido}`);
    }

    // Getters and Setters

    get nome() { return this._nome; }

    set nome(valor) {
        this._nome = valor;
    }

    get concluido() { return this._concluido; }

    set concluido(valor) {
        this._concluido = valor;
    }

}