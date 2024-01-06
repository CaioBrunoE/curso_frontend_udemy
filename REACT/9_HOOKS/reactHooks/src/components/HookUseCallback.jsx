import { useCallback ,useState} from "react";
import List from "./List";


const HookUseCallback = () => {
const [counter, setCounter]=useState(0)

const getItemsFromDataBase=useCallback(()=>{
    return["a","b","c"]
},[]);


  return (
    <div>
        <h2>useCalback</h2>
        <List getItens={getItemsFromDataBase}/>
        <button onClick={()=>setCounter(counter +1)}>Alterara!</button>
        <p>{counter}</p>
        <hr />
    </div>
  )
}

export default HookUseCallback
