import { estilos } from "../style/estilos";
import { useState, useEffect } from "react";

const Aula12 = () => {
    const [dados, setDados] = useState('')
    const buscarDados = async () => {
        try {
            const resposta = await fetch("https://dog.ceo/api/breeds/image/random")
            if (!resposta.ok) {
                throw new Error("Erro na rede ou CORS")
            }
            const dadosObtidos = await resposta.json()
            setDados(dadosObtidos.message)
        } catch (erro) {
            console.error("Falha ao buscar cachorro:", erro)
            setDados("https://via.placeholder.com/300?text=Erro+CORS+ou+Rede")
        }
    }

    useEffect(() => {
        buscarDados()
    }, [])

    return (
        <div style={estilos.cardAula}>
            <h1 style={estilos.titulo}>Aula 12 - Consumo de APIs</h1>
            <h3>Consumindo uma API publica</h3>
            <hr />

            <div>
                <p>Imagem de cachorro</p>
                {dados ? <img src={dados} width={300} alt="Cachorro" /> : <p>Carregando...</p>}
                <button onClick={buscarDados}>Exibir Mensagem</button>
            </div>

        </div>
    )
}

export default Aula12
