import { useState } from "react"

function HookUseState() {
    //1- UseState
    let username = "João"
    const [name, SetName] = useState("Caio");

    const changeNames = () => {
        username = " João da Silva"

        SetName("Caio Bruno")
    }
    // 2 - useState e input
    const [age, setAge] = useState(18);

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(age);
    }

    return (
        <div>
            {/*1-Use state */}
            <h2>useState</h2>
            <p>Variavel: {username}</p>
            <p>Variavel: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
            { /*2-use state e input */}
            <form onSubmit={handleSubmit}>
                <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            <p>Voce tem {age} anos.</p>
            <hr />
        </div>
    )
}

export default HookUseState