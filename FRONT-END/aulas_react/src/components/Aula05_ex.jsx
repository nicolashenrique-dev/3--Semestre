
const Aula05_ex = () => {

    return (
        <div>
            <hr />
            <button onClick={() => alert('Botão 1')}>Botão 1</button>
            <button onClick={() => alert('Botão 2')}>Botão 2</button>
            <hr />
            <input type="text" onChange={(e) => console.log(e.target.value)} />
            <hr />
            <p onMouseEnter={(event) => event.target.style.backgroundColor = 'blue'} onMouseLeave={(event) => event.target.style.backgroundColor = 'white'}>passem o mouse aqui</p>
            <hr />
            <input type="text" onKeyDown={(event) => console.log(event.key)} />
            <hr />

            <input 
                type="text" 
                placeholder="Teste os eventos aqui"
                onClick={() => console.log('Evento: onClick')}
                onChange={(e) => console.log('Evento: onChange', e.target.value)}
                onMouseEnter={() => console.log('Evento: onMouseEnter')}
                onMouseLeave={() => console.log('Evento: onMouseLeave')}
                onKeyDown={(e) => {
                    console.log('Evento: onKeyDown', e.key);
                    const colors = { 'a': 'blue', 'w': 'black', 'd': 'red', 's': 'yellow', 'f': 'green' };
                    if (colors[e.key]) {
                        e.target.style.color = colors[e.key];
                    } else if (e.key === '+') {
                        const currentSize = parseInt(window.getComputedStyle(e.target).fontSize);
                        e.target.style.fontSize = (currentSize + 2) + 'px';
                    } else if (e.key === '-') {
                        const currentSize = parseInt(window.getComputedStyle(e.target).fontSize);
                        e.target.style.fontSize = (currentSize - 2) + 'px';
                    }
                }} 
            />  
            <hr />



            <hr />
            <p>Nessa aula aprendemos sobre eventos</p>
            <p>onClick - ao clicar</p>
            <p>onDoubleClick - ao clicar duas vezes</p>
            <p>onChange - ao alterar</p>
            <p>onMouseEnter - ao passar o mouse</p>
            <p>onMouseLeave - ao sair o mouse</p>
            <p>onKeyDown - ao pressionar uma tecla</p>
        </div>
    )
}

export default Aula05_ex
