//import React from 'react'

export default function TemplateExpression() {
    const name ="Caio";

    const data ={
        age:24,
        job:"Programador",
    };

  return (
    <div>
        <p>Asoma e : {2 + 2}</p>
        <p>Bem vindo {name}</p>
        <p>
            Sua idade e {data.age} anos e voce e um {data.job}.
        </p>
    </div>
  )
}
