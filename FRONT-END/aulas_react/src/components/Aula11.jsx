import { estilos } from "../style/estilos"
import Aula11_Cadastro from "./Aula11_Cadastro"
import { useState, useEffect } from "react"

const Aula11 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 11 - Criando uma lista de produtos e armazenando Localmente</h2>
            <h3> criando uma lista de produtos e armazenando Localmente</h3>

            <Aula11_Cadastro />

        </div>
    )
}

export default Aula11