import Cabecalho from "./components/Cabecalho"
import Aula01 from "./components/Aula01"
import Aula02 from "./components/Aula02"
import Aula03 from "./components/Aula03"
import Aula04 from "./components/Aula04"
import Aula05 from "./components/Aula05"
import Aula05_ex from "./components/Aula05_ex"
import Aula06 from "./components/Aula06"
import { estilos } from "./style/estilos" 
import Aula06_contador from "./components/Aula06_contador"
import Aula06_placar from "./components/Aula06_placar"
import Aula07 from "./components/Aula07"
import { Aula07_Perfil } from "./components/Aula07_Perfil"



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
        <Aula06 />
        <Aula06_contador />
        <Aula06_placar />
        <Aula07 />
        <Aula07_Perfil />


      </div>
    </main>
   </div>
  )
}

export default App