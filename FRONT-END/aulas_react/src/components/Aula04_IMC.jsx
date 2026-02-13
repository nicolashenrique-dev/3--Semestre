const Aula04_IMC = ({nome, peso, altura, cor}) => {
    let imc = peso / (altura * altura)
    
    return (


        <div>
            <h3>Calculadora de IMC</h3>
            <p style={{color: cor}}>Nome: {nome}</p>
            <p style={{color: cor}}>Peso: {peso}kg</p>
            <p style={{color: cor}}>Altura: {altura}cm</p>
            <p style={{color: cor}}>IMC: {imc.toFixed(2)}kg/m²</p>
       
        </div>
    )
}

export default Aula04_IMC