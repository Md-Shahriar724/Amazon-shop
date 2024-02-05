import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashbord/Dashboard";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Products from "../Pages/Products/Products";
import { createBrowserRouter } from "react-router-dom";

const myCreatedRouter = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout>,
      children:[
        {
            path : "/",
            element : <Home></Home>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/products',
          element: <Products></Products>,
          loader: ()=>fetch('https://dummyjson.com/products')
        },
        {
          path:'/products/:id',
          element: <Product></Product>
        },
        {
            path : '/dashboard',
            element: <Dashboard></Dashboard> 
        }
      ]
      
    }
  ])

export default myCreatedRouter;