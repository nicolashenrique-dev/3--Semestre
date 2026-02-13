class Pessoa {


   nome;
  
    constructor(nome) {

        this.nome = nome;

    }
apresentar() {
    return `Meu nome é ${this.nome}`;
}

}

class PessoaFisica extends Pessoa {

    cpf;
    
    constructor(nome, cpf) {
        super(nome);
        this.cpf = cpf;
    }
    apresentar() {
        return `Meu nome é ${this.nome} e o meu cpf é ${this.cpf}`;
    }
}


const ana = new PessoaFisica('Ana', '123.456.789-00');
console.log(ana.apresentar());


class PessoaJuridica extends Pessoa {

    cnpj;
    
    constructor(nome, cnpj) {
        super(nome);
        this.cnpj = cnpj;
    }
    apresentar() {
        return `Meu nome é ${this.nome} e o meu cnpj é ${this.cnpj}`;
    }
}

const sesi = new PessoaJuridica('Sesi', '1234567890');
console.log(sesi.apresentar());

