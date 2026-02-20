import { useState } from "react"

const Aula06_contador = () => {
    const [contador, setContador] = useState(0)
    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
<button
  onClick={() => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      console.log("Não foi possível diminuir");
    }
  }}
>
  Decrementar
</button>            <button onClick={() => setContador(0)}>Zerar</button>
        </div>
    )
}

export default Aula06_contador