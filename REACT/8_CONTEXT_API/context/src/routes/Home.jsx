//3- alterando valor context
//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"
import ChnageCounter from "../components/ChnageCounter"
//4 refatorano contexto
import { useCounterContext } from "../hooks/useCounterContext"

const Home = () => {
//const {counter}=useContext(CounterContext)

const {counter} = useCounterContext();

    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador:{counter}</p>
            <ChnageCounter/>
        </div>
    )
}

export default Home