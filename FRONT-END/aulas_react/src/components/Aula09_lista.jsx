import React, { useState, useEffect } from 'react';
import { estilos } from '../style/estilos';

const Aula09_Nome = ({ id, index, nome, item, onDelete }) => {
  return (
    <div style={estilos.cardAula}>
      <p>{index + 1}. {nome} - Levará: {item}</p>
      <button onClick={() => onDelete(id)}>Excluir</button>
    </div>
  );
};

const Aula09_ListaNomes = () => {
  const [listaPresenca, setListaPresenca] = useState([]);
  const [nome, setNome] = useState('');
  const [item, setItem] = useState('');

  useEffect(() => {
    const listaSalva = JSON.parse(localStorage.getItem('listaPresenca') || '[]');
    setListaPresenca(listaSalva);
  }, []);


  const adicionarPessoa = () => {
    if (nome.trim() !== '' && item.trim() !== '') {
      const novaPessoa = {
        id: Date.now(),
        nome: nome,
        item: item
        
      };
      setListaPresenca([...listaPresenca, novaPessoa]);
      setNome('');
      setItem('');
      localStorage.setItem('listaPresenca', JSON.stringify(listaPresenca));
    }
  };

  const removerPessoa = (id) => {
    setListaPresenca(listaPresenca.filter(pessoa => pessoa.id !== id));
  };

  const limparLista = () => {
    setListaPresenca ([])
    localStorage.removeItem('listaPresenca');
  };

  return (
    <div>
      <h1>Lista de Presença do Churrasco</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="O que vai levar?" 
          value={item} 
          onChange={(e) => setItem(e.target.value)} 
        />
        <button onClick={adicionarPessoa}>Adicionar</button>
      </div>

      <div>
        {listaPresenca.map((pessoa, index) => (
          <Aula09_Nome 
            key={pessoa.id}
            id={pessoa.id}
            index={index}
            nome={pessoa.nome}
            item={pessoa.item}
            onDelete={removerPessoa}
          />
        ))}
      </div>

      {listaPresenca.length > 0 && (
        <button onClick={limparLista} style={{ marginTop: '20px' }}>Limpar Lista</button>
      )}
    </div>
  );
};

export default Aula09_ListaNomes;