class Pessoa {
    nome;
    idade;
    

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Carlos", 25);
const pessoa2 = new Pessoa("Nicolas", 17);

console.log(pessoa1);
console.log(pessoa2);