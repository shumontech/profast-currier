import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/home/home/Authentication/login/Login";
import Register from "../pages/home/home/Authentication/register/Register";
import Coverage from "../pages/home/home/coverage/Coverage";
import SendParcel from "../pages/home/home/SendParcel/SendParcel";
import PrivateRoutes from "../routes/PrivateRoutes";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MyParcels from "../pages/home/home/dashboard/MyParcels/MyParcels";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "coverage",
        element: <Coverage />,
        loader: () => fetch("/ServiceCenter.json"),
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRoutes>
            <SendParcel />
          </PrivateRoutes>
        ),
      },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "myParcels",
        element: <MyParcels />,
      },
    ],
  },
]);
