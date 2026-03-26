import { estilos } from "../style/estilos";
import { useState } from "react";
import { Aula07_Perfil } from "./Aula07_Perfil";
import Aula09_Numero from "./Aula09_Numero";

const Aula09 = () => {
    const [numerosSorteados, setNumerosSorteados] = useState([10, 46, 57, 68, 79, 80]);
    


    function botaoSortear() {

        const numeroSorteado = Math.floor(Math.random() * 60 + 1);
        //numerosSorteados.push(numeroSorteado);
        setNumerosSorteados([...numerosSorteados, numeroSorteado]);
    }
    function botaoExcluir (nr) {
        const NovosNumeros = numerosSorteados.filter((numero) => numero != nr )

        setNumerosSorteados(NovosNumeros)
    }
    
    return (
        <div style={estilos.cardAula}>
            <h1 style={estilos.titulo}>Aula 09</h1>
            <hr />
            <h3>numeros sorteados:</h3>
            {/*A função map() é usada como um for para iterar sobre o array numerosSorteados */}
            {numerosSorteados.map((numero, index) => (
                <Aula09_Numero
  key={index}
  numero={numero}
  excluir={() => botaoExcluir(numero)}
/>
            ))}
            <hr />

            <button onClick={botaoSortear}>Sortear</button>

            
            
        </div>
    );
};

export default Aula09
