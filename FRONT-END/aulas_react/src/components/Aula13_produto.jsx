const Aula13_produto = ({ produto, botaoExcluir, handleEditar }) => {
    return (
        <div className="card-item">
            {produto.link_imagem ? (
                <img src={produto.link_imagem} alt={produto.nome} className="card-image" />
            ) : null}
            <div className="card-content">
                <h3 className="card-title">{produto.nome || 'Produto sem nome'}</h3>
                <p className="card-price">R$ {Number(produto.preco || 0).toFixed(2)}</p>
                <div className="card-details">
                    <p className="card-text"><strong>Categoria:</strong> {produto.categoria || 'Sem categoria'}</p>
                    {produto.frete_gratis && <span className="badge">🚀 Frete Grátis</span>}
                </div>
                
                <div className="card-actions-row" style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {produto.link_produto && (
                        <a href={produto.link_produto} target="_blank" rel="noreferrer" className="card-primary-link" style={{ 
                            textDecoration: 'none', 
                            background: '#0071e3', 
                            color: 'white', 
                            padding: '12px', 
                            borderRadius: '980px', 
                            textAlign: 'center',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                        }}>
                            Ver Detalhes
                        </a>
                    )}
                    <button 
                        type="button" 
                        onClick={() => botaoExcluir(produto.id_produto)} 
                        className="btn-delete"
                    >
                        Remover do Catálogo
                    </button>
                    <button 
                        type="button" 
                        onClick={() => handleEditar(produto)} 
                        className="btn-edit"
                    >
                        Editar Produto
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Aula13_produto