import { useEffect, useState, useRef } from "react";

import React from 'react'

const HookUseRef = () => {
    //1-useref
    const numberRef = useRef(0);
    const [counter, setCounter] = useState(0)
    const [counterb, setCounterb] = useState(0);

useEffect(()=>{
    numberRef.current= numberRef.current+1;
})
//2- useRef DOM
const inputRef =useRef()
const [text,setText]=useState("")

const handleSubmit=(e)=>{
  e.preventDefault();

  setText("")
  inputRef.current.focus();
}


    return (
        <div>
            <h2>useRef</h2>
            <p>O componete renderizou: {numberRef.current}</p>
            <p>Counter 1 :{counter}</p>
            <button onClick={()=>setCounter(counter+1)}>Contador a</button>
            <p>Counter 2 :{counterb}</p>
            <button onClick={()=>setCounterb(counterb + 1)}>Contador b</button>
           <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e)=>setText(e.target.value)} />
           <input type="submit" value="Enviar" />
           </form>
        </div>
    )
}

export default HookUseRef