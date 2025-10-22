import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import OurGames from "../Pages/OurGames";
import Details from "../Pages/Details";

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
      }
    ],
  },
]);
export default router;
