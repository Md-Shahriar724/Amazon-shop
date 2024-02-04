import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const myCreatedRouter = createBrowserRouter([
  {
    path:'/',
    element:<div>This is my created Router</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myCreatedRouter} ></RouterProvider>
  </React.StrictMode>,
)
