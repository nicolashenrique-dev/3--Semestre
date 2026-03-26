class Heroi {
    poder;
    resistencia;
    temArma;
    #nome;

    constructor(poder, resistencia, temArma, nome) {
        this.poder = poder;
        this.resistencia = resistencia;
        this.temArma = temArma;
        this.#nome = nome;
    }

    mostrarNome() {
        return this.#nome;
    }

    mostrarPoder() {
        return this.poder;
    }

    mostrarResistencia() {
        return this.resistencia;
    }

    mostrarTemArma() {
        return this.temArma;
    }

    mostrarTodos() {
        return `Nome: ${this.#nome}, Poder: ${this.poder}, Resistência: ${this.resistencia}, Tem Arma: ${this.temArma}`;
    }


}


class Xmen extends Heroi {
    constructor(poder, resistencia, temArma, nome) {
        super(poder, resistencia, temArma, nome);
    }
    apresentar() {
        return `Meu nome é ${this.mostrarNome()}, sou do Xmen e tenho ${this.poder} de poder, ${this.resistencia} de resistência e ${this.temArma} de arma`;
    }
}

const xmen = new Xmen(10, 10, true, "Wolverine");
console.log(xmen.apresentar());
console.log(xmen.mostrarTodos());

class Vingadores extends Heroi {
    constructor(poder, resistencia, temArma, nome) {
        super(poder, resistencia, temArma, nome);
    }
    apresentar() {
        return `Meu nome é ${this.mostrarNome()}, sou do Vingadores e tenho ${this.poder} de poder, ${this.resistencia} de resistência e ${this.temArma} de arma`;
    }
}

const vingadores = new Vingadores(10, 10, true, "Capitão América");
console.log(vingadores.apresentar());
console.log(vingadores.mostrarTodos());
