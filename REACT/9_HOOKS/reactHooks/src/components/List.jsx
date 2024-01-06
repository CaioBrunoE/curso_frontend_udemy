import { useEffect,useState } from "react"

const List = ({getItens}) => {

    const [myItems, setMyitems]=useState([])

    useEffect(()=>{
     
        console.log("Buscando os dados no DB...")

        setMyitems(getItens);

    },[getItens]);

  return (
    <div>
        {myItems&&myItems.map((item)=><p key={item}>{item}</p>)}
    </div>
  )
}

export default List