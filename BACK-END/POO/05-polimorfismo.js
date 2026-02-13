class Bruxo {
  #energiaMagica = 100; 
  nivelMagia;

  constructor(nome, nivelMagia) {
    this.nome = nome;
    this.nivelMagia = nivelMagia;
  }

  mostrarEnergiaMagica() {
    return this.#energiaMagica;
  }

  recarregarEnergiaMagica() {
    this.#energiaMagica += 10;
    return this.#energiaMagica;
  }

  atacar() {
    this.#energiaMagica -= 10;
    return this.#energiaMagica;
  }
}

class Grifinoria extends Bruxo {
  constructor(nome, nivelMagia) {
    super(nome, nivelMagia);
    this.casa = "Grifinória";
  }

  mostrarCasa() {
    return this.casa;
  }

  apresentar() {
    return `Meu nome é ${this.nome} e meu nível de magia é ${this.nivelMagia}, sou da casa ${this.casa}`;
  }


}

class Sonserina extends Bruxo {
  constructor(nome, nivelMagia) {
    super(nome, nivelMagia);
    this.casa = "Sonserina";
  }

  mostrarCasa() {
    return this.casa;
  }

  apresentar() {
    return `Meu nome é ${this.nome} e meu nível de magia é ${this.nivelMagia}, sou da casa ${this.casa}`;
  }
}


const bruxo = new Bruxo("Harry", 10);
const bruxo1 = new Grifinoria("Harry", 10);

// Testando
console.log(bruxo1.mostrarEnergiaMagica());       // 100
console.log(bruxo1.recarregarEnergiaMagica());    // 110
console.log(bruxo1.atacar());                     // 100
console.log(bruxo1.mostrarEnergiaMagica());       // 100
console.log(bruxo1.apresentar());
