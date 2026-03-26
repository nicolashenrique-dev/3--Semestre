import { estilos } from "../style/estilos"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Aula14 = () => {
    const navigate = useNavigate()
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - React Router</h2>

            <p>O React Router é uma biblioteca de roteamento para React. Ele permite criar rotas para diferentes páginas do seu site.</p>


            <Link to="/sobre" style={estilos.link || { color: "white", textDecoration: "none" }}>Sobre</Link>
            <Link to="/nao-encontrado" style={estilos.link || { color: "white", textDecoration: "none" }}>Não Encontrado</Link>
            <Link to="/" style={estilos.link || { color: "white", textDecoration: "none" }}>Principal</Link>
            <br />
            <h3>Navegação com programação utilizando o navigate</h3>
            <button onClick={() => navigate("/sobre")}>Sobre</button>
            <button onClick={() => navigate("/nao-encontrado")}>Não Encontrado</button>
            <button onClick={() => navigate("/")}>Principal</button>
            <hr />
            <h3>rota dinamica com o useParams</h3>
            <button onClick={() => navigate("/perfil/nicolas")}>Perfil de Nicolas</button>
            <button onClick={() => navigate("/perfil/miguel")}>Perfil de Miguel</button>
            

        </div>
    )
}

export default Aula14