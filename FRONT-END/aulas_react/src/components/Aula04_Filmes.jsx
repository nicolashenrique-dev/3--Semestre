import { estilos } from "../style/estilos"

const Aula04_Filmes = ( {titulo, genero, imagem}) => {
    return (
        <div style={estilos.filmes}>
           <div style={estilos.cardFilme}>
                <img src={imagem} alt={titulo} style={estilos.imagem_filme}/>
                <p>Titulo: {titulo}</p>
                <p>Genero: {genero}</p>
                <button style={estilos.botao}>Assistir</button>
            </div>
        </div>
    )
}

export default Aula04_Filmes