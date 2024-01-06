import { useState } from "react"

function Data() {
    const someData = 10;
    /*3 UserState */
    const [anotherNumber, setAnotherNumber] = useState(15)
    const [valor, setValor] = useState(0)

    return (
        <div>
            <div>
                <p>Valor : {someData}</p>
                <button onClick={() => setAnotherNumber(20)}>Mudar variavel</button>
            </div>
            <div>
                <p>Numero : {valor}</p>
                <button onClick={() => setValor(valor + 1)}>Aumentar</button>
            </div>
            <div>
                <button onClick={() => setValor(valor - 1)}>Diminuir</button>
            </div>
            <div>
                <p>Valor :{anotherNumber}</p>
                <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
            </div>
        </div>

    )
}

export default Data