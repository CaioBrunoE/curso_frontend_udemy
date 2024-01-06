import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//1- Configurando router
import Contact from './routes/Contact.jsx'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

//2- pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'

//3- Componet base
import Home from './routes/Home.jsx'

//7-Rots dinsmics
import Products from './routes/Products.jsx'

//8 nested rout
import Info from './routes/Info.jsx'
import Search from './routes/Search.jsx'

import { Navigate } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    //3 componet base
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      //7- rota dinamica
      {
        path:"products/:id",
        element:<Products/>
      },
      //8-nested rout
      {
        path:"products/:id/info",
        element:<Info/>
      },
      //0 seach
      {
        path:"search",
        element:<Search/>
      },
      {
        path:"test",
        element: <Navigate to="/"/>
      }
    ]
  },
  /* {
     path: "contacts",
     element: <Contact />
   }*/
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
