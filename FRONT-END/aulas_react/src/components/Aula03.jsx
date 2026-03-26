
import "../style/Aula03.css"
import { estilos } from "../style/estilos"
import Aula03Login from "./Aula03-login"

const Aula03 = () => {
    return (
        <div style={estilos.cardAula}>
          <h2>Aula 03 - Componentes e estilização</h2>
          <h3>Criação de componentes reutilizáveis e suas estilizações</h3>
          <p>Aprendemos a criação de componentes reutilizáveis e suas estilizações.</p>
          <hr />
          <p className="texto">CSS Externalizado</p>
         <p className="descricao">A forma mais simples e clássica de estilizar os componentes</p>
         <hr />
         <p style={estilos.titulo}>Estilização inline</p>
         <p style={estilos.descricao}>estilos aplicados diretamente no componente</p>
         <hr />
         <Aula03Login />
        </div>
    )
}



export default Aula03