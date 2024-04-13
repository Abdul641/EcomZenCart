import { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from "./Home/navbar";
import { Home } from "./Home/home";
import { ForMen } from "./Home/Men/Men";
import ProductDetail from "./Home/Men/productDetail";
// context
const ShopContext = createContext({
  addToCart: () => {},
});

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { index: true, element: <Home /> },
        { path: "men", element: <ForMen /> },
        { path: "/:title", element: <ProductDetail /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
