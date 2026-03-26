import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"

function Perfil() {
    
    const {nome} = useParams()
    return (
        <div>
            <h1>Perfil de {nome}</h1>
            <Link to="/">Voltar</Link>
        </div>
    )
}

export default Perfil