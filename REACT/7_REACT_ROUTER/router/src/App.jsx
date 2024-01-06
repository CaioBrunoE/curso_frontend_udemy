import './App.css'

//3-componet base
import { Outlet } from 'react-router-dom'

//5 link entre paginas
import NavBar from './components/NavBar'

import SearhForm from './components/SearchForm'

function App() {

  return (
    <>
      <NavBar />
      <SearhForm/>
      <Outlet/>
      <p>Footer</p>
    </>
  )
}

export default App
