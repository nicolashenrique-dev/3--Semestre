import { estilos } from "../style/estilos";
import { useState } from "react";

const Aula06 = () => {
    const [contador, setContador] = useState(0)
    const [texto, setTexto] = useState('')
    const [cidade, setCidade] = useState('')
    const [telefone, setTelefone] = useState('')
    const [visivel, setVisivel] = useState(true)

    const limpar = () => {
        setTexto('')
        setCidade('')
        setTelefone('')
    }
    return (
        <div>
            <hr/>
            <h2>Aula 06</h2>
            <h3>O hook useState adiciona estado ao componente</h3>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <hr />
            <input type="text" onChange={(e) => setTexto(e.target.value)} placeholder="Digite algo..." value={texto} />
            <p>Você digitou: {texto}</p>
            <button onClick={() => setTexto('')}>Limpar</button>
            <hr />
            <input type="text" onChange={(e) => setCidade(e.target.value)} placeholder="Digite o nome da cidade..." value={cidade} />
            <p>Você digitou: {cidade}</p>
            <button onClick={() => setCidade('')}>Limpar</button>
            <hr />
            <input type="text" onChange={(e) => setTelefone(e.target.value)} placeholder="Digite o número do telefone..." value={telefone} />
            <p>Você digitou: {telefone}</p>
            <button onClick={limpar}>Limpar</button>

            <p>Olá {texto}, você mora em {cidade} e seu telefone é {telefone}</p>

            <button onClick={() => setVisivel(!visivel)}>{visivel == false ? 'Mostrar' : 'Esconder'}</button>
            {visivel == false ? <p>R$ ****,**</p> : <p>R$ 1000,00</p>}           
        </div>
    )
}

export default Aula06