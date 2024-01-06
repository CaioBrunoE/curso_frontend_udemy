import { useState } from "react";

function ConditionalRender() {
   const name = "Caio";
    
    const [valor,setValor]=useState(0); 
    const aumentarValor=(v)=>{ 
        setValor(valor + v);
    }

    return (
        <div>
            <h3>Isso sera renderizado ?</h3>
            {/*7- Render condicional */}
            {valor > 5 && <p>Se o valor for maior que 5 sim</p>}
            <button onClick={()=>aumentarValor(1)}>Renderizar {valor}</button>
            {/*8- Render ternario */}
            <h3>Render Ternario</h3>
            {name == "joao" ? (
                <div>
                    <p>Olá João</p>
                </div>
            ) : (
                <div>
                    <p>Nome nao encontrado</p>
                </div>
            )}
        </div>
    )
}

export default ConditionalRender