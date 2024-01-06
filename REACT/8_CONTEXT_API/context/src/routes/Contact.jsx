//3 açterando valor do contexto
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
//4 refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

function Contact() {
    const {counter}= useCounterContext()

    return (
        <div>
            <h1>Pagina de Contatos</h1>
            <p>Valor do contador:{counter}</p>
        </div>
    )
}

export default Contact