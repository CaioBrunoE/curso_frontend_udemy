import { useLayoutEffect,useEffect,useState } from "react";


const HookUseLayoutEffect = () => {

    const [name,setName]=useState("Algum nome")

useEffect(()=>{
    console.log("2")
    setName("Mudou de novo")
},[])

useLayoutEffect(()=>{
    console.log("1")
    setName("Outro nome")
},[])

  return (
    <div>
        <h2>useLayputEffect</h2>
        <p>Nome: {name}</p>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect