import { useParams } from "react-router-dom"

function Info() {
  const { id }=useParams();
    
  return (
    <div>
        <h1>Informações sobre o produto : {id}</h1>
    </div>
  )
}

export default Info