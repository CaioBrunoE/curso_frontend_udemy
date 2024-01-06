import './App.css'
import Navibar from "./components/NavBar"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Navibar/>
      <h1>Context API</h1>
      <Outlet/>
    </>
  )
}

export default App
