class Bruxo {
  #energiaMagica = 100;
  nome;
  nivelMagia = 10;


    constructor(nome, nivelMagia) {
        this.nome = nome;
        this.#energiaMagica = 100;
        this.nivelMagia = nivelMagia;
    }

    mostrarEnergiaMagica(){
        return this.#energiaMagica;
    }

    recarregarEnergiaMagica(){
        this.#energiaMagica = this.#energiaMagica + 10;
        return this.#energiaMagica;
    }

    atacar(){
        this.#energiaMagica = this.#energiaMagica - 10;
        return this.#energiaMagica;
    }
    }


    class Grifinoria extends Bruxo {
        constructor(nome, nivelMagia) {
            super(nome, nivelMagia);
            this.casa = "Grifinoria";
        }

        mostrarCasa() {
            return this.casa;
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
    }





const bruxo = new Bruxo("Harry",100 , 10);
const bruxo1 = new Grifinoria("Harry",100 , 10);
console.log(bruxo1.mostrarEnergiaMagica());
console.log(bruxo1.recarregarEnergiaMagica());
console.log(bruxo1.atacar());
