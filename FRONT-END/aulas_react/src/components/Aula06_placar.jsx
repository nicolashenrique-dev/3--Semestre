import { useState } from "react"
import { estilos } from "../style/estilos"

const Aula06_placar = () => {
    const [placarFutebol, setPlacarFutebol] = useState(0)
    const [placarFutebol2, setPlacarFutebol2] = useState(0)
    const [placarBasquete, setPlacarBasquete] = useState(0)
    const [placarBasquete2, setPlacarBasquete2] = useState(0)
    

    return (

        <div style={estilos.placar}>
            <p>Futebol: {placarFutebol} x {placarFutebol2}</p>
            <div style={estilos.placar2}>
                <button onClick={() => setPlacarFutebol(placarFutebol + 1)} style={estilos.botao_placar}>Gol</button>
                <button onClick={() => setPlacarFutebol2(placarFutebol2 + 1)} style={estilos.botao_placar}>Gol</button>
            </div>
            
            <p>Basquete: {placarBasquete} x {placarBasquete2}</p>
            <div style={estilos.placar2}>
                <button onClick={() => setPlacarBasquete(placarBasquete + 1)} style={estilos.botao_placar}>+1</button>
                <button onClick={() => setPlacarBasquete(placarBasquete + 2)} style={estilos.botao_placar}>+2</button>
                <button onClick={() => setPlacarBasquete(placarBasquete + 3)} style={estilos.botao_placar}>+3</button>
            </div>
            <div style={estilos.placar2}>
                <button onClick={() => setPlacarBasquete2(placarBasquete2 + 1)} style={estilos.botao_placar}>+1</button>
                <button onClick={() => setPlacarBasquete2(placarBasquete2 + 2)} style={estilos.botao_placar}>+2</button>
                <button onClick={() => setPlacarBasquete2(placarBasquete2 + 3)} style={estilos.botao_placar}>+3</button>
            </div>
        </div>
    )
}

export default Aula06_placar

