import { estilos } from "../style/estilos"
import { useState, useEffect } from "react"

const Aula11_Cadastro = () => {

const [listaProdutos, setListaProdutos] = useState([])
const [nome, setNome] = useState('')
const [preco, setPreco] = useState('')
const [url, setUrl] = useState('')
const [url_produto, setUrlProduto] = useState('')
const [categoria, setCategoria] = useState('')
const [freteGratis, setFreteGratis] = useState(false)

useEffect(() => {
    const listaSalva = JSON.parse(localStorage.getItem('listaProdutos') || '[]')
    setListaProdutos(listaSalva)
}, [])

const handleCadastrar = (e) => {
    e.preventDefault()
    const produto = {
        nome,
        preco,
        url,
        url_produto,
        categoria,
        freteGratis
    }
    setListaProdutos([...listaProdutos, produto])
    localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos))
}

const Limpar = () => {
setListaProdutos([])
setNome('')
setPreco('')
setUrl('')
setUrlProduto('')
setCategoria('')
setFreteGratis(false)
localStorage.removeItem('listaProdutos')
}

    return (
        <div style={estilos.cardAula}>
            
            <h1>Cadastro de produtos </h1>
                <form action="" style={estilos.formulario}>
                    <label>Nome do produto</label>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        style={estilos.input}
                    />

                    <label>Preço do produto</label>
                    <input 
                        type="text" 
                        placeholder="Preço"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        style={estilos.input}
                    />

                    <label>URL da imagem :</label>
                    <input 
                        type="text" 
                        placeholder="URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        style={estilos.input}

                    />

                    <label>URL do produto:</label>
                    <input 
                        type="text" 
                        placeholder="URL"
                        value={url_produto}
                        onChange={(e) => setUrlProduto(e.target.value)}
                        style={estilos.input}
                    />

                    <select 
                        name="categoria" 
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        style={estilos.select}
                    >
                        <option value="">Selecione a categoria</option>
                        <option value="Eletrônicos">Eletrônicos</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Alimentos">Alimentos</option>
                        <option value="Outros">Outros</option>
                    </select>

                    <label>Frete grátis</label>
                    <input 
                        type="checkbox"
                        checked={freteGratis}
                        onChange={(e) => setFreteGratis(e.target.checked)}
                        style={estilos.checkbox}
                    />

                    <button type="submit" onClick={handleCadastrar} style={estilos.botao}>Cadastrar</button>
                    <button type="button" onClick={Limpar} style={estilos.botao}>Limpar</button>
                </form>

{/*listagem de produtos*/}
                <div>
                    {listaProdutos.map((produto, index) => (
                        <div key={index} style={estilos.cardProduto}>
                            <p>{produto.nome}</p>
                            <p>{produto.preco}</p>
                            <img src={produto.url} style={estilos.imagem_produto} />
                            <p>{produto.url_produto}</p>
                            <p>{produto.categoria}</p>
                            <p>{produto.freteGratis}</p>
                        </div>
                    ))}
                </div>

        </div>
    )
}

export default Aula11_Cadastro