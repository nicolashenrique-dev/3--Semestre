import { useState, useEffect } from "react"
import Aula13_Usuario from "./Aula13_Usuario"

const Aula13_CRUD_Usuarios = () => {

    const [listaUsuarios, setListaUsuarios] = useState([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    // Variáveis para editar
    const [editando, setEditando] = useState(false)
    const [id_usuario, setIdUsuario] = useState('')

    // Função para carregar os dados no formulário
    const handleEditar = (usuario) => {
        setEditando(true)
        setIdUsuario(usuario.id_usuario)
        setNome(usuario.nome)
        setEmail(usuario.email)
        setSenha(usuario.senha)
    }

    const LimparCamposFormularios = () => {
        setNome('')
        setEmail('')
        setSenha('')
        setEditando(false)
        setIdUsuario('')
    }
    const handleCadastrar = async (e) => {
        e.preventDefault()
        const usuario = { nome, email, senha }

        try {
            let endpoint = "http://10.130.35.9:3000/usuarios"
            let metodo = 'POST'

            if (editando) {
                endpoint = "http://10.130.35.9:3000/usuarios/" + id_usuario
                metodo = 'PUT'
            }

            const resposta = await fetch(endpoint, {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            })

            if (!resposta.ok) {
                throw new Error(`Erro ao ${editando ? 'atualizar' : 'cadastrar'} usuário!`)
            }

            LimparCamposFormularios()
            buscarDados()
        } catch (error) {
            console.log(error)
        }
    }

    const botaoExcluir = async (id_usuario) => {
        if (!window.confirm('Tem certeza que deseja excluir este usuário?')) {
            return
        }

        try {
            const resposta = await fetch(`http://10.130.35.9:3000/usuarios/${id_usuario}`, {
                method: 'DELETE',
                body: JSON.stringify(id_usuario)
            })

            if (!resposta.ok) {
                throw new Error('Erro ao deletar usuário!')
            }
            buscarDados()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const listaSalva = JSON.parse(localStorage.getItem('listaUsuarios') || '[]')
        setListaUsuarios(listaSalva)
    }, [])

    useEffect(() => {
        buscarDados()
    }, [])

    const Limpar = () => {
        setListaUsuarios([])
        LimparCamposFormularios()
        localStorage.removeItem('listaUsuarios')
    }

    async function buscarDados() {
        try {
            const resposta = await fetch("http://10.130.35.9:3000/usuarios")
            const dados = await resposta.json()
            setListaUsuarios(dados)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="crud-container">
            <h2 className="crud-title">
                {editando ? 'Editar Usuário' : 'Controle de Usuários'}
            </h2>

            <form className="crud-form">
                <div className="form-group full-width">
                    <label>Nome do usuário</label>
                    <input type="text" placeholder="Ex: Maria Alice" value={nome} onChange={(e) => setNome(e.target.value)} className="form-input" />
                </div>

                <div className="form-group">
                    <label>E-mail Corporativo</label>
                    <input type="email" placeholder="maria@empresa.com" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
                </div>

                <div className="form-group">
                    <label>Senha Segura</label>
                    <input type="password" placeholder="••••••••" value={senha} onChange={(e) => setSenha(e.target.value)} className="form-input" />
                </div>

                <div className="crud-actions">
                    <button type="button" onClick={handleCadastrar} className="btn-primary">
                        {editando ? 'Atualizar Usuário' : 'Registrar Usuário'}
                    </button>
                    {editando ? (
                         <button type="button" onClick={LimparCamposFormularios} className="btn-secondary">Cancelar Edição</button>
                    ) : (
                        <button type="button" onClick={Limpar} className="btn-secondary">Esvaziar Registros</button>
                    )}
                </div>
            </form>

            <div className="cards-grid">
                {listaUsuarios.map((usuario, index) => usuario ? (
                    <Aula13_Usuario 
                        key={index} 
                        usuario={usuario} 
                        botaoExcluir={botaoExcluir} 
                        handleEditar={handleEditar}
                    />
                ) : null)}
            </div>

        </div>
    )
}

export default Aula13_CRUD_Usuarios