import Jogador from "../models/Jogadores.js";


//vetor de objetos de Livros

let jogadores = [
   new Jogador("Nicolas", 100, 1),
   new Jogador("Maria", 200, 2),
   new Jogador("João", 300, 3),
   new Jogador("Pedro", 400, 4),
   new Jogador("Ana", 500, 5),
   new Jogador("Lucas", 600, 6),
   new Jogador("Rafael", 700, 7),
   new Jogador("Gabriel", 800, 8),
   new Jogador("Matheus", 900, 9),
   new Jogador("Thiago", 1000, 10)
];
//função para listar todos os jogadores

const JogadorController = {

    listar: (req, res) => {
        res.render("jogadores.ejs", { jogadores: jogadores });
    },
    adicionar: (req, res) => {
        const { nome, pontuacao } = req.body;
        let id = jogadores.length + 1;
        try {
            const novoJogador = new Jogador(nome, Number(pontuacao), id);
            jogadores.push(novoJogador);
            res.redirect("/jogadores");
        } catch (error) {
            console.log(error.message);
            res.status(400).render("jogadores.ejs", { jogadores: jogadores, error: error.message });
        }
    },
   adicionarPontuacao: (req, res) => {
    const { id } = req.body;
    const { pontuacao } = req.body;
    
    console.log(id, jogadores);
    
    const jogador = jogadores.find(l => l.id == id);
    if (jogador) {
        jogador.adicionarPontuacao(Number(pontuacao));
        res.redirect("/jogadores");
    } else {
        res.status(404).send("Jogador não encontrado");
    }
}
}
export default JogadorController;