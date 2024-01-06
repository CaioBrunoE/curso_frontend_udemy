import "./MyForm.css";
import { useState } from "react";

function MyForm({userName,userEmail,userBio,userRole}) {

    //UseStade para obter dados inpute
    const [name,setName]=useState(userName);
    const [email,setEmail]=useState(userEmail);
    const [bio, setBio]=useState(userBio);
    const [role, setRole]=useState(userRole)

    const handleName = (e)=>{
        setName(e.target.value);

    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log(email,name)

        //vakidação 
        //envio
        //7- Limpar form
        setName("");
        setEmail("");
        setBio("")
        setRole("")
        
    }

    console.log(name, email , bio , role)

  return (
    <div>
        {/*1- criando form */}
        {/*5- Envio de formulario */}
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name">Nome:</label>
                {/*3-Usestate input */}
                <input
                 type="text" 
                 name="name" 
                 placeholder="Digite seu nome" 
                 onChange={handleName} 
                 //6- controled input 
                 value={name }
                 />
            </div>
            {/*2- Label envolve input */}
            <label >
                <span>E-mail</span>
                {/*4- Simplificando manipulação */}
                <input 
                type="text" 
                name="email" 
                placeholder="Digite seu e-mail" 
                onChange={(e)=> setEmail(e.target.value)}
                //6- controled input 
                value={email || ""}
                />
            </label>
            <label>
                <span>BIO:</span>
                <textarea name="bio" onChange={(e)=>setBio(e.target.value)} value={bio} placeholder="Descrição do usuario"></textarea>
            </label>
            <label >
                <select name="role" onChange={(e)=>setRole(e.target.value)}
                 value={role}
                >
                 <option value="user">Usuario</option>
                 <option value="editor">Editor</option>
                 <option value="admin">Admin</option>
                 </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm