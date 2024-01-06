import './App.css'
import { useState } from 'react'
//2 imagem em assets
import city from './assets/city.jpg'

import CarDetails from './components/CarDetails'

import ConditionalRender from './components/ConditionalRender'

import Container from './components/Container'

import Data from './components/Data'
import ExecuteFunction from './components/ExecuteFunction'

import Fragments from './components/Fragments'
//4 renderizaçao de lista
import ListRender from './components/ListRender'

import ShowUserName from './components/ShowUserName'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

//11 renderização de listas com componets
const cars=[
  {id:1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id:1, brand: "KIA", color: "Branco", km: 20000},
  {id:1, brand: "Ferrari", color: "Azul", km: 32000},
]


function App() {
   function showMessage(){
    console.log("Executando a função")
   }
   //15- state lift
   const [message, setMessage]=useState("");

   const handleMessage=(msg) =>{
    setMessage(msg)
   }

  return (
    < >
      <div>
        <h1>Avançando em React</h1>
        {/*1 imagem em public*/}
        <img src="/img1.jpg" alt="Alguma imagem" />

        {/*2 imagem em assets*/}
        <img src={city} alt="cidade a noite" />
        {/*3 useState*/}
        <Data />
        {/*4 Map*/}
        <ListRender/>
        {/*7- Renderização condicional */}
        <ConditionalRender/>
        {/*8- Props */}
        <ShowUserName name="Caio"/>
        {/*Desestruturando props */}
        <CarDetails brand="VW" km={12} color="vermelho"/>
        {/*Reaproveitamento de componets */}
        <CarDetails brand="Fiat" km={33} color="azul"/>
        <CarDetails brand="Audi" km={3566} color="branco"/>
        {/*11 -renderização de listas com componets  */}
        {cars.map((car)=>(
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
        ))}
         {/*12 - Fragments  */}
         <Fragments/>
         {/* */}
         <Container>
          <div>
            <h2>Teste </h2>
            <p>Meu Container</p>
          </div>
         </Container>
         <ExecuteFunction myFunction={showMessage}/>

         {/*15 state lift */}
         <Message msg={message}/>
          <ChangeMessage handleMessage={handleMessage}/>
      </div>
    </>
  )
}

export default App
