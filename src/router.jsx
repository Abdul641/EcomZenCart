import { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from "./navbar";
import { Home } from "./home";

// context
const ShopContext = createContext({
  addToCart: () => {},
});

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
