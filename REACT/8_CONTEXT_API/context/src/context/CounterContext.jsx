// 1-Criar context
import { createContext, useState } from "react";


export const CounterContext = createContext();

//2- criar provinder
export const CounterContextProvinder = ({childre})=>{
  const [counter, setCounter]=useState(5);

  return(
    <CounterContext.Provider value={{counter, setCounter}}>
        {childre}
    </CounterContext.Provider>
  )


}