import { estilos } from "../style/estilos";
import { useState, useEffect } from "react";

const Aula12 = () => {
    const [dados, setDados] = useState('')
    const buscarDados = async () => {
        const resposta = await fetch("https://dog.ceo/api/breeds/image/random")
        const dados = await resposta.json()
        console.log(dados.message)
        setDados(dados.message)
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
                <img src={dados} width={300} />
                <button onClick={buscarDados}>Exibir Mensagem</button>
            </div>

        </div>
    )
}

export default Aula12
