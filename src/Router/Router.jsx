import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import OurGames from "../Pages/OurGames";
import Details from "../Pages/Details";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error404 from "../Pages/Error404";
import Profile from "../Pages/Profile";
import PrivateRoute from "../Private/PrivateRoute";
import ProfileUpdate from "../Pages/ProfileUpdate";
import ResetPass from "../Pages/ResetPass";
import Loader from "../Pages/Loader";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home, loader: () => fetch("../game.json"),
         hydrateFallbackElement:<Loader></Loader>
       },
      {
        path:'/games',Component: OurGames, loader: () => fetch("../game.json"), hydrateFallbackElement:<Loader></Loader>
      },
      {
        path: '/details/:Id', 
        element:<PrivateRoute><Details/></PrivateRoute>
        ,loader: () => fetch("../game.json"),
        hydrateFallbackElement:<Loader></Loader>
      },
      {
        path:'/login', Component:Login
      },
      {
        path:'/register', Component:Register
      },
      {
        path:'/profile', element:<PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path:'/updateProfile', element:<PrivateRoute><ProfileUpdate/></PrivateRoute>
      },
      {
        path: '/reset', Component: ResetPass
      },
      {
        path: '/about', Component: About
      }
    ],
  },
  {path:'/*', Component: Error404}
]);
export default router;
