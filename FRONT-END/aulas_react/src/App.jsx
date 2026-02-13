import Cabecalho from "./components/Cabecalho"
import Aula01 from "./components/Aula01"
import Aula02 from "./components/Aula02"
import Aula03 from "./components/Aula03"
import Aula04 from "./components/Aula04"
import Aula05 from "./components/Aula05"
import Aula05_ex from "./components/Aula05_ex"
import { estilos } from "./style/estilos" 

const App = () => {
  return (
   <div style={estilos.fundo}>
    <Cabecalho aula="ReactJS"/>
    <main style={estilos.conteudo}>
      <h2>Aulas</h2>
      <div style={estilos.lista_aulas}>
        {/*incluiremos todos os componentes de aulas aqui*/}
        <Aula01 />
        <Aula02 />
        <Aula03 />
        <Aula04 />
        <Aula05 />
        <Aula05_ex />
      </div>
    </main>
   </div>
  )
}

export default App