import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext =()=>{
    const context =useContext(CounterContext);

    if(!context){
        console.log("Contexto nao encontrado")
        return
    }

    console.log(context)

    return context;
};