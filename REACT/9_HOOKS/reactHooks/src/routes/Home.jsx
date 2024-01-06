import HookUseEffect from "../components/HookUseEffect"
import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"

import { useContext } from "react"
import { SeomeContext } from "../components/HookUseContext"
import HookUseRef from "../components/HookUseRef"
import HookUseCallback from "../components/HookUseCallback"
import HookUseMemo from "../components/HookUseMemo"
import HookUseLayoutEffect from "../components/HookUseLayoutEffect"
import HookuseImperativeHandle from "../components/HookUseImperativeHandle"
import HookCustom from "../components/HookCustom"

const Home = () => {

    const { contextValue } = useContext(SeomeContext)

    return (
        <div>
            <h1>Home</h1>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
            <h2>useContext</h2>
            <p>Valor do contexto: {contextValue}</p>
            <hr />
            <HookUseRef/>
            <HookUseCallback/>
            <HookUseMemo/>
            <HookUseLayoutEffect/>
            <HookuseImperativeHandle/>
            <HookCustom/>

        </div>
    )
}

export default Home