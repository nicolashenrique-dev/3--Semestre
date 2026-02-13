import React from 'react'

const Aula05 = () => {
    const botaoClique = () => {
        alert('Botão foi clicado')
    }
    const Enter = (event) => {
        event.target.style.backgroundColor = 'red'
    }
    const Leave = (event) => {
        event.target.style.backgroundColor = 'blue'
    }
    const alterarCor = (event) => {
        if (event.key === 'a') {
            event.target.style.backgroundColor = 'blue'
            event.target.style.color = 'white'
        }
        if (event.key === 'v') {
            event.target.style.backgroundColor = 'red'
            event.target.style.color = 'white'
        }
        if (event.key === 'z') {
            event.target.style.backgroundColor = 'green'
            event.target.style.color = 'white'
        }
        if (event.key === 'w') {
            event.target.style.backgroundColor = 'white'
            event.target.style.color = 'black'
        }
        if (event.key === 's') {
            event.target.style.backgroundColor = 'orange'
            event.target.style.color = 'white'
        }
    }
    return (
        <div>
            <h1>Eventos de um componente</h1>
            <h3>os eventos de um componente são representados por funções</h3>
            <hr />

            <p>Evento onClick- ao clicar</p>
            <button onClick={botaoClique}>Clique aqui</button>
            <p>Este paragrafo recebe um duplo clique</p>
            <button onDoubleClick={botaoClique}>Clique aqui</button>
            <p>esse paragrafo troca de cor ao passar o mouse</p>
            <input type="text" placeholder='Digite algo...' onChange={(event) => alert(event.target.value)} />
            <select onChange={(event) => alert(event.target.value)}>
                <option value="1A">1º A EM</option>
                <option value="1B">1º B EM</option>
                <option value="2A">2º A EM</option>
                <option value="2B">2º B EM</option>
                <option value="3A">3º A EM</option>
                <option value="3B">3º B EM</option>
            </select>
            <hr />
            <p>Evento onMouseEnter/ onMouseLeave</p>
            <p onMouseEnter={Enter} onMouseLeave={Leave}>Passe o mouse aqui</p>
            <hr />
            <p>evento onKeydown</p>
            <input type="text" placeholder='Digite algo...' onKeyDown={(event) => alert(event.key)} />
            <input type="text" placeholder='a - azul, v - vermelho, z - verde, w - branco s - laranja' onKeyUp={alterarCor} />
        </div>
    )
}

export default Aula05