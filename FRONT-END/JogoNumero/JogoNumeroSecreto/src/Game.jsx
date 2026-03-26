import { useState } from "react";
import { estilos } from "./GameEstilos";

const sortearNumero = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const Game = () => {
    const [numeroSecreto, setNumeroSecreto] = useState(sortearNumero());
    const [tentativas, setTentativas] = useState(0);
    const [chute, setChute] = useState("");
    const [mensagem, setMensagem] = useState("Adivinhe o número entre 1 e 100");
    const [jogoFinalizado, setJogoFinalizado] = useState(false);

    const botaoChutar = () => {
        const chuteNumero = parseInt(chute);
        setTentativas(tentativas + 1);

        if (chuteNumero === numeroSecreto) {
            setMensagem("Parabéns! Você acertou o número em " + tentativas + " tentativas");
            setJogoFinalizado(true);
            setChute('');
        } else if (chuteNumero < numeroSecreto) {
            setMensagem("O número secreto é maior que " + chuteNumero);
            setChute('');
        } else {
            setMensagem("O número secreto é menor que " + chuteNumero);
            setChute('');
        }
    };

    const novoJogo = () => {
        setNumeroSecreto(sortearNumero());
        setTentativas(0);
        setChute("");
        setMensagem("Adivinhe o número entre 1 e 100");
        setJogoFinalizado(false);
    };

    return (
      <section style={estilos.container}>
        <div style={estilos.conteudo}>
          <div style={estilos.informacoes}>
            <div style={estilos.textos}>
                <h1 style={estilos.h1}>Jogo Numero Secreto</h1>
                <p style={estilos.mensagem}>{mensagem}</p>
            </div>
            <input 
                type="number" 
                style={estilos.chute}
                onChange={(e) => setChute(e.target.value)}
                value={chute}
            />
            <div style={estilos.botoes}>
                <button style={estilos.botao} onClick={botaoChutar}>Chutar</button>
                <button style={estilos.botao} onClick={novoJogo}>Novo Jogo</button>
            </div>
          </div>

          <img src="./img/ia.png" style={estilos.imagem}/>
          
        </div>
      </section>
    );
}

export default Game;