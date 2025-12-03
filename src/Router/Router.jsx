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
import Contact from "../Pages/Contact";
import Support from "../Pages/Support";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home, loader: () => fetch("/allgame.json"),
         hydrateFallbackElement:<Loader></Loader>
       },
      {
        path:'/games',Component: OurGames, loader: () => fetch("/allgame.json"), hydrateFallbackElement:<Loader></Loader>
      },
      {
        path: '/details/:Id', 
        element:<Details/>
        ,loader: () => fetch("/allgame.json"),
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
      },
      {path: '/contact', Component:Contact
      },
      {path: '/support', Component: Support},
    ],
  },
  {path:'/*', Component: Error404}
]);
export default router;
