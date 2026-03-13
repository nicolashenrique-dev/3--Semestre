import { estilos } from "../style/estilos";
import { useState, useEffect } from "react";



const Aula12_ViaCep = () => {

    const [cep, setCep] = useState('')
    const [dados, setDados] = useState({})

    useEffect(() => {
        const dadosSalvos = JSON.parse(localStorage.getItem('dados') || '[]')
        setDados(dadosSalvos)
    }, [])

    const buscarDados = async (e) => {
        e.preventDefault()
        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const dadosObtidos = await resposta.json()

            if (dadosObtidos.erro) {
                alert("CEP não encontrado!")
                setDados({})
                return
            }

            console.log(dadosObtidos)
            setDados(dadosObtidos)

        } catch (erro) {
            console.error(erro)
            alert("Erro na requisição. Verifique o CEP informado.")
        }
    }

    const LimparDados = () => {
        setDados({})
        setCep('')
    }

    return (
        <div style={estilos.cardAula}>
            {/* Input chamada api*/}

            <h1>Procure seu CEP</h1>
            <form action="" style={estilos.formulario}>
                <input style={estilos.input} type="text" placeholder="Digite seu CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={estilos.botao} type="submit" onClick={buscarDados}>Buscar</button>
                    <button style={{...estilos.botao, backgroundColor: 'gray'}} type="button" onClick={LimparDados}>Limpar</button>
                </div>
            </form>

            {/* Resultado da api*/}
            {dados.logradouro && (
                <div style={estilos.cardProduto}>
                    <h3 style={{ margin: 0, color: 'blue' }}>Endereço Encontrado</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%', textAlign: 'left' }}>
                        <p style={{ margin: 0 }}><b>Logradouro: </b>{dados.logradouro}</p>
                        <p style={{ margin: 0 }}><b>Bairro: </b>{dados.bairro}</p>
                        <p style={{ margin: 0 }}><b>Cidade: </b>{dados.localidade} - {dados.uf}</p>
                        <p style={{ margin: 0 }}><b>DDD: </b>{dados.ddd}</p>
                    </div>
                </div>
            )}


        </div>


    )
}


export default Aula12_ViaCep
