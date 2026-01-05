import {
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/home/home/Authentication/login/Login";
import Register from "../pages/home/home/Authentication/register/Register";
import Coverage from "../pages/home/home/coverage/Coverage";
import SendParcel from "../pages/home/home/SendParcel/SendParcel";
import PrivateRoutes from './../routes/PrivateRoutes'


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { 
        index: true,
        Component:Home,
  },
  {
    path:"coverage",
    Component:Coverage,
    loader:()=>fetch('./ServiceCenter.json')
  },
  {
    path:"sendParcel",
    element:<PrivateRoutes><SendParcel></SendParcel></PrivateRoutes>
  }

],
 
},
{
  path:"/",
  Component:AuthLayout,
  children:[
    {
      path:"login",
      Component:Login,
    },
    {
      path:"register",
      Component:Register,
    }
  ]
}

]);