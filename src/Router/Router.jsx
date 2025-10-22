import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import OurGames from "../Pages/OurGames";
import Details from "../Pages/Details";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error404 from "../Pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home, loader: () => fetch("../game.json") },
      {
        path:'/games',Component: OurGames, loader: () => fetch("../game.json")
      },
      {
        path: '/details/:Id', Component:Details,loader: () => fetch("../game.json")
      },
      {
        path:'/login', Component:Login
      },
      {
        path:'/register', Component:Register
      }
    ],
  },
  {path:'/*', Component: Error404}
]);
export default router;
