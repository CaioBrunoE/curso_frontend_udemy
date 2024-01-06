import { useEffect, useState } from "react";



function HookUseEffect() {
    //1- useEffect
    useEffect(() => {
        console.log("Estou sendo executado")
    });

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    //2- array de dep vazio 
    useEffect(()=>{
        console.log("Serei excutado apenas uma vex")
    },[])

    //3 array de dependencia com valores
    const [anotherNumber,setAnotherNumber] =useState(0)
    useEffect(()=>{
     
        if(anotherNumber > 0 ){
            console.log("Sou executado apenas quando muda o anotherNuber")
        }
    },[anotherNumber])

    //4-cleanup do useEffect
    useEffect(()=>{
        const timer= setTimeout(()=>{
            console.log("Hello World")
            setAnotherNumber(anotherNumber+1)
        },2000)
        return ()=>clearTimeout(timer)
    }, [anotherNumber])

    return (
        <div>
            <h2>UseEffect</h2>
            <p>Number:{number}</p>
            <button onClick={changeSomething}>Executar</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={()=>setAnotherNumber(anotherNumber + 1)}>Mudar o another</button>
        </div>
    )
}

export default HookUseEffect