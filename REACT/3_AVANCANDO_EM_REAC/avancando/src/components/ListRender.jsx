import { useState } from "react"

function ListRender() {
    const [list] = useState(["Caio", "mateus", "Pedro"])
    
    const [users, setUsers]=useState([
        {id: 1, name: "Caio", age: 24},
        {id: 2, name:"Mateus",age:29},
        {id: 3,name:"João",age:34},
    ])

    const deleteRandom=()=>{
        const randomNumber = Math.floor(Math.random() * 4);
      {/*5 Previu state */}
        setUsers((prevUsers)=>
           prevUsers.filter((user)=> randomNumber !== user.id)
        );
    };

    return (
        <div>
            {/* 4 render sem key*/}
            <ul>
                {list.map((item , i)=>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
          {/* 5 render com key*/} 
          <ul>
            {users.map((user)=>(
                <li key={user.id}>Seu nome e {user.name}, e voce tem {user.age} anos</li>
            ))}
          </ul>
          {/*5 Previu state */}
          <button onClick={()=>deleteRandom()}>Deletar usuario</button>
        </div>
    )
}

export default ListRender