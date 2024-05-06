import ForWomen from "./Home/Women/WomenHead";
import { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavBar } from "./Home/navbar";
import { Home } from "./Home/home";
import { ForMen } from "./Home/Men/Men";
import ProductDetail from "./Home/Men/productDetail";
import { useState, useEffect } from "react";
import { CartDetail } from "./Home/Cart/cartDetail";
import { numberOfProductsInCart } from "./Home/navbar";
import ForKids from "./Home/Kids/KidsHead";
import ProductCodedDetail from "./Home/HardCodedDetail";
import { addToCartHard } from "./Home/HardCodedDetail";
import ErrorPage from "./ErrorPage";
// context

export let productInCart = [];
export let totalPrice = [];

const addToCart = (product, quantity) => {
  numberOfProductsInCart();

  let cartProduct = {
    id: product.node.id,
    description: product.node.description,
    title: product.node.title,
    price: product.node.variants.edges[0].node.price.amount,
    quantity: quantity,
    images: product.node.featuredImage.url,
  };

  const existingProductIndex = productInCart.findIndex(
    (item) => item.title === cartProduct.title
  );

  if (existingProductIndex !== -1) {
    productInCart[existingProductIndex].quantity += quantity;
  } else {
    productInCart.push(cartProduct);
  }

  totalPrice[0] = findingTotalPrice();
};

export const findingTotalPrice = () => {
  let sum = 0;
  for (let i = 0; i < productInCart.length; i++) {
    sum += productInCart[i].price * productInCart[i].quantity;
  }
  totalPrice = [sum];
  return sum;
};

export const removeFromCart = (productName) => {
  const updatedCart = productInCart.filter(
    (item) => item.title !== productName
  );
  productInCart.splice(0, productInCart.length, ...updatedCart); // Update cart with the filtered items
  totalPrice[0] = findingTotalPrice(); // Recalculate total price
};

export const ShopContext = createContext({
  addToCart,
  productInCart,
  totalPrice,
  addToCartHard,
  removeFromCart,
});

const Router = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const request = await fetch(
          "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
        );

        const response = await request.json();
        const productData = response.data.products.edges;
        setProducts(productData);
        setLoading(false);
        localStorage.setItem("products", JSON.stringify(productData));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "men",
          element: <ForMen products={products} loading={loading} />,
        },
        {
          path: "women",
          element: <ForWomen products={products} loading={loading} />,
        },
        {
          path: "kids",
          element: <ForKids products={products} loading={loading} />,
        },
        {
          path: "/:title",
          element: <ProductDetail products={products} />,
        },
        {
          path: "/cart",
          element: (
            <CartDetail productInCart={productInCart} totalCost={totalPrice} />
          ),
        },
        {
          path: "coded/:name",
          element: <ProductCodedDetail />,
        },
      ],
    },
  ]);
  return (
    <ShopContext.Provider value={{ addToCart, productInCart, removeFromCart }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};

export default Router;
