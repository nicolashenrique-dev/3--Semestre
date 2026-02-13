
class Jogador {
  constructor(nome, pontuacao = 0, id) {
    this.nome = nome;
    this.pontuacao = pontuacao;
    this.nivel = this.calcularNivel();
    this.id = id;
  }

  adicionarPontuacao() {
    this.pontuacao += 10;
    this.nivel = this.calcularNivel();
  }

  calcularNivel() {
    if (this.pontuacao >= 200) {
      return 'Avançado';
    } else if (this.pontuacao >= 100) {
      return 'Médio';
    } else {
      return 'Iniciante';
    }
  }
}

export default Jogador;
