class Pessoa {
    #documento; // Atributo privado
    nome; // Atributo público
    idade;// Atributo público

    constructor(documento, nome, idade) {
        this.#documento = documento;
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
    mostrarDocumento(){
        return this.#documento;
    }
}

const pessoa1 = new Pessoa("123456789", "Carlos", 25);
console.log(pessoa1.apresentar());
console.log(pessoa1.mostrarDocumento());
