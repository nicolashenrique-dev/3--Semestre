import { useState, useEffect } from "react"
import Aula13_produto from "./Aula13_produto"

const Aula13_CRUD_Produtos = () => {

    const [listaProdutos, setListaProdutos] = useState([])
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [link_imagem, setLinkImagem] = useState('')
    const [link_produto, setLinkProduto] = useState('')
    const [categoria, setCategoria] = useState('')
    const [frete, setFrete] = useState(false)
    //variaveis para editar

    const [editando, setEditando] = useState(false)
    const [id_produto, setIdProduto] = useState('')


    //funçãopara carregar os dados
    const handleEditar = (produto) => {

        setEditando(true)
        setIdProduto(produto.id_produto)
        setNome(produto.nome)
        setPreco(produto.preco)
        setLinkImagem(produto.link_imagem)
        setLinkProduto(produto.link_produto)
        setCategoria(produto.categoria)
        setFrete(produto.frete_gratis)
    }

    


    const handleCadastrar = async (e) => {
        e.preventDefault()




        const produto = {
            nome: nome,
            preco: preco,
            link_imagem: link_imagem,
            link_produto: link_produto,
            categoria: categoria,
            frete_gratis: frete
        }

        try {
            
        let endpoint = "http://10.130.35.9:3000/produtos"
        let metodo = 'POST'

        if (editando) {
            endpoint = "http://10.130.35.9:3000/produtos/" + id_produto
            metodo = 'PUT'
        }

            const resposta = await fetch(endpoint, {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            })

            if (!resposta.ok) {
                throw new Error(`Erro ao ${editando ? 'atualizar' : 'cadastrar'} produto!`)
            }
            
            if (editando) {
                setEditando(false)
                setIdProduto('')
            }
            
            LimparCamposFormularios()
            buscarDados()

        } catch (error) {
            console.log(error)
        }


    }
    const botaoExcluir = async (id_produto) => {
        if (!window.confirm('Tem certeza que deseja excluir este produto?')) {
            return
        }

        try {

            const resposta = await fetch(`http://10.130.35.9:3000/produtos/${id_produto}`, {
                method: 'DELETE',
                body: JSON.stringify(id_produto)
            })

            if (!resposta.ok) {
                throw new Error('Erro ao deletar produto!')
            }
            buscarDados()

        } catch (error) {
            console.log(error)
        }


    }

    const LimparCamposFormularios = () => {
        setNome('')
        setPreco('')
        setLinkImagem('')
        setLinkProduto('')
        setCategoria('')
        setFrete(false)
    }

    useEffect(() => {
        const listaSalva = JSON.parse(localStorage.getItem('listaProdutos') || '[]')
        setListaProdutos(listaSalva)
    }, [])

    useEffect(() => {
        buscarDados()
    }, [])

    const Limpar = () => {
        setListaProdutos([])
        setNome('')
        setPreco('')
        setLinkImagem('')
        setLinkProduto('')
        setCategoria('')
        setFrete(false)
        setEditando(false)
        setIdProduto('')
        localStorage.removeItem('listaProdutos')
    }

    async function buscarDados() {
        try {
            const resposta = await fetch("http://10.130.35.9:3000/produtos")
            const dados = await resposta.json()
            setListaProdutos(dados)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="crud-container">
            <h2 className="crud-title">
                {editando ? 'Editar Produto' : 'Catálogo de Produtos'}
            </h2>

            <form className="crud-form">
                <div className="form-group">
                    <label>Nome do produto</label>
                    <input type="text" placeholder="Ex: Notebook M1" value={nome} onChange={(e) => setNome(e.target.value)} className="form-input" />
                </div>

                <div className="form-group">
                    <label>Preço do produto</label>
                    <input type="text" placeholder="Ex: 5999.00" value={preco} onChange={(e) => setPreco(e.target.value)} className="form-input" />
                </div>

                <div className="form-group">
                    <label>URL da imagem</label>
                    <input type="text" placeholder="https://..." value={link_imagem} onChange={(e) => setLinkImagem(e.target.value)} className="form-input" />
                </div>

                <div className="form-group">
                    <label>URL do produto</label>
                    <input type="text" placeholder="https://..." value={link_produto} onChange={(e) => setLinkProduto(e.target.value)} className="form-input" />
                </div>

                <div className="form-group full-width">
                    <label>Categoria</label>
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="form-select">
                        <option value="">Selecione a categoria</option>
                        <option value="Eletrônicos">Eletrônicos</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Alimentos">Alimentos</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>

                <div className="form-checkbox-group">
                    <input type="checkbox" id="freteOpcao" checked={frete} onChange={(e) => setFrete(e.target.checked)} className="form-checkbox" />
                    <label htmlFor="freteOpcao" className="form-checkbox-label">Disponibilizar Frete Grátis</label>
                </div>

                <div className="crud-actions">
                    <button type="button" onClick={handleCadastrar} className="btn-primary">
                        {editando ? 'Atualizar Produto' : 'Cadastrar Produto'}
                    </button>
                    {editando && (
                        <button type="button" onClick={() => {
                            setEditando(false)
                            setIdProduto('')
                            LimparCamposFormularios()
                        }} className="btn-secondary">
                            Cancelar Edição
                        </button>
                    )}
                </div>
            </form>

            <div className="cards-grid">
                {listaProdutos.map((produto, index) => produto ? (
                    <Aula13_produto 
                        key={index} 
                        produto={produto} 
                        botaoExcluir={botaoExcluir} 
                        handleEditar={handleEditar}
                    />
                ) : null)}
            </div>

        </div>
    )
}

export default Aula13_CRUD_Produtos