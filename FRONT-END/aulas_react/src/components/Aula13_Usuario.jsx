const Aula13_Usuario = ({ usuario, botaoExcluir, handleEditar }) => {
    return (
        <div className="card-item">
            <div className="card-content user-card-content">
                <div className="user-avatar">
                    {usuario.nome ? String(usuario.nome).charAt(0).toUpperCase() : 'U'}
                </div>
                <h3 className="card-title" style={{ marginBottom: '5px' }}>{usuario.nome || 'Usuário Desconhecido'}</h3>
                <p className="card-text" style={{ margin: '5px 0' }}>
                    <span style={{ opacity: 0.6 }}>✉️</span> {usuario.email || 'sem e-mail'}
                </p>
                <p className="card-text" style={{ fontSize: '0.85rem', color: '#999' }}>
                    <span style={{ opacity: 0.6 }}>🔑</span> {usuario.senha ? 'Senha registrada' : 'Sem Senha'}
                </p>
                
                <div className="card-actions-row" style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                    <button 
                        type="button" 
                        onClick={() => handleEditar(usuario)} 
                        className="btn-edit"
                    >
                        Editar Usuário
                    </button>
                    <button 
                        type="button" 
                        onClick={() => botaoExcluir(usuario.id_usuario)} 
                        className="btn-delete"
                    >
                        Excluir Usuário
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Aula13_Usuario
