
import './App.css'

const App = () => {

  return (
    <>
      <div className="aluno-container">
        <h1>Perfil do Aluno</h1>
        <p><strong>Nome:</strong> Nicolas</p>
        <p><strong>RM:</strong> 3082</p>
        <p><strong>Escola:</strong> SESI SENAI</p>
        <p><strong>Turma:</strong> 3º Médio - B</p>
        
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHR4Znd4Znd4Znd4Znd4Znd4Znd4Znd4Znd4Znd4Znd4Znd4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxPucV0YIKY/giphy.gif" 
          alt="Estudante animado" 
          width="300"
        />

        <h2>Matérias - 3º Ano Médio</h2>
        <ul>
          <li>Matemática</li>
          <li>Língua Portuguesa</li>
          <li>Física </li>
          <li>Química </li>
          <li>Biologia </li>
          <li>História </li>
          <li>Geografia </li>
          <li>Língua Inglesa</li>
        </ul>
      </div>


    </>
  )
}

export default App
