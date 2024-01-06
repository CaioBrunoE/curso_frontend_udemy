import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'

const url = "h"

function App() {
  //1- Resgatando dados

  const [products, setProducts] = useState([])

  // 4 custom hook

  const { data: items, httpConfig, loading, erros } = useFetch(url);

  /*useEffect(() => {
    async function getData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data)
    }
    getData();

  }, []);*/

  //Enviando dados  
  const [name, setName] = useState("");
  const [price, setPrice] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    //5 refatorando post

    httpConfig(product, "POST")

    /*const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    });

    //3 carregamento dinamico

    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);
*/
  };




  return (
    <>
      <h1>Http em react</h1>
      {/*6 loading */}
      {loading && <p>Carregando...</p>}
      {/*7- error */}
      {erros && <p>{erros}</p> }
      {/*1 Resgatando dados */}
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name}- R$ {product.price}
          </li>
        ))}
      </ul>
      {/*2- Enviando dados*/}
      <div className="add-products">
        <form onSubmit={handleSubmit}>
          <label >
            <span>Nome:</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label >
            <span>Price:</span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          { /* <input type="submit" value="Enviar" />*/}
          {/*7 Loading post*/}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </>
  )
}
export default App
