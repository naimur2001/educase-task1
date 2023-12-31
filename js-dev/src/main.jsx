import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Route.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
 <div>
   <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>

  </React.StrictMode>
 </div>,
)
