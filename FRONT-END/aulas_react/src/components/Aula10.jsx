import { useState, useEffect } from "react"
import { estilos } from "../style/estilos"


const Aula10 = () => {
    const [contador, setContador] = useState(0)
    useEffect(() => {
        console.log(contador);
        document.title = `Você clicou ${contador} vezes`
        
    }, [contador])

    useEffect(() => {
        const contadorSalvo = setContador(localStorage.getItem('contador')) || 0
        setContador(JSON.parse(contadorSalvo))
    }, [])

    function botaoContador() {
        const novoContador = contador + 1
        setContador(novoContador)
        localStorage.setItem('contador', JSON.stringify(novoContador))
    }
    
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 10 - useEffect e localStorage</h2>
            <h3>Conhecendo a Hook useEffect e aprendendo a armazenar dados localmente</h3>
            <hr />


            <p>Você clicou {contador} vezes</p>
            <button onClick={botaoContador} >Clique aqui</button>
        </div>
    )
}


export default Aula10