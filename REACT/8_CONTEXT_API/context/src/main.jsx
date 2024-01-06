import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './routes/Home.jsx'

import Contact from './routes/Contact.jsx'

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

//2-criando provinder
import { CounterContextProvinder } from './context/CounterContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvinder>
      <RouterProvider router={router}/>
    </CounterContextProvinder>
  </React.StrictMode>
)
