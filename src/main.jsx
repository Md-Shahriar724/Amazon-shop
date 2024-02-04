import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import About from './Pages/About/About'
// import MainLayout from './Layout/MainLayout'
// import Products from './Pages/Products/Products'
import myCreatedRouter from './Routes/Route'


// All this routes are shifted into Route component.


// const myCreatedRouter = createBrowserRouter([
//   {
//     path:'/',
//     element:<MainLayout></MainLayout>,
//     children:[
//       {
//         path:'/about',
//         element: <About></About>
//       },
//       {
//         path:'/products',
//         element: <Products></Products>
//       }
//     ]
    
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={myCreatedRouter} ></RouterProvider>
  </React.StrictMode>,
)
