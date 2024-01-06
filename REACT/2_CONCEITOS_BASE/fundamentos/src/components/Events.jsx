
function Events() {
const handleClick =(e)=>{
    console.log(e)
    console.log("Executando")
}
//8 função de renderização
const renderSomething =(x)=>{
    if(x){
         return <h1>Renderizando isso!</h1>
    }else{
        return <h1>Renderizando outra coisa</h1>
    }
}

  //return 10 > 2 && <p>Carregando</p>;

  return (
    <div>
        <div>
            <button onClick={()=>console.log("testando um evento")}>
                click aqui
            </button>
        </div>
        <div>
            <button onClick={handleClick}>Click aqui- com função</button>
        </div>
            {renderSomething(true)}
            {renderSomething(false)}
    </div>
  )
}

export default Events