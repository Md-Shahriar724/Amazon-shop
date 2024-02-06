import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashbord/Dashboard";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Products from "../Pages/Products/Products";
import { createBrowserRouter } from "react-router-dom";
import Profile from "../Pages/Profile/Profile";

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
          element: <Product></Product>,
          loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
          
        },
        {
            path : '/dashboard',
            element: <DashboardLayout></DashboardLayout>,
            children:[
              {
                path : '/dashboard',
                element : <Dashboard></Dashboard>
              },

              {
                path :'/dashboard/profile',
                element : <Profile></Profile>
              }
            ]
        }
      ]
      
    }
  ])

export default myCreatedRouter;