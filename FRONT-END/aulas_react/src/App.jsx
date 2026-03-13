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
import Aula08 from "./components/Aula08"
import Aula09 from "./components/Aula09"
import Aula09_ListaNomes from "./components/Aula09_lista"
import Aula11 from "./components/Aula11"
import Aula12 from "./components/Aula12"
import Aula12_ViaCep from "./components/Aula12_ViaCep"
import Aula12_Fakestore from "./components/Aula12_Fakestore"


const App = () => {
  return (
    <div style={estilos.fundo}>
      <Cabecalho aula="ReactJS" />
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
          <Aula08 />
          <Aula09 />
          <Aula09_ListaNomes />
          <Aula11 />
          <Aula12 />
          <Aula12_ViaCep />
          <Aula12_Fakestore />

        </div>
      </main>
    </div>
  )
}

export default App