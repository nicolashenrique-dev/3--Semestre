class Bruxo {
    nome;
    idade;
    feitico;
    casa;
    nivelMagia;
    nivelEnergia;

    constructor(nome, idade, feitico, casa, nivelMagia) {
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivelMagia = nivelMagia;
    }
    }

const bruxo1 = new Bruxo("Harry", 17, "Expecto Patronum", "Grifinória", 10);
const bruxo2 = new Bruxo("Hermione", 17, "Wingardium Leviosa", "Grifinória", 10);
const bruxo3 = new Bruxo("Ron", 17, "Expelliarmus", "Grifinória", 10);

console.log(bruxo1);
console.log(bruxo2);
console.log(bruxo3);