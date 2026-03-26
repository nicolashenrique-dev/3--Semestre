import { estilos } from "../style/estilos";
import {Aula07_Multicomponentes, MeuComponenteNomeado } from "./Aula07_Multicomponentes";

const Aula07 = () => {
    return (
        <div style={estilos.cardAula}>
           <h1>importação e exportação de componentes</h1>
            <Aula07_Multicomponentes />
        </div>
    )
}


export default Aula07