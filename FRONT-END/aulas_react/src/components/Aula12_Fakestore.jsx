import { estilos } from "../style/estilos";
import { useState, useEffect } from "react";

const Aula12_Fakestore = () => {

    const [dados, setDados] = useState({})
    const [id, setId] = useState('')

    const buscarDados = async (e) => {
        e.preventDefault()
        try {
            const resposta = await fetch(`https://fakestoreapi.com/products/${id}`)
            const dadosObtidos = await resposta.json()
            console.log(dadosObtidos)
            setDados(dadosObtidos)
        } catch (erro) {
            console.error(erro)
            alert("Erro ao buscar o produto.")
        }
    }
    return (
        <div style={estilos.cardAula}>

            <h1>Fakestore</h1>
            <hr />

            <form style={estilos.formulario}>
                <input style={estilos.input} type="number" placeholder="Digite o ID do produto" value={id} onChange={(e) => setId(e.target.value)} />
                <button style={estilos.botao} type="submit" onClick={buscarDados}>Buscar</button>
            </form>


            {/*loja fake*/}
            {dados.title && (
                <div style={estilos.cardProduto}>
                    <h3 style={{ margin: 0, color: 'blue' }}>Produto Encontrado</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '100%', textAlign: 'left' }}>
                        <p style={{ margin: 0 }}><b>Título: </b>{dados.title}</p>
                        <p style={{ margin: 0 }}><b>Preço: </b>R$ {dados.price}</p>
                        <p style={{ margin: 0 }}><b>Descrição: </b>{dados.description}</p>
                        <p style={{ margin: 0 }}><b>Categoria: </b>{dados.category}</p>
                        <img src={dados.image} alt={dados.title} style={{ width: '150px', alignSelf: 'center', margin: '10px 0' }} />
                        {dados.rating && (
                            <p style={{ margin: 0 }}><b>Avaliação: </b>{dados.rating.rate} ({dados.rating.count} avaliações)</p>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}

export default Aula12_Fakestore
