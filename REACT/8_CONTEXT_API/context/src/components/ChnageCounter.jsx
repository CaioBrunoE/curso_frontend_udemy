import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

//3 refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

function ChnageCounter() {
   
    const {counter,setCounter}=useCounterContext();

  return (
    <div>
        <button onClick={()=>setCounter(counter+1)}>Incrementar</button>
    </div>
  )
}

export default ChnageCounter