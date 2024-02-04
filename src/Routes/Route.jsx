import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
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
          element: <Products></Products>
        }
      ]
      
    }
  ])

export default myCreatedRouter;